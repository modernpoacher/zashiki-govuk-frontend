import debug from 'debug'

const log = debug('zashiki/transformer/common')

log('`zashiki` is awake')

/**
 * @param {{ enum?: string[] | number[] | object[] | boolean[] | null[] }} elements
 * @returns {elements is { enum: string[] | number[] | object[] | boolean[] | null[] } }
 */
export const hasEnum = (elements = {}) => 'enum' in elements

/**
 * @overload
 * @param {{ enum: string[] | number[] | object[] | boolean[] | null[] }} elements
 * @returns {string[] | number[] | object[] | boolean[] | null[]}
 *
 * @param {{ enum?: string[] | number[] | object[] | boolean[] | null[] }} elements
 * @returns {string[] | number[] | object[] | boolean[] | null[] | undefined}
 */
export const getEnum = (elements = {}) => elements.enum

/**
 * @param {unknown} [elements]
 * @returns {elements is { oneOf: string[] | number[] | object[] | boolean[] | null[] } }
 */
export const hasOneOf = (elements = {}) => 'oneOf' in elements

/**
 * @overload
 * @param {{ oneOf: string[] | number[] | object[] | boolean[] | null[] }} elements
 * @returns {string[] | number[] | object[] | boolean[] | null[]}
 *
 * @param {{ oneOf?: string[] | number[] | object[] | boolean[] | null[] }} [elements]
 * @returns {string[] | number[] | object[] | boolean[] | null[] | undefined}
 */
export const getOneOf = (elements = {}) => elements.oneOf

/**
 * @param {unknown} [elements]
 * @returns {elements is { anyOf: string[] | number[] | object[] | boolean[] | null[] } }
 */
export const hasAnyOf = (elements = {}) => 'anyOf' in elements

/**
 * @overload
 * @param {{ anyOf: string[] | number[] | object[] | boolean[] | null[] }} elements
 * @returns {string[] | number[] | object[] | boolean[] | null[]}
 *
 * @param {{ anyOf?: string[] | number[] | object[] | boolean[] | null[] }} [elements]
 * @returns {string[] | number[] | object[] | boolean[] | null[] | undefined}
 */
export const getAnyOf = (elements = {}) => elements.anyOf

/**
 * @param {unknown} [elements]
 * @returns {elements is { field: Record<PropertyKey, unknown> | Record<PropertyKey, never> }}
 */
export const hasField = (elements = {}) => 'field' in elements

/**
 * @overload
 * @param {{ field: Record<PropertyKey, unknown> | Record<PropertyKey, never> }} elements
 * @returns {Record<PropertyKey, unknown> | Record<PropertyKey, never>}
 *
 * @param {{ field?: Record<PropertyKey, unknown> | Record<PropertyKey, never> }} [elements]
 * @returns {Record<PropertyKey, unknown> | Record<PropertyKey, never> | undefined}
 */
export const getField = (elements = {}) => elements.field

/**
 * @param {unknown} [elements]
 * @returns {elements is { title: string }}
 */
export const hasTitle = (elements = {}) => 'title' in elements

/**
 * @overload
 * @param {{ title: string }} elements
 * @returns {string}
 *
 * @param {{ title?: string }} [elements]
 * @returns {string | undefined}
 */
export const getTitle = (elements = {}) => elements.title

/**
 * @param {unknown} [elements]
 * @returns {elements is { description: string }}
 */
export const hasDescription = (elements = {}) => 'description' in elements

/**
 * @overload
 * @param {{ description: string }} elements
 * @returns {string}
 *
 * @param {{ description?: string }} [elements]
 * @returns {string | undefined}
 */
export const getDescription = (elements = {}) => elements.description

/**
 * @param {unknown} [elements]
 * @returns {elements is { required: string[] }}
 */
export const hasRequired = (elements = {}) => 'required' in elements

/**
 * @overload
 * @param {{ required: string[] }} elements
 * @returns {string[]}
 *
 * @param {{ required?: string[] }} [elements]
 * @returns {string[] | undefined}
 */
export const getRequired = (elements = {}) => elements.required

/**
 * @param {unknown} [elements]
 * @returns {meta is { type: string }}
 */
export const hasType = (meta = {}) => 'type' in meta

/**
 * @overload
 * @param {{ type: string }} elements
 * @returns {string}
 *
 * @param {{ type?: string }} [elements]
 * @returns {string | undefined}
 */
export const getType = (meta = {}) => meta.type

/**
 * @param {unknown} [elements]
 * @returns {meta is { component: string }}
 */
export const hasComponent = (meta = {}) => 'component' in meta

/**
 * @overload
 * @param {{ component: string }} elements
 * @returns {string}
 *
 * @param {{ component?: string }} [elements]
 * @returns {string | undefined}
 */
export const getComponent = (meta = {}) => meta.component

/**
 * @param {unknown} [elements]
 * @returns {field is { value: string } }
 */
export const hasValue = (field = {}) => 'value' in field

/**
 * @overload
 * @param {{ value: string }} elements
 * @returns {string}
 *
 * @param {{ value?: string }} [elements]
 * @returns {string | undefined}
 */
export const getValue = (field = {}) => field.value

/**
 * @param {unknown} [elements]
 * @returns {value is { text: string }}
 */
export const hasText = (value = {}) => 'text' in value

/**
 * @overload
 * @param {{ text: string }} elements
 * @returns {string}
 *
 * @param {{ text?: string }} [elements]
 * @returns {string | undefined}
 */
export const getText = (value = {}) => value.text

/**
 * @param {unknown} [elements]
 * @returns {value is { html: string }}
 */
export const hasHtml = (value = {}) => 'html' in value

/**
 * @overload
 * @param {{ html: string }} elements
 * @returns {string}
 *
 * @param {{ html?: string }} [elements]
 * @returns {string | undefined}
 */
export const getHtml = (value = {}) => value.html

/**
 * @param {unknown} [params]
 * @returns {params is { elements: { title: string} }}
 */
export const hasElementsTitle = ({ elements } = {}) => hasTitle(elements)

/**
 * @overload
 * @param {{ elements: { title: string} }} elements
 * @returns {string}
 *
 * @param {{ elements?: { title?: string } }} [elements]
 * @returns {string | undefined}
 */
export const getElementsTitle = ({ elements } = {}) => getTitle(elements)
