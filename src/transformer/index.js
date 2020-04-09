import toZashiki from 'shinkansen-transmission/lib/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/lib/transmission/from-document-to-hash'

export const hasEnum = (field = {}) => Reflect.has(field, 'enum')
export const getEnum = (field = {}) => Reflect.get(field, 'enum')

export const hasOneOf = (field = {}) => Reflect.has(field, 'oneOf')
export const getOneOf = (field = {}) => Reflect.get(field, 'oneOf')

export const hasAnyOf = (field = {}) => Reflect.has(field, 'anyOf')
export const getAnyOf = (field = {}) => Reflect.get(field, 'anyOf')

export const hasType = (meta = {}) => Reflect.has(meta, 'type')
export const getType = (meta = {}) => Reflect.get(meta, 'type')

export const hasComponent = (meta = {}) => Reflect.has(meta, 'component')
export const getComponent = (meta = {}) => Reflect.get(meta, 'component')

export const hasRequired = (field) => Reflect.has(field, 'required')
export const getRequired = (field) => Reflect.get(field, 'required')

export const hasValue = (field) => Reflect.has(field, 'value')
export const getValue = (field) => Reflect.get(field, 'value')

export const getName = ({ name } = {}) => (name ? { name } : {})

export const transformDescriptionToHint = (field = {}, text) => ({ ...field, ...(text ? { hint: { text } } : {}) })

export const transformTitleToText = (field = {}, text) => ({ ...field, ...(text ? { text } : {}) })

export const transformTitleToLabel = (field = {}, text) => ({ ...field, ...(text ? { label: { text } } : {}) })

export const transformTitleToLegend = (field = {}, text) => ({ ...field, ...(text ? { legend: { text } } : {}) })

export const transformTitleToFieldsetLegend = (field = {}, text) => ({ ...field, ...(text ? { fieldset: { legend: { text } } } : {}) })

