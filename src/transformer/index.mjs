import debug from '#zashiki-govuk-frontend/debug'

import toZashiki from 'shinkansen-transmission/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/transmission/from-document-to-hash'

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
} from './common/index.mjs'

import {
  hasError,
  getError
} from './common/error.mjs'

import toErrorMessage from './to-error-message.mjs'

const log = debug('zashiki/transformer')

log('`zashiki` is awake')

function toValues (response, definition) {
  if (response !== undefined) {
    return (
      fromDocumentToHash(response, definition)
    )
  }

  return {}
}

export function getName ({ name } = {}) {
  return (name ? { name } : {})
}

export function transformDescriptionToHint (field = {}, text = null) {
  return {
    ...field,
    ...(text ? { hint: { text } } : {})
  }
}

export function transformTitleToText (field = {}, text = null) {
  return {
    ...field,
    ...(text ? { text } : {})
  }
}

export function transformTitleToLabel (field = {}, text = null) {
  return {
    ...field,
    ...(text ? { label: { text } } : {})
  }
}

export function transformTitleToLegend (field = {}, text = null) {
  return {
    ...field,
    ...(text ? { legend: { text } } : {})
  }
}

export function transformTitleToFieldsetLegend (field = {}, text = null) {
  return {
    ...field,
    ...(text ? { fieldset: { legend: { text } } } : {})
  }
}

export function transformElementsToCheckboxesEnum ({ selectedItems = [] } = {}, { enum: { items = [], id, name = id, ...field } } = {}, { uri, parentUri = uri } = {}, { components, errors } = {}) {
  log('transformElementsToCheckboxesEnum')

  return {
    id: parentUri,
    items: items.map((value, index) => ({ text: String(value), value: String(index), id, name, checked: selectedItems.includes(index) })),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, parentUri) ? { errorMessage: toErrorMessage(getError(errors, parentUri), components) } : {})
  }
}

export function transformElementsToCheckboxesAnyOf ({ selectedItems = [] } = {}, { anyOf: { items = [], id, ...field } } = {}, { uri, parentUri = uri } = {}, { components, errors } = {}) {
  log('transformElementsToCheckboxesAnyOf')

  return {
    id: parentUri,
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, parentUri) ? { errorMessage: toErrorMessage(getError(errors, parentUri), components) } : {})
  }
}

export function transformElementsToCheckboxesOneOf ({ selectedItems = [] } = {}, { oneOf: { items = [], id, ...field } } = {}, { uri, parentUri = uri } = {}, { components, errors } = {}) {
  log('transformElementsToCheckboxesOneOf')

  return {
    id: parentUri,
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, parentUri) ? { errorMessage: toErrorMessage(getError(errors, parentUri), components) } : {})
  }
}

