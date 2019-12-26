export const getTitle = ({ title }) => (title ? { title } : {})

export const getDescription = ({ description }) => (description ? { description } : {})

export const getIsReadOnly = ({ readOnly = false }) => (readOnly ? { readOnly } : {})

export const getIsWriteOnly = ({ writeOnly = false }) => (writeOnly ? { writeOnly } : {})

export const getDefaultValue = (schema) => (Reflect.has(schema, 'default') ? { defaultValue: Reflect.get(schema, 'default') } : {})

const toNumber = (v) => {
  if (typeof v === 'number') return v
  if (typeof v === 'string') return Number(v)
  return NaN
}

export const getMin = ({ minimum }) => {
  const value = toNumber(minimum)

  return isNaN(value) ? {} : { min: value }
}

export const getMax = ({ maximum }) => {
  const value = toNumber(maximum)

  return isNaN(value) ? {} : { max: value }
}

export const getMinLength = ({ minLength }) => {
  const value = toNumber(minLength)

  return isNaN(value) ? {} : { minLength: value }
}

export const getMaxLength = ({ maxLength }) => {
  const value = toNumber(maxLength)

  return isNaN(value) ? {} : { maxLength: value }
}

export const getMinItems = ({ minItems }) => {
  const value = toNumber(minItems)

  return isNaN(value) ? {} : { minItems: value }
}

export const getMaxItems = ({ maxItems }) => {
  const value = toNumber(maxItems)

  return isNaN(value) ? {} : { maxItems: value }
}

export const getHasUniqueItems = (schema) => {
  if (Reflect.has(schema, 'uniqueItems')) {
    const value = Reflect.get(schema, 'uniqueItems')

    return (typeof value === 'boolean') ? { hasUniqueItems: value } : {}
  }

  return {}
}

export const getMinContains = ({ minContains }) => {
  const value = toNumber(minContains)

  return isNaN(value) ? {} : { minContains: value }
}

export const getMaxContains = ({ maxContains }) => {
  const value = toNumber(maxContains)

  return isNaN(value) ? {} : { maxContains: value }
}

export const getMinProperties = ({ minProperties }) => {
  const value = toNumber(minProperties)

  return isNaN(value) ? {} : { minProperties: value }
}

export const getMaxProperties = ({ maxProperties }) => {
  const value = toNumber(maxProperties)

  return isNaN(value) ? {} : { maxProperties: value }
}