export const transformElementsToCheckboxesEnum = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map((value, index) => ({ text: String(value), value: String(index), name, id, checked: selectedItems.includes(index) })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToCheckboxesAnyOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title, description, field: { name, id = name } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), name, id, checked: selectedItems.includes(index) }, title), description)),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToCheckboxesOneOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title, description, field: { name, id = name } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), name, id, checked: selectedItems.includes(index) }, title), description)),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToCheckboxesField = ({ value, selectedItems = [], name, id = name, ...field }) => ({
  items: [
    {
      text: value,
      value,
      checked: selectedItems.includes(value)
    }
  ],
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToRadiosEnum = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map((value, index) => ({ text: String(value), value: String(index), /* name, id, */ checked: selectedItems.includes(index) })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToRadiosAnyOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title, description, field: { name, id = name } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), name, id, checked: selectedItems.includes(index) }, title), description)),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToRadiosOneOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title, description, field: { name, id = name } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), name, id, checked: selectedItems.includes(index) }, title), description)),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToRadiosField = ({ value, name, id = name, ...field }) => ({
  items: [
    {
      text: value,
      value,
      checked: value !== undefined
    }
  ],
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToSelectEnum = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map((value, index) => ({ text: String(value), value: String(index), /* name, id, */ selected: selectedItems.includes(index) })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToSelectAnyOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title } }, index) => {
    const value = String(index)

    return { ...(title ? { text: title } : { text: value }), value, selected: selectedItems.includes(index) }
  }),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToSelectOneOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title } }, index) => {
    const value = String(index)

    return { ...(title ? { text: title } : { text: value }), value: value, selected: selectedItems.includes(index) }
  }),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToSelectField = ({ value, name, id = name, ...field }) => ({
  items: [
    {
      text: value,
      value,
      selected: value !== undefined
    }
  ],
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToInputEnum = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map((value, index) => ({ text: String(value), value: String(index), /* name, id, */ selected: selectedItems.includes(index) })),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToInputAnyOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title, description, field: { name, id = name } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), name, id, checked: selectedItems.includes(index) }, title), description)),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToInputOneOf = ({ items = [], selectedItems = [], name, id = name, ...field }) => ({
  items: items.map(({ elements: { title, description, field: { name, id = name } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), name, id, checked: selectedItems.includes(index) }, title), description)),
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformElementsToInputField = ({ name, id = name, ...field }) => ({
  ...(name ? { name } : {}),
  ...(id ? { id } : {}),
  ...(hasValue(field) ? { value: getValue(field) } : {}),
  ...(hasRequired(field) ? { required: getRequired(field) } : {})
})

export const transformForFields = ({ name, id = name, fields = [], ...field } = {}) => ({ ...(name ? { name } : {}), ...(id ? { id } : {}), ...(hasRequired(field) ? { required: getRequired(field) } : {}), ...(hasValue(field) ? { value: getValue(field) } : {}), fields: fields.map(transform), ...field })

export const transformForField = ({ name, id = name, ...field } = {}) => ({ ...(name ? { name } : {}), ...(id ? { id } : {}), ...(hasRequired(field) ? { required: getRequired(field) } : {}), ...(hasValue(field) ? { value: getValue(field) } : {}), ...field })

export const transformFields = (elements) => {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToFieldsetLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformField (elements) {
  if (hasEnum(elements)) {
    return {
      enum: transformElementsToInputForEnum(elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      return {
        anyOf: transformElementsToInputForAnyOf(elements)
      }
    } else {
      if (hasOneOf(elements)) {
        return {
          oneOf: transformElementsToInputForOneOf(elements)
        }
      } else {
        return {
          field: transformElementsToInputForField(elements)
        }
      }
    }
  }
}

export const transformElementsToCheckboxesForEnum = ({
  enum: {
    ...field
  }
} = {}, {
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesEnum(field), title), description)

export const transformElementsToCheckboxesForAnyOf = ({
  anyOf: {
    ...field
  }
} = {}, {
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesAnyOf(field), title), description)

export const transformElementsToCheckboxesForOneOf = ({
  oneOf: {
    ...field
  }
} = {}, {
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesOneOf(field), title), description)

export const transformElementsToCheckboxesForField = ({
  field
} = {},
{
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesField(field), title), description)

export const transformElementsToRadiosForEnum = ({
  enum: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosEnum(field), title), description)

export const transformElementsToRadiosForAnyOf = ({
  anyOf: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosAnyOf(field), title), description)

export const transformElementsToRadiosForOneOf = ({
  oneOf: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosOneOf(field), title), description)

export const transformElementsToRadiosForField = ({
  field,
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosField(field), title), description)

export const transformElementsToSelectForEnum = ({
  enum: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectEnum(field), title), description)

export const transformElementsToSelectForAnyOf = ({
  anyOf: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectOneOf(field), title), description)

export const transformElementsToSelectForOneOf = ({
  oneOf: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectOneOf(field), title), description)

export const transformElementsToSelectForField = ({
  field,
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectField(field), title), description)

export const transformElementsToInputForEnum = ({
  enum: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformElementsToInputEnum(field), title), description)

export const transformElementsToInputForAnyOf = ({
  anyOf: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToInputAnyOf(field), title), description)

export const transformElementsToInputForOneOf = ({
  oneOf: {
    ...field
  },
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToInputOneOf(field), title), description)

export const transformElementsToInputForField = ({
  field,
  title,
  description
} = {}) => transformDescriptionToHint(transformTitleToLabel(transformElementsToInputField(field), title), description)

export function transformFieldToCheckboxes (elements, parentElements) {
  if (hasEnum(elements)) {
    return {
      enum: transformElementsToCheckboxesForEnum(elements, parentElements)
    }
  } else {
    if (hasAnyOf(elements)) {
      return {
        anyOf: transformElementsToCheckboxesForAnyOf(elements, parentElements)
      }
    } else {
      if (hasOneOf(elements)) {
        return {
          oneOf: transformElementsToCheckboxesForOneOf(elements, parentElements)
        }
      } else {
        return {
          field: transformElementsToCheckboxesForField(elements, parentElements)
        }
      }
    }
  }
}

export function transformFieldToDateInput (elements) {

}

export function transformFieldToFieldset (elements) {

}

export function transformFieldToFileUpload (elements) {

}

export function transformFieldToRadios (elements) {
  if (hasEnum(elements)) {
    return {
      enum: transformElementsToRadiosForEnum(elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      return {
        anyOf: transformElementsToRadiosForAnyOf(elements)
      }
    } else {
      if (hasOneOf(elements)) {
        return {
          oneOf: transformElementsToRadiosForOneOf(elements)
        }
      } else {
        return {
          field: transformElementsToRadiosForField(elements)
        }
      }
    }
  }
}

export function transformFieldToSelect (elements) {
  if (hasEnum(elements)) {
    return {
      enum: transformElementsToSelectForEnum(elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      return {
        anyOf: transformElementsToSelectForAnyOf(elements)
      }
    } else {
      if (hasOneOf(elements)) {
        return {
          oneOf: transformElementsToSelectForOneOf(elements)
        }
      } else {
        return {
          field: transformElementsToSelectForField(elements)
        }
      }
    }
  }
}

export function transformFieldToInput (elements) {
  if (hasEnum(elements)) {
    return {
      enum: transformElementsToInputForEnum(elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      return {
        anyOf: transformElementsToInputForAnyOf(elements)
      }
    } else {
      if (hasOneOf(elements)) {
        return {
          oneOf: transformElementsToInputForOneOf(elements)
        }
      } else {
        return {
          field: transformElementsToInputForField(elements)
        }
      }
    }
  }
}

export const transformFieldsToCheckboxes = ({
  fields: [
    {
      elements
    } = {}
  ] = [],
  title,
  description
} = {}) => transformFieldToCheckboxes(elements, { title, description })

export function transformFieldsToDateInput (elements) {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformFieldsToFieldset (elements) {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformFieldsToFileUpload (elements) {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformFieldsToRadios (elements) {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformFieldsToSelect (elements) {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformFieldsToInput (elements) {
  const {
    title,
    description,
    fields = []
  } = elements

  return {
    ...transformDescriptionToHint(transformTitleToLegend(transformForField(elements), title), description),
    fields: fields.map(transform)
  }
}

export function transformFieldsToComponent (meta, elements) {
  const { component } = meta

  switch (component) {
    case 'checkboxes':
      return transformFieldsToCheckboxes(elements)
    case 'date-input':
      return transformFieldsToDateInput(elements)
    case 'fieldset':
      return transformFieldsToFieldset(elements)
    case 'file-upload':
      return transformFieldsToFileUpload(elements)
    case 'radios':
      return transformFieldsToSelect(elements)
    case 'select':
      return transformFieldsToRadios(elements)
    default:
      return transformFieldsToInput(elements)
  }
}

export function transformFieldToComponent (meta, elements) {
  const { component } = meta

  switch (component) {
    case 'checkboxes':
      return transformFieldToCheckboxes(elements)
    case 'date-input':
      return transformFieldToDateInput(elements)
    case 'fieldset':
      return transformFieldToFieldset(elements)
    case 'file-upload':
      return transformFieldToFileUpload(elements)
    case 'radios':
      return transformFieldToRadios(elements)
    case 'select':
      return transformFieldToSelect(elements)
    default:
      return transformFieldToInput(elements)
  }
}

export const transformOne = ({
  meta = {},
  elements = {}
} = {}) => {
  const type = getType(meta)

  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return {
      type,
      component,
      ...transformFieldToComponent(meta, elements)
    }
  } else {
    return {
      type,
      ...transformField(elements)
    }
  }
}

export const transformAll = ({
  meta = {},
  elements = {}
} = {}) => {
  const type = getType(meta)

  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return {
      type,
      component,
      ...transformFieldsToComponent(meta, elements)
    }
  } else {
    return {
      type,
      ...transformFields(elements)
    }
  }
}

const transform = (zashiki = {}) => {
  const {
    meta: {
      type
    } = {}
  } = zashiki

  return (type === 'object' || type === 'array')
    ? transformAll(zashiki)
    : transformOne(zashiki)
}

export default (definition, response, components) => transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components))
