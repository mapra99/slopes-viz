import { pluck, getUnique, groupBy } from './'

export const parseContourData = (data, zKey, options) => {
  const nullValue = options.zeroesForNull ? 0 : null

  const groupedByX = groupBy(data, "initialX")

  const xValues = getUnique(pluck(data, ["initialX"]).flat()).sort((a,b) => (a - b))
  const yValues = getUnique(pluck(data, ["initialY"]).flat()).sort((a,b) => (b - a))

  const zValues = xValues.map(x => (
    yValues.map(y => {
      const target = groupedByX[x].find(record => record["initialY"] === y)
      return target ? target[zKey] : nullValue
    })
  ))

  return { x: xValues, y: yValues, z: zValues }
}
