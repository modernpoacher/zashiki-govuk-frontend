import fromSchema from 'shinkansen-transmission/lib/transmission/from-schema'
import fromDocument from 'shinkansen-transmission/lib/transmission/from-document'

export const hasEnum = (field = {}) => Reflect.has(field, 'enum')
export const getEnum = (field = {}) => Reflect.get(field, 'enum')

export const hasOneOf = (field = {}) => Reflect.has(field, 'oneOf')
export const getOneOf = (field = {}) => Reflect.get(field, 'oneOf')

export const hasAnyOf = (field = {}) => Reflect.has(field, 'anyOf')
export const getAnyOf = (field = {}) => Reflect.get(field, 'anyOf')

export const getType = ({ type } = {}) => (type ? { type } : {})

export const getComponent = ({ component } = {}) => (component ? { component } : {})

export const getName = ({ name } = {}) => (name ? { name } : {})

export const transformDescriptionToHint = (field = {}, text) => ({ ...field, ...(text ? { hint: { text } } : {}) })

export const transformTitleToLabel = (field = {}, text) => ({ ...field, ...(text ? { label: { text } } : {}) })

export const transformTitleToLegend = (field = {}, text) => ({ ...field, ...(text ? { legend: { text } } : {}) })

export const transformEnum = ({ items = [], selectedIndex, name, id = name, ...field }) => ({
  ...field,
  items: items.map((text, index) => ({ text, value: index, selected: selectedIndex === index })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {})
})

export const transformAnyOf = ({ items = [], selected = [], name, id = name, ...field }) => ({
  ...field,
  items: items.map(({ elements: { title, field: { value, name, id = name } } }) => ({ text: title, value, name, id, checked: selected.includes(value) })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {})
})

export const transformOneOf = ({ items = [], selected, name, id = name, ...field }) => ({
  ...field,
  items: items.map(({ elements: { title, field: { value, name, id = name } } }) => ({ text: title, value, name, id, checked: selected === value })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {})
})

export const transformField = ({ name, id = name, ...field } = {}) => ({ ...field, ...(name ? { name } : {}), ...(id ? { id } : {}) })

export const transformElementsForEnum = ({
  title,
  description,
  enum: {
    ...field
  }
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformEnum(field), title), description)

export const transformElementsForAnyOf = ({
  title,
  description,
  anyOf: {
    ...field
  }
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformAnyOf(field), title), description)

export const transformElementsForOneOf = ({
  title,
  description,
  oneOf: {
    ...field
  }
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformOneOf(field), title), description)

export const transformElementsForField = ({
  title,
  description,
  field
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformField(field), title), description)

export const transformFields = (fields = []) => fields.map(transform)

export const transformElements = (elements) => {
  if (hasEnum(elements)) {
    return {
      enum: transformElementsForEnum(elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      return {
        anyOf: transformElementsForAnyOf(elements)
      }
    } else {
      if (hasOneOf(elements)) {
        return {
          oneOf: transformElementsForOneOf(elements)
        }
      } else {
        return {
          params: transformElementsForField(elements)
        }
      }
    }
  }
}

export const transformOne = ({
  meta = {},
  elements = {}
} = {}) => ({
  ...getType(meta),
  ...getComponent(meta),
  ...transformElements(elements)
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

export default (definition, response, components) => transform(fromSchema(definition, fromDocument(response, definition), components))
