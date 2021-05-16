import { pluck, getUnique, groupBy } from './'

export const parseContourData = (data, zKey) => {
  const groupedByX = groupBy(data, "initialX")

  const xValues = getUnique(pluck(data, ["initialX"]).flat()).sort((a,b) => (a - b))
  const yValues = getUnique(pluck(data, ["initialY"]).flat()).sort((a,b) => (a - b))

  const zValues = xValues.map(x => (
    yValues.map(y => {
      const target = groupedByX[x].find(record => record["initialY"] === y)
      return target ? target[zKey] : null
    })
  ))

  console.log({ x: xValues, y: yValues, z: zValues })

  return { x: xValues, y: yValues, z: zValues }
}
