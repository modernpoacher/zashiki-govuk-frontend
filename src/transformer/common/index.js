export const hasEnum = (elements = {}) => Reflect.has(elements, 'enum')
export const getEnum = (elements = {}) => Reflect.get(elements, 'enum')

export const hasOneOf = (elements = {}) => Reflect.has(elements, 'oneOf')
export const getOneOf = (elements = {}) => Reflect.get(elements, 'oneOf')

export const hasAnyOf = (elements = {}) => Reflect.has(elements, 'anyOf')
export const getAnyOf = (elements = {}) => Reflect.get(elements, 'anyOf')

export const hasField = (elements = {}) => Reflect.has(elements, 'field')
export const getField = (elements = {}) => Reflect.get(elements, 'field')

export const hasTitle = (elements = {}) => Reflect.has(elements, 'title')
export const getTitle = (elements = {}) => Reflect.get(elements, 'title')

export const hasDescription = (elements = {}) => Reflect.has(elements, 'description')
export const getDescription = (elements = {}) => Reflect.get(elements, 'description')

export const hasRequired = (elements = {}) => Reflect.has(elements, 'required')
export const getRequired = (elements = {}) => Reflect.get(elements, 'required')

export const hasType = (meta = {}) => Reflect.has(meta, 'type')
export const getType = (meta = {}) => Reflect.get(meta, 'type')

export const hasComponent = (meta = {}) => Reflect.has(meta, 'component')
export const getComponent = (meta = {}) => Reflect.get(meta, 'component')

export const hasValue = (field = {}) => Reflect.has(field, 'value')
export const getValue = (field = {}) => Reflect.get(field, 'value')

export const hasText = (value = {}) => Reflect.has(value, 'text')
export const getText = (value = {}) => Reflect.get(value, 'text')

export const hasHtml = (value = {}) => Reflect.has(value, 'html')
export const getHtml = (value = {}) => Reflect.get(value, 'html')

export const hasElementsTitle = ({ elements } = {}) => hasTitle(elements)
export const getElementsTitle = ({ elements } = {}) => getTitle(elements)