export function transformElementsToCheckboxesField ({ selectedItems = [] } = {}, { field: { value, id, name = id, ...field } } = {}, { uri, parentUri = uri } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, parentUri) ? { errorMessage: toErrorMessage(getError(errors, parentUri), components) } : {})
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
export function transformElementsToRadiosEnum ({ selectedItems = [], uri } = {}, { enum: { id, name = id, items = [], ...field } } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

/*
 *  `radios` id is `anyOf` id
 *  `radios` name is `anyOf` name or id
 *
 *  `radios` item `id` is the id
 *  `radios` item `name` is omitted (not required)
 */
export function transformElementsToRadiosAnyOf ({ selectedItems = [], uri } = {}, { anyOf: { id, name = id, items = [], ...field } } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

/*
 *  `radios` id is `oneOf` id
 *  `radios` name is `oneOf` id or name
 *
 *  `radios` item `id` is the id
 *  `radios` item `name` is omitted (not required)
 */
export function transformElementsToRadiosOneOf ({ selectedItems = [], uri } = {}, { oneOf: { id, name = id, items = [], ...field } } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
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
export function transformElementsToSelectEnum ({ selectedItems = [], uri } = {}, { enum: { id, name = id, items = [], ...field } } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

/*
 *  `select` id is `anyOf` id
 *  `select` name is `anyOf` name or id
 *
 *  `select` item `id` is omitted (not required)
 *  `select` item `name` is omitted (not required)
 */
export function transformElementsToSelectAnyOf ({ selectedItems = [], uri } = {}, { anyOf: { id, name = id, items = [], ...field } } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

/*
 *  `select` id is `oneOf` id
 *  `select` name is `oneOf` name or id
 *
 *  `select` item `id` is omitted (not required)
 *  `select` item `name` is omitted (not required)
 */
export function transformElementsToSelectOneOf ({ selectedItems = [], uri } = {}, { oneOf: { id, name = id, items = [], ...field } } = {}, { components, errors } = {}) {
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
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

export function transformElementsToInputEnum ({ items = [], selectedItems = [], uri } = {}, { enum: { id, name = id, ...field } } = {}, { components, errors } = {}) {
  log('transformElementsToInputEnum')

  return {
    items: items.map((value, index) => ({ text: String(value), value: String(index), /* id, name, */ selected: selectedItems.includes(index) })),
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

export function transformElementsToInputAnyOf ({ items = [], selectedItems = [], uri } = {}, { anyOf: { id, name = id, ...field } } = {}, { components, errors } = {}) {
  log('transformElementsToInputAnyOf')

  return {
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

export function transformElementsToInputOneOf ({ items = [], selectedItems = [], uri } = {}, { oneOf: { id, name = id, ...field } } = {}, { components, errors } = {}) {
  log('transformElementsToInputOneOf')

  return {
    items: items.map(({ elements: { title, description, field: { id, name = id } = {} } }, index) => transformDescriptionToHint(transformTitleToText({ value: String(index), id, name, checked: selectedItems.includes(index) }, title), description)),
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

export function transformElementsToInputField ({ uri } = {}, { field: { id, name = id, ...field } } = {}, { components, errors } = {}) {
  log('transformElementsToInputField')

  return {
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasValue(field) ? { value: getValue(field) } : {}),
    ...(hasRequired(field) ? { required: getRequired(field) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

export function transformElementsToGroup ({ uri } = {}, { id, name = id, ...elements } = {}, { components, errors } = {}) {
  log('transformElementsToGroup')

  return {
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
    ...(hasRequired(elements) ? { required: getRequired(elements) } : {}),
    ...(hasValue(elements) ? { value: getValue(elements) } : {}),
    ...(hasError(errors, uri) ? { errorMessage: toErrorMessage(getError(errors, uri), components) } : {})
  }
}

export function transformFields (meta, elements, params) {
  log('transformFields')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements, params), title),
    fields: fields.map((field) => fromZashiki(field, params))
  }
}

export function transformField (meta, elements, params) {
  log('transformField')

  if (hasEnum(elements)) {
    log('transformField (`enum`)')

    return {
      enum: transformElementsToInputForEnum(meta, elements, params)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformField (`anyOf`)')

      return {
        anyOf: transformElementsToInputForAnyOf(meta, elements, params)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformField (`oneOf`)')

        return {
          oneOf: transformElementsToInputForOneOf(meta, elements, params)
        }
      } else {
        log('transformField (`field`)')

        return {
          field: transformElementsToInputForField(meta, elements, params)
        }
      }
    }
  }
}

export function transformElementsToCheckboxesForEnum (meta, elements, parentMeta, parentElements = {}, params = {}) {
  log('transformElementsToCheckboxesForEnum')

  const {
    title,
    description
  } = parentElements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesEnum(meta, elements, parentMeta, params), title), description)
}

export function transformElementsToCheckboxesForAnyOf (meta, elements, parentMeta, parentElements = {}, params = {}) {
  log('transformElementsToCheckboxesForAnyOf')

  const {
    title,
    description
  } = parentElements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesAnyOf(meta, elements, parentMeta, params), title), description)
}

export function transformElementsToCheckboxesForOneOf (meta, elements, parentMeta, parentElements = {}, params = {}) {
  log('transformElementsToCheckboxesForOneOf')

  const {
    title,
    description
  } = parentElements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesOneOf(meta, elements, parentMeta, params), title), description)
}

export function transformElementsToCheckboxesForField (meta, elements, parentMeta, parentElements = {}, params = {}) {
  log('transformElementsToCheckboxesForField')

  const {
    title,
    description
  } = parentElements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToCheckboxesField(meta, elements, parentMeta, params), title), description)
}

export function transformElementsToRadiosForEnum (meta, elements, params) {
  log('transformElementsToRadiosForEnum')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosEnum(meta, elements, params), title), description)
}

export function transformElementsToRadiosForAnyOf (meta, elements, params) {
  log('transformElementsToRadiosForAnyOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosAnyOf(meta, elements, params), title), description)
}

export function transformElementsToRadiosForOneOf (meta, elements, params) {
  log('transformElementsToRadiosForOneOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToRadiosOneOf(meta, elements, params), title), description)
}

export function transformElementsToSelectForEnum (meta, elements, params) {
  log('transformElementsToSelectForEnum')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectEnum(meta, elements, params), title), description)
}

export function transformElementsToSelectForAnyOf (meta, elements, params) {
  log('transformElementsToSelectForAnyOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectAnyOf(meta, elements, params), title), description)
}

export function transformElementsToSelectForOneOf (meta, elements, params) {
  log('transformElementsToSelectForOneOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToSelectOneOf(meta, elements, params), title), description)
}

export function transformElementsToInputForEnum (meta, elements, params) {
  log('transformElementsToInputForEnum')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToInputEnum(meta, elements, params), title), description)
}

export function transformElementsToInputForAnyOf (meta, elements, params) {
  log('transformElementsToInputForAnyOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToInputAnyOf(meta, elements, params), title), description)
}

export function transformElementsToInputForOneOf (meta, elements, params) {
  log('transformElementsToInputForOneOf')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToFieldsetLegend(transformElementsToInputOneOf(meta, elements, params), title), description)
}

export function transformElementsToInputForField (meta, elements, params) {
  log('transformElementsToInputForField')

  const {
    title,
    description
  } = elements

  return transformDescriptionToHint(transformTitleToLabel(transformElementsToInputField(meta, elements, params), title), description)
}

export function transformFieldToCheckboxes (meta, elements, parentMeta, parentElements, params) {
  log('transformFieldToCheckboxes')

  if (hasEnum(elements)) {
    log('transformFieldToCheckboxes (`enum`)')

    return {
      enum: transformElementsToCheckboxesForEnum(meta, elements, parentMeta, parentElements, params)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToCheckboxes (`anyOf`)')

      return {
        anyOf: transformElementsToCheckboxesForAnyOf(meta, elements, parentMeta, parentElements, params)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToCheckboxes (`oneOf`)')

        return {
          oneOf: transformElementsToCheckboxesForOneOf(meta, elements, parentMeta, parentElements, params)
        }
      } else {
        log('transformFieldToCheckboxes (`field`)')

        return {
          field: transformElementsToCheckboxesForField(meta, elements, parentMeta, parentElements, params)
        }
      }
    }
  }
}

export function transformFieldToDateInput (meta, elements, params) {

}

export function transformFieldToFileUpload (meta, elements, params) {

}

export function transformFieldToRadios (meta, elements, params) {
  log('transformFieldToRadios')

  if (hasEnum(elements)) {
    log('transformFieldToRadios (`enum`)')

    return {
      enum: transformElementsToRadiosForEnum(meta, elements, params)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToRadios (`anyOf`)')

      return {
        anyOf: transformElementsToRadiosForAnyOf(meta, elements, params)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToRadios (`oneOf`)')

        return {
          oneOf: transformElementsToRadiosForOneOf(meta, elements, params)
        }
      } else {
        log('transformFieldToRadios (`field`)')

        throw new Error('Schema incompatible with component `radios`')
      }
    }
  }
}

export function transformFieldToSelect (meta, elements, params) {
  log('transformFieldToSelect')

  if (hasEnum(elements)) {
    log('transformFieldToSelect (`enum`)')

    return {
      enum: transformElementsToSelectForEnum(meta, elements, params)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToSelect (`anyOf`)')

      return {
        anyOf: transformElementsToSelectForAnyOf(meta, elements, params)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToSelect (`oneOf`)')

        return {
          oneOf: transformElementsToSelectForOneOf(meta, elements, params)
        }
      } else {
        log('transformFieldToSelect (`field`)')

        throw new Error('Schema incompatible with component `select`')
      }
    }
  }
}

export function transformFieldToInput (meta, elements, params) {
  log('transformFieldToInput')

  if (hasEnum(elements)) {
    log('transformFieldToInput (`enum`)')

    return {
      enum: transformElementsToInputForEnum(meta, elements, params)
    }
  } else {
    if (hasAnyOf(elements)) {
      log('transformFieldToInput (`anyOf`)')

      return {
        anyOf: transformElementsToInputForAnyOf(meta, elements, params)
      }
    } else {
      if (hasOneOf(elements)) {
        log('transformFieldToInput (`oneOf`)')

        return {
          oneOf: transformElementsToInputForOneOf(meta, elements, params)
        }
      } else {
        log('transformFieldToInput (`field`)')

        return {
          field: transformElementsToInputForField(meta, elements, params)
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
} = {}, params = {}) => {
  log('transformFieldsToCheckboxes')

  return transformFieldToCheckboxes(meta, elements, parentMeta, { title, description }, params)
}

export function transformFieldsToDateInput (meta, elements, params) {
  log('transformFieldsToDateInput')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements, params), title),
    fields: fields.map((field) => fromZashiki(field, params))
  }
}

export function transformFieldsToFileUpload (meta, elements, params) {
  log('transformFieldsToFileUpload')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements, params), title),
    fields: fields.map((field) => fromZashiki(field, params))
  }
}