export const getIsExclusiveMin = (schema) => {
  if (Reflect.has(schema, 'exclusiveMinimum')) {
    const value = Reflect.get(schema, 'exclusiveMinimum')

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

export const getIsExclusiveMax = (schema) => {
  if (Reflect.has(schema, 'exclusiveMaximum')) {
    const value = Reflect.get(schema, 'exclusiveMaximum')

    return (typeof value === 'boolean') ? { isExclusiveMax: value } : {}
  }

  return {}
}

export const getPattern = ({ pattern }) => (pattern ? { pattern } : {})

export const getStep = ({ multipleOf }) => {
  const value = toNumber(multipleOf)

  return isNaN(value) ? {} : { step: value }
}

export function transformSchemaArrayItemNull (fieldName, schema, rootSchema, isRequired) {
  return {
    meta: {
      arrayName: fieldName,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'null',
        required: isRequired
      }
    }
  }
}

export function transformSchemaArrayItemBoolean (fieldName, schema, rootSchema, isRequired) {
  return {
    meta: {
      arrayName: fieldName,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'boolean',
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformSchemaArrayItemObject (fieldName, schema, rootSchema, isRequired) {
  const {
    properties = {},
    required = []
  } = schema

  return {
    meta: {
      arrayName: fieldName,
      type: 'object',
      schema,
      rootSchema,
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: (
        Object
          .entries(properties)
          .reduce((accumulator, [fieldName, schema]) => accumulator.concat(transformSchema(fieldName, schema, rootSchema, required.includes(fieldName))), [])
      )
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformSchemaArrayItemArray (fieldName, schema, rootSchema, isRequired) {
  const {
    items = [] // array or object
  } = schema

  return {
    meta: {
      arrayName: fieldName,
      type: 'array',
      schema,
      rootSchema,
      ...getMinItems(schema),
      ...getMaxItems(schema),
      ...getHasUniqueItems(schema),
      ...getMaxContains(schema),
      ...getMinContains(schema),
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: [].concat(items).reduce((accumulator, item) => accumulator.concat(transformSchemaArrayItem(fieldName, item, rootSchema, isRequired)), [])
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformSchemaArrayItemString (fieldName, schema, rootSchema, isRequired) {
  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  return {
    meta: {
      arrayName: fieldName,
      type: 'string',
      schema,
      rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'string',
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformSchemaArrayItemNumber (fieldName, schema, rootSchema, isRequired) {
  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  return {
    meta: {
      arrayName: fieldName,
      type: 'number',
      schema,
      rootSchema,
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'number',
        ...min,
        ...max,
        ...step,
        required: isRequired
      }
    }
  }
}

export function transformSchemaArrayItem (fieldName, schema = {}, rootSchema = schema, isRequired = false) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformSchemaArrayItemNull(fieldName, schema, rootSchema, isRequired)

    case 'boolean':
      return transformSchemaArrayItemBoolean(fieldName, schema, rootSchema, isRequired)

    case 'object':
      return transformSchemaArrayItemObject(fieldName, schema, rootSchema, isRequired)

    case 'array':
      return transformSchemaArrayItemArray(fieldName, schema, rootSchema, isRequired)

    case 'string':
      return transformSchemaArrayItemString(fieldName, schema, rootSchema, isRequired)

    case 'number':
      return transformSchemaArrayItemNumber(fieldName, schema, rootSchema, isRequired)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformSchemaNull (fieldName, schema, rootSchema, isRequired) {
  return {
    meta: {
      name: fieldName,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        name: fieldName,
        type: 'null',
        required: isRequired
      }
    }
  }
}

export function transformSchemaBoolean (fieldName, schema, rootSchema, isRequired) {
  return {
    meta: {
      name: fieldName,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        name: fieldName,
        type: 'boolean',
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformSchemaObject (fieldName, schema, rootSchema, isRequired) {
  const {
    properties = {},
    required = []
  } = schema

  return {
    meta: {
      name: fieldName,
      type: 'object',
      schema,
      rootSchema,
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: (
        Object
          .entries(properties)
          .reduce((accumulator, [fieldName, schema]) => accumulator.concat(transformSchema(fieldName, schema, rootSchema, required.includes(fieldName))), [])
      )
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformSchemaArray (fieldName, schema, rootSchema, isRequired) {
  const {
    items = [] // array or object
  } = schema

  return {
    meta: {
      name: fieldName,
      type: 'array',
      schema,
      rootSchema,
      ...getMinItems(schema),
      ...getMaxItems(schema),
      ...getHasUniqueItems(schema),
      ...getMaxContains(schema),
      ...getMinContains(schema),
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: [].concat(items).reduce((accumulator, item) => accumulator.concat(transformSchemaArrayItem(fieldName, item, rootSchema, isRequired)), [])
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformSchemaString (fieldName, schema, rootSchema, isRequired) {
  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  return {
    meta: {
      name: fieldName,
      type: 'string',
      schema,
      rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        name: fieldName,
        type: 'string',
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformSchemaNumber (fieldName, schema, rootSchema, isRequired) {
  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  return {
    meta: {
      name: fieldName,
      type: 'number',
      schema,
      rootSchema,
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        name: fieldName,
        type: 'number',
        ...min,
        ...max,
        ...step,
        required: isRequired
      }
    }
  }
}

export function transformSchema (fieldName, schema = {}, rootSchema = schema, isRequired = false) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformSchemaNull(fieldName, schema, rootSchema, isRequired)

    case 'boolean':
      return transformSchemaBoolean(fieldName, schema, rootSchema, isRequired)

    case 'object':
      return transformSchemaObject(fieldName, schema, rootSchema, isRequired)

    case 'array':
      return transformSchemaArray(fieldName, schema, rootSchema, isRequired)

    case 'string':
      return transformSchemaString(fieldName, schema, rootSchema, isRequired)

    case 'number':
      return transformSchemaNumber(fieldName, schema, rootSchema, isRequired)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformArrayItemNull (schema, rootSchema, isRequired) {
  return {
    meta: {
      type: 'null',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'null',
        required: isRequired
      }
    }
  }
}

export function transformArrayItemBoolean (schema, rootSchema, isRequired) {
  return {
    meta: {
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'boolean',
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArrayItemObject (schema, rootSchema, isRequired) {
  const {
    properties = {},
    required = []
  } = schema

  return {
    meta: {
      type: 'object',
      schema,
      rootSchema,
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: (
        Object
          .entries(properties)
          .reduce((accumulator, [fieldName, schema]) => accumulator.concat(transformSchema(fieldName, schema, rootSchema, required.includes(fieldName))), [])
      )
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArrayItemArray (schema, rootSchema, isRequired) {
  const {
    items = [] // array or object
  } = schema

  return {
    meta: {
      type: 'array',
      schema,
      rootSchema,
      ...getMinItems(schema),
      ...getMaxItems(schema),
      ...getHasUniqueItems(schema),
      ...getMaxContains(schema),
      ...getMinContains(schema),
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: [].concat(items).reduce((accumulator, item) => accumulator.concat(transformArrayItem(item, rootSchema, isRequired)), [])
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArrayItemString (schema, rootSchema, isRequired) {
  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  return {
    meta: {
      type: 'string',
      schema,
      rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'string',
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArrayItemNumber (schema, rootSchema, isRequired) {
  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  return {
    meta: {
      type: 'number',
      schema,
      rootSchema,
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'number',
        ...min,
        ...max,
        ...step,
        required: isRequired
      }
    }
  }
}

export function transformArrayItem (schema = {}, rootSchema = schema, isRequired = false) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArrayItemNull(schema, rootSchema, isRequired)

    case 'boolean':
      return transformArrayItemBoolean(schema, rootSchema, isRequired)

    case 'object':
      return transformArrayItemObject(schema, rootSchema, isRequired)

    case 'array':
      return transformArrayItemArray(schema, rootSchema, isRequired)

    case 'string':
      return transformArrayItemString(schema, rootSchema, isRequired)

    case 'number':
      return transformArrayItemNumber(schema, rootSchema, isRequired)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNull (rootSchema) {
  return {
    meta: {
      type: 'null',
      schema: rootSchema
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'null'
      }
    }
  }
}

export function transformBoolean (rootSchema) {
  return {
    meta: {
      type: 'boolean',
      schema: rootSchema
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'boolean'
      }
    }
  }
}

export function transformObject (rootSchema) {
  const {
    properties = {},
    required = []
  } = rootSchema

  return {
    meta: {
      type: 'object',
      schema: rootSchema
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      fields: (
        Object
          .entries(properties)
          .reduce((accumulator, [fieldName, schema]) => accumulator.concat(transformSchema(fieldName, schema, rootSchema, required.includes(fieldName))), [])
      )
    }
  }
}

export function transformArray (rootSchema) {
  const {
    items = [] // array or object
  } = rootSchema

  return {
    meta: {
      type: 'array',
      schema: rootSchema,
      ...getMinItems(rootSchema),
      ...getMaxItems(rootSchema),
      ...getHasUniqueItems(rootSchema),
      ...getMaxContains(rootSchema),
      ...getMinContains(rootSchema)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      fields: [].concat(items).reduce((accumulator, item) => accumulator.concat(transformArrayItem(item, rootSchema)), [])
    }
  }
}

export function transformString (rootSchema) {
  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  return {
    meta: {
      type: 'string',
      schema: rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'string',
        ...minLength,
        ...maxLength,
        ...pattern
      }
    }
  }
}

export function transformNumber (rootSchema) {
  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  return {
    meta: {
      type: 'number',
      schema: rootSchema,
      ...getIsExclusiveMin(rootSchema),
      ...getIsExclusiveMax(rootSchema),
      ...min,
      ...max,
      ...step
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'number',
        ...min,
        ...max,
        ...step
      }
    }
  }
}

export default function transform (rootSchema = {}) {
  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(rootSchema)

    case 'boolean':
      return transformBoolean(rootSchema)

    case 'object':
      return transformObject(rootSchema)

    case 'array':
      return transformArray(rootSchema)

    case 'number':
      return transformNumber(rootSchema)

    case 'string':
      return transformString(rootSchema)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
