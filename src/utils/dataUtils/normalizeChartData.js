import { groupBy, pluck } from './'

export const normalizeChartData = (object) => {
  const groupedByX = groupBy(object, 'initialX')
  const maxLengthY = Math.max(...Object.keys(groupedByX).map(xGroup => groupedByX[xGroup].length))

  const groupedByY = groupBy(object, 'initialY')
  const maxLengthX = Math.max(...Object.keys(groupedByY).map(yGroup => groupedByY[yGroup].length))

  const onlyY = pluck(object, ['initialY']).flat()
  const yMin = Math.min(...onlyY)
  const yMax = Math.max(...onlyY)

  const onlyX = pluck(object, ['initialX']).flat()
  const xMin = Math.min(...onlyX)
  const xMax = Math.max(...onlyX)

  const normalizedData = {}
  Object.keys(object).forEach(id => {
    const dataPoint = {...object[id]}

    normalizedData[id] = {
      ...dataPoint,
      yCoord: Math.round(maxLengthX * (dataPoint.initialY - yMin)/(xMax - xMin)),
      xCoord: Math.round(maxLengthX * (dataPoint.initialX - xMin)/(xMax - xMin))
    }
  })

  return normalizedData
}