export function transformFieldsToInput (meta, elements, params) {
  log('transformFieldsToInput')

  const {
    title,
    fields = []
  } = elements

  return {
    group: transformTitleToLegend(transformElementsToGroup(meta, elements, params), title),
    fields: fields.map((field) => fromZashiki(field, params))
  }
}

export function transformFieldsToComponent (meta, elements, params) {
  log('transformFieldsToComponent')

  const {
    component
  } = meta

  switch (component) {
    case 'checkboxes':
      return transformFieldsToCheckboxes(meta, elements, params)
    default:
      return transformFieldsToInput(meta, elements, params)
  }
}

export function transformFieldToComponent (meta, elements, params) {
  log('transformFieldToComponent')

  const {
    component
  } = meta

  switch (component) {
    case 'date-input':
      return transformFieldToDateInput(meta, elements, params)
    case 'file-upload':
      return transformFieldToFileUpload(meta, elements, params)
    case 'radios':
      return transformFieldToRadios(meta, elements, params)
    case 'select':
      return transformFieldToSelect(meta, elements, params)
    default:
      return transformFieldToInput(meta, elements, params)
  }
}

export function transformOne ({ meta = {}, elements = {} } = {}, params = {}) {
  log('transformOne')

  const {
    type
  } = meta

  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return {
      type,
      component,
      ...transformFieldToComponent(meta, elements, params)
    }
  } else {
    return {
      type,
      ...transformField(meta, elements, params)
    }
  }
}

