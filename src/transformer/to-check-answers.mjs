import debug from 'debug'

import toZashiki from 'shinkansen-transmission/transmission/to-zashiki'
import fromDocumentToHash from 'shinkansen-transmission/transmission/from-document-to-hash'

import getResourceUrl from './common/get-resource-url.mjs'
import {
  hasEnum,
  getEnum,
  hasOneOf,
  getOneOf,
  hasAnyOf,
  getAnyOf,
  getField,
  hasField,
  hasTitle,
  getTitle,
  hasValue,
  getValue,
  hasText,
  getText,
  hasHtml,
  getHtml,
  hasElementsTitle
} from './common/index.mjs'

const log = debug('zashiki/transformer/to-check-answers')

log('`zashiki` is awake')

export const toSummaryValue = ({ elements } = {}) => {
  const {
    title: value = getValue(elements)
  } = elements

  return value
}

export const transformFieldValue = (field = {}) => (
  hasValue(field)
    ? { text: getValue(field) }
    : {}
)

export const transformSummaryKey = ({ elements } = {}) => (
  hasTitle(elements)
    ? { text: getTitle(elements) }
    : {}
)

export const getVisuallyHiddenText = ({ elements: { title: visuallyHiddenText = '' } = {} } = {}) => visuallyHiddenText.toLowerCase()

export function getEnumSelectedItemsValue (items = [], selectedItems = []) {
  log('getEnumSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(`<p class="govuk-body">${Reflect.get(items, selectedItem)}</p>`)
        : accumulator
    ), '') // || 'Not answered'
  )
}

export function getEnumSelectedItemValue (items = [], [selectedItem] = []) {
  log('getEnumSelectedItemValue')

  return (
    Reflect.has(items, selectedItem)
      ? String(Reflect.get(items, selectedItem))
      : '' // 'Not answered'
  )
}

export function getAnyOfSelectedItemsValue (items = [], selectedItems = []) {
  log('getAnyOfSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(`<p class="govuk-body">${toSummaryValue(Reflect.get(items, selectedItem))}</p>`)
        : accumulator
    ), '') // || 'Not answered'
  )
}

export function getAnyOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getAnyOfSelectedItemValue')

  return (Reflect.has(items, selectedItem))
    ? toSummaryValue(Reflect.get(items, selectedItem)) // || 'Not answered'
    : '' // 'Not answered'
}

export function getOneOfSelectedItemsValue (items = [], selectedItems = []) {
  log('getOneOfSelectedItemsValue')

  return (
    selectedItems.reduce((accumulator, selectedItem) => (
      (Reflect.has(items, selectedItem))
        ? accumulator.concat(`<p class="govuk-body">${toSummaryValue(Reflect.get(items, selectedItem))}</p>`)
        : accumulator
    ), '') // || 'Not answered'
  )
}

export function getOneOfSelectedItemValue (items = [], [selectedItem] = []) {
  log('getOneOfSelectedItemValue')

  return (Reflect.has(items, selectedItem))
    ? toSummaryValue(Reflect.get(items, selectedItem)) // || 'Not answered'
    : '' // 'Not answered'
}

export function getGroup (index, array) {
  const group = []

  let n = index + 1
  let sibling = array[n]
  if (sibling) {
    while (!hasElementsTitle(sibling)) {
      group.push(sibling)
      n = n + 1
      sibling = array[n]
      if (!sibling) break
    }
  }

  return group
}

export function transformEnumValue ({ items, selectedItems } = {}) {
  log('transformEnumValue')

  if (selectedItems.length < 1) {
    return {}
  } else {
    if (selectedItems.length > 1) {
      return {
        html: getEnumSelectedItemsValue(items, selectedItems)
      }
    }
  }

  return {
    text: getEnumSelectedItemValue(items, selectedItems)
  }
}

export function transformAnyOfValue ({ items, selectedItems } = {}) {
  log('transformAnyOfValue')

  if (selectedItems.length < 1) {
    return {}
  } else {
    if (selectedItems.length > 1) {
      return {
        html: getAnyOfSelectedItemsValue(items, selectedItems)
      }
    }
  }

  return {
    text: getAnyOfSelectedItemValue(items, selectedItems)
  }
}

export function transformOneOfValue ({ items, selectedItems } = {}) {
  log('transformOneOfValue')

  if (selectedItems.length < 1) {
    return {}
  } else {
    if (selectedItems.length > 1) {
      return {
        html: getOneOfSelectedItemsValue(items, selectedItems)
      }
    }
  }

  return {
    text: getOneOfSelectedItemValue(items, selectedItems)
  }
}

export function transformSummaryValue ({ elements }) {
  log('transformSummaryValue')

  if (hasEnum(elements)) {
    const field = getEnum(elements)

    return transformEnumValue(field)
  } else {
    if (hasAnyOf(elements)) {
      const field = getAnyOf(elements)

      return transformAnyOfValue(field)
    } else {
      if (hasOneOf(elements)) {
        const field = getOneOf(elements)

        return transformOneOfValue(field)
      } else {
        if (hasField(elements)) {
          const field = getField(elements)

          return transformFieldValue(field)
        }
      }
    }
  }

  return {}
}

