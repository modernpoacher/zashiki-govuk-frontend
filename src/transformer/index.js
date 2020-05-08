import debug from 'debug'

import toZashiki from 'shinkansen-transmission/lib/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/lib/transmission/from-document-to-hash'

import {
  hasEnum,
  hasOneOf,
  hasAnyOf,
  hasValue,
  getValue,
  hasComponent,
  getComponent,
  hasRequired,
  getRequired
} from './common'

const log = debug('zashiki:transformer:transform')

export const getName = ({ name } = {}) => (name ? { name } : {})

export const transformDescriptionToHint = (field = {}, text) => ({ ...field, ...(text ? { hint: { text } } : {}) })

export const transformTitleToText = (field = {}, text) => ({ ...field, ...(text ? { text } : {}) })

export const transformTitleToLabel = (field = {}, text) => ({ ...field, ...(text ? { label: { text } } : {}) })

export const transformTitleToLegend = (field = {}, text) => ({ ...field, ...(text ? { legend: { text } } : {}) })

export const transformTitleToFieldsetLegend = (field = {}, text) => ({ ...field, ...(text ? { fieldset: { legend: { text } } } : {}) })

export function transformElementsToCheckboxesEnum ({ selectedItems = [] }, { enum: { items = [], id, name = id, ...field } }, { uri, parentUri = uri }) {
  log('transformElementsToCheckboxesEnum')

  return {
    id: parentUri,
    items: items.map((value, index) => ({ text: String(value), value: String(index), id, name, checked: selectedItems.includes(index) })),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToCheckboxesAnyOf ({ selectedItems = [] }, { anyOf: { items = [], id, ...field } }, { uri, parentUri = uri }) {
  log('transformElementsToCheckboxesAnyOf')

  return {
    id: parentUri,
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToCheckboxesOneOf ({ selectedItems = [] }, { oneOf: { items = [], id, ...field } }, { uri, parentUri = uri }) {
  log('transformElementsToCheckboxesOneOf')

  return {
    id: parentUri,
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToCheckboxesField ({ selectedItems = [] }, { field: { value, id, name = id, ...field } }, { uri, parentUri = uri }) {
  log('transformElementsToCheckboxesField')

  return {
    id: parentUri,
    items: [
      {
        text: value,
        value,
        id,
        name,
        checked: selectedItems.includes(value)
      }
    ],
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

/*
 *
 *  `toZashiki` does not transform `enum` items to an object so it does not provide an `id` (it should)
 *
 *  `radios` id is `enum` id
 *  `radios` name is `enum` name or id
 *
 *  `radios` item `id` is omitted (not provided by `toZashiki`)
 *  `radios` item `name` is omitted (not required)
 */
export function transformElementsToRadiosEnum ({ selectedItems = [] }, { enum: { id, name = id, items = [], ...field } }) {
  log('transformElementsToRadiosEnum')

  return {
    id,
    name,
    items: items.map((value, index) => {
      /*
       *  A `radios` item can have a `hint` but an `enum` cannot
       */
      return { text: String(value), value: String(index), /* id, */ checked: selectedItems.includes(index) }
    }),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

/*
 *  `radios` id is `anyOf` id
 *  `radios` name is `anyOf` name or id
 *
 *  `radios` item `id` is the id
 *  `radios` item `name` is omitted (not required)
 */
export function transformElementsToRadiosAnyOf ({ selectedItems = [] }, { anyOf: { id, name = id, items = [], ...field } }) {
  log('transformElementsToRadiosAnyOf')

  return {
    id,
    name,
    items: items.map(({ elements: { title, description, field: { id, value } = {} } }, index) => {
      /*
       *  A `radios` item can have a `hint`
       */
      return transformDescriptionToHint({ ...(title ? { text: title } : { text: String(value) }), value: String(index), id, checked: selectedItems.includes(index) }, description)
    }),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

/*
 *  `radios` id is `oneOf` id
 *  `radios` name is `oneOf` id or name
 *
 *  `radios` item `id` is the id
 *  `radios` item `name` is omitted (not required)
 */
export function transformElementsToRadiosOneOf ({ selectedItems = [] }, { oneOf: { id, name = id, items = [], ...field } }) {
  log('transformElementsToRadiosOneOf')

  return {
    id,
    name,
    items: items.map(({ elements: { title, description, field: { id, value } = {} } }, index) => {
      /*
       *  A `radios` item can have a `hint`
       */
      return transformDescriptionToHint({ ...(title ? { text: title } : { text: String(value) }), value: String(index), id, checked: selectedItems.includes(index) }, description)
    }),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

/*
 *
 *  `toZashiki` does not transform `enum` items to an object so it does not provide an `id` (it should)
 *
 *  `select` id is `enum` id
 *  `select` name is `enum` name or id
 *
 *  `select` item `id` is omitted (not required)
 *  `select` item `name` is omitted (not required)
 */
export function transformElementsToSelectEnum ({ selectedItems = [] }, { enum: { id, name = id, items = [], ...field } }) {
  log('transformElementsToSelectEnum')

  return {
    id,
    name,
    items: items.map((value, index) => {
      /*
       *  A `select` item cannot have a `hint`
       */
      return { text: String(value), value: String(index), selected: selectedItems.includes(index) }
    }),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

/*
 *  `select` id is `anyOf` id
 *  `select` name is `anyOf` name or id
 *
 *  `select` item `id` is omitted (not required)
 *  `select` item `name` is omitted (not required)
 */
export function transformElementsToSelectAnyOf ({ selectedItems = [] }, { anyOf: { id, name = id, items = [], ...field } }) {
  log('transformElementsToSelectAnyOf')

  return {
    id,
    name,
    items: items.map(({ elements: { title, field: { value } } }, index) => {
      /*
       *  A `select` item cannot have a `hint`
       */
      return { ...(title ? { text: title } : { text: String(value) }), value: String(index), selected: selectedItems.includes(index) }
    }),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

/*
 *  `select` id is `oneOf` id
 *  `select` name is `oneOf` name or id
 *
 *  `select` item `id` is omitted (not required)
 *  `select` item `name` is omitted (not required)
 */
export function transformElementsToSelectOneOf ({ selectedItems = [] }, { oneOf: { id, name = id, items = [], ...field } }) {
  log('transformElementsToSelectOneOf')

  return {
    id,
    name,
    items: items.map(({ elements: { title, field: { value } } }, index) => {
      /*
       *  A `select` item cannot have a `hint`
       */
      return { ...(title ? { text: title } : { text: String(value) }), value: String(index), selected: selectedItems.includes(index) }
    }),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToInputEnum ({ items = [], selectedItems = [] }, { enum: { id, name = id, ...field } }) {
  log('transformElementsToInputEnum')

  return {
    items: items.map((value, index) => ({ text: String(value), value: String(index), /* id, name, */ selected: selectedItems.includes(index) })),
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToInputAnyOf ({ items = [], selectedItems = [] }, { anyOf: { id, name = id, ...field } }) {
  log('transformElementsToInputAnyOf')

  return {
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToInputOneOf ({ items = [], selectedItems = [] }, { oneOf: { id, name = id, ...field } }) {
  log('transformElementsToInputOneOf')

  return {
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToInputField (meta, { field: { id, name = id, ...field } }) {
  log('transformElementsToInputField')

  return {
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasValue(field) ? { value: getValue(field) } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {})
  }
}

export function transformElementsToGroup (meta, { id, name = id, ...elements } = {}) {
  log('transformElementsToGroup')

  return {
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(elements) ? { required: getRequired(elements) } : {}),
    ...(hasValue(elements) ? { value: getValue(elements) } : {})
  }
}

export function transformFields (meta, elements) {
  log('transformFields')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements), title),
    fields: fields.map(transform)
  }
}

export function transformField (meta, elements) {
  log('transformField')

  if (hasEnum(elements)) {
    log('transformField (`enum`)')

    return {
      enum: transformElementsToInputForEnum(meta, elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformField (`anyOf`)')

      return {
        anyOf: transformElementsToInputForAnyOf(meta, elements)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformField (`oneOf`)')

        return {
          oneOf: transformElementsToInputForOneOf(meta, elements)
        }
      } else {
        log('transformField (`field`)')

        return {
          field: transformElementsToInputForField(meta, elements)
        }
      }
    }
  }
}

export const transformElementsToCheckboxesForEnum = (meta, elements, parentMeta, {
  title,
  description
}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesEnum(meta, elements, parentMeta), title), description)

export const transformElementsToCheckboxesForAnyOf = (meta, elements, parentMeta, {
  title,
  description
}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesAnyOf(meta, elements, parentMeta), title), description)

export const transformElementsToCheckboxesForOneOf = (meta, elements, parentMeta, {
  title,
  description
}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesOneOf(meta, elements, parentMeta), title), description)

export const transformElementsToCheckboxesForField = (meta, elements, parentMeta, {
  title,
  description
}) => transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesField(meta, elements, parentMeta), title), description)

export function transformElementsToRadiosForEnum (meta, elements) {
  log('transformElementsToRadiosForEnum')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosEnum(meta, elements), title), description)
}

export function transformElementsToRadiosForAnyOf (meta, elements) {
  log('transformElementsToRadiosForAnyOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosAnyOf(meta, elements), title), description)
}

export function transformElementsToRadiosForOneOf (meta, elements) {
  log('transformElementsToRadiosForOneOf')

  const {
    title,
    description
  } = elements
  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosOneOf(meta, elements), title), description)
}

export function transformElementsToSelectForEnum (meta, elements) {
  log('transformElementsToSelectForEnum')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectEnum(meta, elements), title), description)
}

export function transformElementsToSelectForAnyOf (meta, elements) {
  log('transformElementsToSelectForAnyOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectAnyOf(meta, elements), title), description)
}

export function transformElementsToSelectForOneOf (meta, elements) {
  log('transformElementsToSelectForOneOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectOneOf(meta, elements), title), description)
}

export function transformElementsToInputForEnum (meta, elements) {
  log('transformElementsToInputForEnum')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToInputEnum(meta, elements), title), description)
}

export function transformElementsToInputForAnyOf (meta, elements) {
  log('transformElementsToInputForAnyOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToInputAnyOf(meta, elements), title), description)
}

export function transformElementsToInputForOneOf (meta, elements) {
  log('transformElementsToInputForOneOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToInputOneOf(meta, elements), title), description)
}

export function transformElementsToInputForField (meta, elements) {
  log('transformElementsToInputForField')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToInputField(meta, elements), title), description)
}

export function transformFieldToCheckboxes (meta, elements, parentMeta, parentElements) {
  log('transformFieldToCheckboxes')

  if (hasEnum(elements)) {
    log('transformFieldToCheckboxes (`enum`)')

    return {
      enum: transformElementsToCheckboxesForEnum(meta, elements, parentMeta, parentElements)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToCheckboxes (`anyOf`)')

      return {
        anyOf: transformElementsToCheckboxesForAnyOf(meta, elements, parentMeta, parentElements)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToCheckboxes (`oneOf`)')

        return {
          oneOf: transformElementsToCheckboxesForOneOf(meta, elements, parentMeta, parentElements)
        }
      } else {
        log('transformFieldToCheckboxes (`field`)')

        return {
          field: transformElementsToCheckboxesForField(meta, elements, parentMeta, parentElements)
        }
      }
    }
  }
}

export function transformFieldToDateInput (meta, elements) {

}

export function transformFieldToFileUpload (meta, elements) {

}

export function transformFieldToRadios (meta, elements) {
  log('transformFieldToRadios')

  if (hasEnum(elements)) {
    log('transformFieldToRadios (`enum`)')

    return {
      enum: transformElementsToRadiosForEnum(meta, elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToRadios (`anyOf`)')

      return {
        anyOf: transformElementsToRadiosForAnyOf(meta, elements)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToRadios (`oneOf`)')

        return {
          oneOf: transformElementsToRadiosForOneOf(meta, elements)
        }
      } else {
        log('transformFieldToRadios (`field`)')

        throw new Error('Schema incompatible with component `radios`')
      }
    }
  }
}

export function transformFieldToSelect (meta, elements) {
  log('transformFieldToSelect')

  if (hasEnum(elements)) {
    log('transformFieldToSelect (`enum`)')

    return {
      enum: transformElementsToSelectForEnum(meta, elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToSelect (`anyOf`)')

      return {
        anyOf: transformElementsToSelectForAnyOf(meta, elements)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToSelect (`oneOf`)')

        return {
          oneOf: transformElementsToSelectForOneOf(meta, elements)
        }
      } else {
        log('transformFieldToSelect (`field`)')

        throw new Error('Schema incompatible with component `select`')
      }
    }
  }
}

export function transformFieldToInput (meta, elements) {
  log('transformFieldToInput')

  if (hasEnum(elements)) {
    log('transformFieldToInput (`enum`)')

    return {
      enum: transformElementsToInputForEnum(meta, elements)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToInput (`anyOf`)')

      return {
        anyOf: transformElementsToInputForAnyOf(meta, elements)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToInput (`oneOf`)')

        return {
          oneOf: transformElementsToInputForOneOf(meta, elements)
        }
      } else {
        log('transformFieldToInput (`field`)')

        return {
          field: transformElementsToInputForField(meta, elements)
        }
      }
    }
  }
}

export const transformFieldsToCheckboxes = (parentMeta, {
  fields: [
    {
      meta,
      elements
    } = {}
  ] = [],
  title,
  description
} = {}) => {
  log('transformFieldsToCheckboxes')

  return transformFieldToCheckboxes(meta, elements, parentMeta, { title, description })
}

export function transformFieldsToDateInput (meta, elements) {
  log('transformFieldsToDateInput')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements), title),
    fields: fields.map(transform)
  }
}

export function transformFieldsToFileUpload (meta, elements) {
  log('transformFieldsToFileUpload')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements), title),
    fields: fields.map(transform)
  }
}

export function transformFieldsToInput (meta, elements) {
  log('transformFieldsToInput')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements), title),
    fields: fields.map(transform)
  }
}

export function transformFieldsToComponent (meta, elements) {
  log('transformFieldsToComponent')

  const {
    component
  } = meta

  switch (component) {
    case 'checkboxes':
      return transformFieldsToCheckboxes(meta, elements)
    default:
      return transformFieldsToInput(meta, elements)
  }
}

export function transformFieldToComponent (meta, elements) {
  log('transformFieldToComponent')

  const {
    component
  } = meta

  switch (component) {
    case 'date-input':
      return transformFieldToDateInput(meta, elements)
    case 'file-upload':
      return transformFieldToFileUpload(meta, elements)
    case 'radios':
      return transformFieldToRadios(meta, elements)
    case 'select':
      return transformFieldToSelect(meta, elements)
    default:
      return transformFieldToInput(meta, elements)
  }
}

export function transformOne ({ meta = {}, elements = {} } = {}) {
  log('transformOne')

  const {
    type
  } = meta

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
      ...transformField(meta, elements)
    }
  }
}

export function transformAll ({ meta = {}, elements = {} } = {}) {
  log('transformAll')

  const {
    type
  } = meta

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
      ...transformFields(meta, elements)
    }
  }
}

const transform = (zashiki = {}) => {
  log('transform')

  const {
    meta: {
      type
    } = {}
  } = zashiki

  return (type === 'object' || type === 'array')
    ? transformAll(zashiki)
    : transformOne(zashiki)
}

export function transformEmbark (definition, response, components) {
  log('transformEmbark')

  return transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components))
}