export function transformAll ({ meta = {}, elements = {} } = {}, params = {}) {
  log('transformAll')

  const {
    type
  } = meta

  if (hasComponent(meta)) {
    const component = getComponent(meta)

    return {
      type,
      component,
      ...transformFieldsToComponent(meta, elements, params)
    }
  } else {
    return {
      type,
      ...transformFields(meta, elements, params)
    }
  }
}

export function fromZashiki (zashiki = {}, params = {}) {
  log('fromZashiki')

  const {
    meta: {
      type
    } = {}
  } = zashiki

  return (
    type === 'object' || type === 'array'
      ? transformAll(zashiki, params)
      : transformOne(zashiki, params)
  )
}

export function transformEmbark (definition, response, components = {}, errors = []) {
  log('transformEmbark')

  return (
    fromZashiki(
      toZashiki(definition, toValues(response, definition), components), { components, errors }
    )
  )
}

export function transformAlpha (description, definition, response, { meta: { classes = 'govuk-fieldset__legend--m', isPageHeading = false, ...meta } = {}, ...components } = {}, errors = []) {
  log('transformAlpha')

  const zashiki = toZashiki(definition, toValues(response, definition), { ...components, meta: { ...meta, isPageHeading: true } })

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
        fields: transformAll(zashiki, { components, errors })
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
      fields: transformOne(zashiki, { components, errors })
    }
  }
}

export function transformOmega (description, definition, response, { meta: { classes = 'govuk-fieldset__legend--l', isPageHeading = true, ...meta } = {}, ...components } = {}, errors = []) {
  log('transformOmega')

  const zashiki = toZashiki(definition, toValues(response, definition), { ...components, meta: { ...meta, isPageHeading: true } })

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
        fields: transformAll(zashiki, { components, errors })
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
      fields: transformOne(zashiki, { components, errors })
    }
  }
}

export function transformDebark (definition, response, components = {}, errors = []) {
  log('transformDebark')

  return (
    fromZashiki(
      toZashiki(definition, toValues(response, definition), components), { components, errors }
    )
  )
}

export default function transform (definition, response, components = {}, errors = []) {
  return (
    fromZashiki(
      toZashiki(definition, toValues(response, definition), components), { components, errors }
    )
  )
}
