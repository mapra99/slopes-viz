export const pluck = (object, values) => (
  Object.keys(object).map(key => {
    const dataPoint = object[key];
    const result = []
    values.forEach(value => result.push(dataPoint[value]))

    return result
  })
)