export function transformAlpha (description, definition, response, { meta: { classes = 'govuk-fieldset__legend--m', isPageHeading = false, ...meta } = {}, ...components } = {}) {
  log('transformAlpha')

  const zashiki = toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components)

  const {
    meta: {
      type
    } = {}
  } = zashiki

  if (type === 'object' || type === 'array') {
    return {
      zashiki: {
        group: {
          legend: {
            text: description,
            classes,
            isPageHeading
          }
        },
        fields: transformAll(zashiki)
      }
    }
  }

  return {
    zashiki: {
      group: {
        legend: {
          text: description,
          classes,
          isPageHeading
        }
      },
      fields: transformOne(zashiki)
    }
  }
}

export function transformOmega (description, definition, response, { meta: { classes = 'govuk-fieldset__legend--l', isPageHeading = true, ...meta } = {}, ...components } = {}) {
  log('transformOmega')

  const zashiki = toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, { ...components, meta: { ...meta, isPageHeading: true } })

  const {
    meta: {
      type
    } = {}
  } = zashiki

  if (type === 'object' || type === 'array') {
    return {
      zashiki: {
        group: {
          legend: {
            text: description,
            classes,
            isPageHeading
          }
        },
        fields: transformAll(zashiki)
      }
    }
  }

  return {
    zashiki: {
      group: {
        legend: {
          text: description,
          classes,
          isPageHeading
        }
      },
      fields: transformOne(zashiki)
    }
  }
}

export function transformDebark (definition, response, components) {
  log('transformDebark')

  return transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components))
}

export default (definition, response, components = {}) => transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}, components))
