import { arrayfy } from './arrayfy'

export const groupBy = (object, key) => {
  const dataArray = arrayfy(object);
  const groupedData = {}
  dataArray.forEach(data => {
    if(!groupedData[data[key]]) groupedData[data[key]] = []
    groupedData[data[key]].push(data)
  })

  return groupedData;
}
