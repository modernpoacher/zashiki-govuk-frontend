import transformFromSchema from 'shinkansen-transmission/lib/transmission/from-schema'

export const getType = ({ type } = {}) => (type ? { type } : {})

export const getComponent = ({ component } = {}) => (component ? { component } : {})

export const getName = ({ name } = {}) => (name ? { name } : {})

export const transformDescriptionToHint = (field = {}, text) => ({ ...field, ...(text ? { hint: { text } } : {}) })

export const transformTitleToLabel = (field = {}, text) => ({ ...field, ...(text ? { label: { text } } : {}) })

export const transformTitleToLegend = (field = {}, text) => ({ ...field, ...(text ? { legend: { text } } : {}) })

export const transformField = ({ name, id = name, ...field } = {}) => ({ ...field, ...(name ? { name } : {}), ...(id ? { id } : {}) })

export const transformFields = (fields = []) => fields.map(transform)

export const transformOne = ({
  meta = {},
  elements: {
    title,
    description,
    field
  } = {}
} = {}) => ({
  ...getType(meta),
  ...getComponent(meta),
  params: transformDescriptionToHint(transformTitleToLabel(transformField(field), title), description)
})

export const transformAll = ({
  meta = {},
  elements: {
    title,
    description,
    fields,
    ...field
  } = {}
} = {}) => ({
  ...getType(meta),
  ...getComponent(meta),
  params: transformDescriptionToHint(transformTitleToLegend(transformField(field), title), description),
  fields: transformFields(fields)
})

const transform = (schema = {}) => {
  const {
    meta: {
      type
    } = {}
  } = schema

  return (type === 'object' || type === 'array')
    ? transformAll(schema)
    : transformOne(schema)
}

export default (schema, ...args) => transform(transformFromSchema(schema, ...args))