export function transformString (zashiki, resource) {
  log('transformString')

  return {
    key: transformSummaryKey(zashiki),
    value: transformSummaryValue(zashiki),
    actions: {
      items: [
        {
          href: getResourceUrl(resource),
          text: 'Change',
          visuallyHiddenText: getVisuallyHiddenText(zashiki)
        }
      ]
    }
  }
}

export function transformNumber (zashiki, resource) {
  log('transformNumber')

  return {
    key: transformSummaryKey(zashiki),
    value: transformSummaryValue(zashiki),
    actions: {
      items: [
        {
          href: getResourceUrl(resource),
          text: 'Change',
          visuallyHiddenText: getVisuallyHiddenText(zashiki)
        }
      ]
    }
  }
}

export function transformObject ({ elements: { fields = [] } = {} } = {}, resource = {}, array = [], group = []) {
  log('transformObject')

  return fields.reduce((accumulator, field, i, a) => {
    if (hasElementsTitle(field)) {
      /*
       *  `field` has a title. Put any title-less siblings into `group`
       */
      group = getGroup(i, a)

      if (group.length) {
        /*
         *  Transform `field` and siblings
         */
        return accumulator.concat(transformObjectGroup([field, ...group], resource))
      }
    }

    return (
      group.includes(field)
        ? accumulator
        : accumulator.concat(transform(field, resource, array, group))
    )
  }, array)
}

export function transformArray ({ elements: { fields = [] } = {} } = {}, resource = {}, array = [], group = []) {
  log('transformArray')

  return fields.reduce((accumulator, field, i, a) => {
    if (hasElementsTitle(field)) {
      /*
       *  `field` has a title. Put any title-less siblings into `group`
       */
      group = getGroup(i, a)

      if (group.length) {
        /*
         *  Transform `field` and siblings
         */
        return accumulator.concat(transformArrayGroup([field, ...group], resource))
      }
    }

    return (
      group.includes(field)
        ? accumulator
        : accumulator.concat(transform(field, resource, array, group))
    )
  }, array)
}

export function transformBoolean (zashiki, resource) {
  log('transformBoolean')

  return {
    key: transformSummaryKey(zashiki),
    value: transformSummaryValue(zashiki),
    actions: {
      items: [
        {
          href: getResourceUrl(resource),
          text: 'Change',
          visuallyHiddenText: getVisuallyHiddenText(zashiki)
        }
      ]
    }
  }
}

export function transformNull (zashiki, resource) {
  log('transformNull')

  return {
    key: transformSummaryKey(zashiki),
    value: transformSummaryValue(zashiki),
    actions: {
      items: [
        {
          href: getResourceUrl(resource),
          text: 'Change',
          visuallyHiddenText: getVisuallyHiddenText(zashiki)
        }
      ]
    }
  }
}

export function transformObjectGroupSummaryValue (group = []) {
  log('transformObjectGroupSummaryValue')

  return {
    html: group.reduce((accumulator, field) => {
      const value = transformSummaryValue(field)

      if (hasText(value)) {
        return accumulator.concat(getText(value))
      } else {
        if (hasHtml(value)) {
          return accumulator.concat(getHtml(value))
        }
      }

      return accumulator
    }, []).join('<br>')
  }
}

export function transformArrayGroupSummaryValue (group = []) {
  log('transformArrayGroupSummaryValue')

  return {
    html: group.reduce((accumulator, field) => {
      const value = transformSummaryValue(field)

      if (hasText(value)) {
        return accumulator.concat(`<p class="govuk-body">${getText(value)}</p>`)
      } else {
        if (hasHtml(value)) {
          return accumulator.concat(`<p class="govuk-body">${getHtml(value)}</p>`)
        }
      }

      return accumulator
    }, []).join('\n')
  }
}

export function transformObjectGroup (group = [], resource = {}) {
  log('transformObjectGroup')

  const [
    field
  ] = group

  return {
    key: transformSummaryKey(field),
    value: transformObjectGroupSummaryValue(group),
    actions: {
      items: [
        {
          href: getResourceUrl(resource),
          text: 'Change',
          visuallyHiddenText: getVisuallyHiddenText(field)
        }
      ]
    }
  }
}

export function transformArrayGroup (group = [], resource = {}) {
  log('transformArrayGroup')

  const [
    field
  ] = group

  return {
    key: transformSummaryKey(field),
    value: transformArrayGroupSummaryValue(group),
    actions: {
      items: [
        {
          href: getResourceUrl(resource),
          text: 'Change',
          visuallyHiddenText: getVisuallyHiddenText(field)
        }
      ]
    }
  }
}

export function transform (zashiki = {}, resource = {}, array = [], group = []) {
  log('transform')

  const {
    meta: {
      type
    } = {}
  } = zashiki

  switch (type) {
    case 'string':
      return transformString(zashiki, resource)
    case 'number':
      return transformNumber(zashiki, resource)
    case 'object':
      return transformObject(zashiki, resource, array, group)
    case 'array':
      return transformArray(zashiki, resource, array, group)
    case 'boolean':
      return transformBoolean(zashiki, resource)
    case 'null':
      return transformNull(zashiki, resource)
    default:
      throw new Error('Zashiki incompatible with transformer')
  }
}

export default (definition, response, resource) => transform(toZashiki(definition, (response !== undefined) ? fromDocumentToHash(response, definition) : {}), resource)
