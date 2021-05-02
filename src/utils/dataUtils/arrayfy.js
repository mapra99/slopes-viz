export const arrayfy = (object) => (
  Object.keys(object).map(id => ({
    id,
    ...object[id]
  }))
)
