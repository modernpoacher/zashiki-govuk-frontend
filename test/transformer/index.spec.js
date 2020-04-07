import debug from 'debug'

import { expect } from 'chai'

import transform, {
  transformToCheckboxes,
  transformToDateInput,
  transformToFieldset,
  transformToFileUpload,
  transformToRadios,
  transformToSelect,
  transformToInput,
  transformToComponent,
  hasEnum,
  getEnum,
  hasOneOf,
  getOneOf,
  hasAnyOf,
  getAnyOf,
  getType,
  getComponent,
  getName,
  transformDescriptionToHint,
  transformTitleToLabel,
  transformTitleToLegend,
  transformTitleToFieldsetLegend,
  transformEnum,
  transformAnyOf,
  transformOneOf,
  transformFields,
  transformField,
  transformElementsForEnum,
  transformElementsForAnyOf,
  transformElementsForOneOf,
  transformElementsForField,
  transformOne,
  transformAll
} from 'zashiki-govuk-frontend/src/transformer'

debug.enable('zashiki:mocha')

describe('zashiki-govuk-frontend/src/transformer', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transform)
        .to.be.a('function')
    })
  })

  describe('`transformToCheckboxes`', () => {
    it('is a function', () => {
      expect(transformToCheckboxes)
        .to.be.a('function')
    })
  })

  describe('`transformToDateInput`', () => {
    it('is a function', () => {
      expect(transformToDateInput)
        .to.be.a('function')
    })
  })

  describe('`transformToFieldset`', () => {
    it('is a function', () => {
      expect(transformToFieldset)
        .to.be.a('function')
    })
  })

  describe('`transformToFileUpload`', () => {
    it('is a function', () => {
      expect(transformToFileUpload)
        .to.be.a('function')
    })
  })

  describe('`transformToRadios`', () => {
    it('is a function', () => {
      expect(transformToRadios)
        .to.be.a('function')
    })
  })

  describe('`transformToSelect`', () => {
    it('is a function', () => {
      expect(transformToSelect)
        .to.be.a('function')
    })
  })

  describe('`transformToInput`', () => {
    it('is a function', () => {
      expect(transformToInput)
        .to.be.a('function')
    })
  })

  describe('`transformToComponent`', () => {
    it('is a function', () => {
      expect(transformToComponent)
        .to.be.a('function')
    })
  })

  describe('`hasEnum`', () => {
    it('is a function', () => {
      expect(hasEnum)
        .to.be.a('function')
    })
  })

  describe('`getEnum`', () => {
    it('is a function', () => {
      expect(getEnum)
        .to.be.a('function')
    })
  })

  describe('`hasOneOf`', () => {
    it('is a function', () => {
      expect(hasOneOf)
        .to.be.a('function')
    })
  })

  describe('`getOneOf`', () => {
    it('is a function', () => {
      expect(getOneOf)
        .to.be.a('function')
    })
  })

  describe('`hasAnyOf`', () => {
    it('is a function', () => {
      expect(hasAnyOf)
        .to.be.a('function')
    })
  })

  describe('`getAnyOf`', () => {
    it('is a function', () => {
      expect(getAnyOf)
        .to.be.a('function')
    })
  })

  describe('`getType`', () => {
    it('is a function', () => {
      expect(getType)
        .to.be.a('function')
    })
  })

  describe('`getComponent`', () => {
    it('is a function', () => {
      expect(getComponent)
        .to.be.a('function')
    })
  })

  describe('`getName`', () => {
    it('is a function', () => {
      expect(getName)
        .to.be.a('function')
    })
  })

  describe('`transformDescriptionToHint`', () => {
    it('is a function', () => {
      expect(transformDescriptionToHint)
        .to.be.a('function')
    })
  })

  describe('`transformTitleToLabel`', () => {
    it('is a function', () => {
      expect(transformTitleToLabel)
        .to.be.a('function')
    })
  })

  describe('`transformTitleToLegend`', () => {
    it('is a function', () => {
      expect(transformTitleToLegend)
        .to.be.a('function')
    })
  })

  describe('`transformTitleToFieldsetLegend`', () => {
    it('is a function', () => {
      expect(transformTitleToFieldsetLegend)
        .to.be.a('function')
    })
  })

  describe('`transformEnum`', () => {
    it('is a function', () => {
      expect(transformEnum)
        .to.be.a('function')
    })
  })

  describe('`transformAnyOf`', () => {
    it('is a function', () => {
      expect(transformAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformOneOf`', () => {
    it('is a function', () => {
      expect(transformOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformFields`', () => {
    it('is a function', () => {
      expect(transformFields)
        .to.be.a('function')
    })
  })

  describe('`transformField`', () => {
    it('is a function', () => {
      expect(transformField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsForEnum`', () => {
    it('is a function', () => {
      expect(transformElementsForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsForAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsForOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsForField`', () => {
    it('is a function', () => {
      expect(transformElementsForField)
        .to.be.a('function')
    })
  })

  describe('`transformOne`', () => {
    it('is a function', () => {
      expect(transformOne)
        .to.be.a('function')
    })
  })

  describe('`transformAll`', () => {
    it('is a function', () => {
      expect(transformAll)
        .to.be.a('function')
    })
  })

  describe('`transform()`', () => {
    describe('With values', () => {
      describe('With params', () => {
        describe('Transforming `string` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

              const values = 'string (2)'

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  enum: {
                    items: [
                      {
                        text: 'string (1)',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'string (2)',
                        value: '1',
                        selected: true
                      },
                      {
                        text: 'string (3)',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              const values = 'string (2)'

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              const values = 'string (2)'

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }

              const values = 'string'

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  params: {
                    value: 'string',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string' }

              const values = 'string'

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  params: {
                    value: 'string',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `number` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', enum: [1, 2, 3] }

              const values = 2

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  enum: {
                    items: [
                      {
                        text: '1',
                        value: '0',
                        selected: false
                      },
                      {
                        text: '2',
                        value: '1',
                        selected: true
                      },
                      {
                        text: '3',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              const values = 2

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              const values = 2

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }

              const values = 2

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  params: {
                    value: '2',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number' }

              const values = 2

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  params: {
                    value: '2',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `array` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }] }

              const values = ['string (2)']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', enum: [1, 2, 3] }] }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: true
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', enum: [true, false] }] }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', enum: [null] }] }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } }

              const values = ['string (2)']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', enum: [1, 2, 3] } }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: true
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', enum: [true, false] } }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', enum: [null] } }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              const values = ['string (2)']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', anyOf: [{ const: true }, { const: false }] }] }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', anyOf: [{ const: null }] }] }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              const values = ['string (2)']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', anyOf: [{ const: null }] } }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              const values = ['string (2)']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', oneOf: [{ const: true }, { const: false }] }] }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', oneOf: [{ const: null }] }] }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }

                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              const values = ['string (2)']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', oneOf: [{ const: null }] } }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }

                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }] }

              const values = ['string']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }] }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', allOf: [{ const: false }] }] }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', allOf: [{ const: null }] }] }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } }

              const values = ['string']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', allOf: [{ const: false }] } }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', allOf: [{ const: null }] } }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string' }] }

              const values = ['string']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number' }] }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean' }] }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null' }] }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string' } }

              const values = ['string']

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number' } }

              const values = [2]

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean' } }

              const values = [false]

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null' } }

              const values = [null]

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `object` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } } }

              const values = { string: 'string (2)' }

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', enum: [1, 2, 3] } } }

              const values = { number: 2 }

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: true
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', enum: [true, false] } } }

              const values = { boolean: false }

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: true
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', enum: [null] } } }

              const values = { null: null }

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: true
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              const values = { string: 'string (2)' }

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              const values = { number: 2 }

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } } }

              const values = { boolean: false }

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: true
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', anyOf: [{ const: null }] } } }

              const values = { null: null }

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: true
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              const values = { string: 'string (2)' }

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              const values = { number: 2 }

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } } }

              const values = { boolean: false }

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: true
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', oneOf: [{ const: null }] } } }

              const values = { null: null }

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: true
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } } }

              const values = { string: 'string' }

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } } }

              const values = { number: 2 }

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', allOf: [{ const: false }] } } }

              const values = { boolean: false }

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', allOf: [{ const: null }] } } }

              const values = { null: null }

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string' } } }

              const values = { string: 'string' }

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number' } } }

              const values = { number: 2 }

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean' } } }

              const values = { boolean: false }

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null' } } }

              const values = { null: null }

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `boolean` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', enum: [true, false] }

              const values = false

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  enum: {
                    items: [
                      {
                        text: 'true',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'false',
                        value: '1',
                        selected: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', anyOf: [{ const: true }, { const: false }] }

              const values = false

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', oneOf: [{ const: true }, { const: false }] }

              const values = false

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', allOf: [{ const: false }] }

              const values = false

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  params: {
                    value: 'false',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean' }

              const values = false

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  params: {
                    value: 'false',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `null` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', enum: [null] }

              const values = null

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  enum: {
                    items: [
                      {
                        text: 'null',
                        value: '0',
                        selected: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', anyOf: [{ const: null }] }

              const values = null

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', oneOf: [{ const: null }] }

              const values = null

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', allOf: [{ const: null }] }

              const values = null

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  params: {
                    value: 'null',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null' }

              const values = null

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  params: {
                    value: 'null',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })
      })

      describe('Without params', () => {
        describe('Transforming `string` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

              const values = 'string (2)'

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'string',
                  enum: {
                    items: [
                      {
                        text: 'string (1)',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'string (2)',
                        value: '1',
                        selected: true
                      },
                      {
                        text: 'string (3)',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              const values = 'string (2)'

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'string',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              const values = 'string (2)'

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'string',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }

              const values = 'string'

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'string',
                  params: {
                    value: 'string',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string' }

              const values = 'string'

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'string',
                  params: {
                    value: 'string',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `number` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', enum: [1, 2, 3] }

              const values = 2

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'number',
                  enum: {
                    items: [
                      {
                        text: '1',
                        value: '0',
                        selected: false
                      },
                      {
                        text: '2',
                        value: '1',
                        selected: true
                      },
                      {
                        text: '3',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              const values = 2

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'number',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              const values = 2

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'number',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }

              const values = 2

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'number',
                  params: {
                    value: '2',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number' }

              const values = 2

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'number',
                  params: {
                    value: '2',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `array` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }] }

              const values = ['string (2)']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', enum: [1, 2, 3] }] }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: true
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', enum: [true, false] }] }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', enum: [null] }] }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } }

              const values = ['string (2)']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', enum: [1, 2, 3] } }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: true
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', enum: [true, false] } }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', enum: [null] } }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              const values = ['string (2)']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', anyOf: [{ const: true }, { const: false }] }] }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', anyOf: [{ const: null }] }] }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              const values = ['string (2)']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', anyOf: [{ const: null }] } }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              const values = ['string (2)']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', oneOf: [{ const: true }, { const: false }] }] }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', oneOf: [{ const: null }] }] }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              const values = ['string (2)']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', oneOf: [{ const: null }] } }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }] }

              const values = ['string']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }] }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', allOf: [{ const: false }] }] }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', allOf: [{ const: null }] }] }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } }

              const values = ['string']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', allOf: [{ const: false }] } }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', allOf: [{ const: null }] } }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string' }] }

              const values = ['string']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number' }] }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean' }] }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null' }] }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string' } }

              const values = ['string']

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number' } }

              const values = [2]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean' } }

              const values = [false]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null' } }

              const values = [null]

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `object` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } } }

              const values = { string: 'string (2)' }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', enum: [1, 2, 3] } } }

              const values = { number: 2 }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: true
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', enum: [true, false] } } }

              const values = { boolean: false }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: true
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', enum: [null] } } }

              const values = { null: null }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: true
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              const values = { string: 'string (2)' }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              const values = { number: 2 }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } } }

              const values = { boolean: false }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: true
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', anyOf: [{ const: null }] } } }

              const values = { null: null }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: true
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              const values = { string: 'string (2)' }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              const values = { number: 2 }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } } }

              const values = { boolean: false }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: true
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', oneOf: [{ const: null }] } } }

              const values = { null: null }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: true
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } } }

              const values = { string: 'string' }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } } }

              const values = { number: 2 }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', allOf: [{ const: false }] } } }

              const values = { boolean: false }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', allOf: [{ const: null }] } } }

              const values = { null: null }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string' } } }

              const values = { string: 'string' }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number' } } }

              const values = { number: 2 }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean' } } }

              const values = { boolean: false }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null' } } }

              const values = { null: null }

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `boolean` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', enum: [true, false] }

              const values = false

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'boolean',
                  enum: {
                    items: [
                      {
                        text: 'true',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'false',
                        value: '1',
                        selected: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', anyOf: [{ const: true }, { const: false }] }

              const values = false

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'boolean',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', oneOf: [{ const: true }, { const: false }] }

              const values = false

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'boolean',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', allOf: [{ const: false }] }

              const values = false

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'boolean',
                  params: {
                    value: 'false',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean' }

              const values = false

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'boolean',
                  params: {
                    value: 'false',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `null` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', enum: [null] }

              const values = null

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'null',
                  enum: {
                    items: [
                      {
                        text: 'null',
                        value: '0',
                        selected: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', anyOf: [{ const: null }] }

              const values = null

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'null',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', oneOf: [{ const: null }] }

              const values = null

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'null',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: true
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', allOf: [{ const: null }] }

              const values = null

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'null',
                  params: {
                    value: 'null',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null' }

              const values = null

              // log(JSON.stringify(transform(schema, values), null, 2))

              return expect(transform(schema, values))
                .to.eql({
                  type: 'null',
                  params: {
                    value: 'null',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })
      })
    })

    describe('Without values', () => {
      describe('With params', () => {
        describe('Transforming `string` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  enum: {
                    items: [
                      {
                        text: 'string (1)',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'string (2)',
                        value: '1',
                        selected: false
                      },
                      {
                        text: 'string (3)',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  params: {
                    value: 'string',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string' }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'string',
                  component: 'string component',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `number` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', enum: [1, 2, 3] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  enum: {
                    items: [
                      {
                        text: '1',
                        value: '0',
                        selected: false
                      },
                      {
                        text: '2',
                        value: '1',
                        selected: false
                      },
                      {
                        text: '3',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  params: {
                    value: '2',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number' }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'number',
                  component: 'number component',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `array` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', enum: [1, 2, 3] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: false
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', enum: [true, false] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', enum: [null] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', enum: [1, 2, 3] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: false
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', enum: [true, false] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', enum: [null] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', anyOf: [{ const: true }, { const: false }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', anyOf: [{ const: null }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', anyOf: [{ const: null }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', oneOf: [{ const: true }, { const: false }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', oneOf: [{ const: null }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }

                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', oneOf: [{ const: null }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }

                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', allOf: [{ const: false }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', allOf: [{ const: null }] }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', allOf: [{ const: false }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', allOf: [{ const: null }] } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string' }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number' }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean' }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null' }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string' } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number' } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean' } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null' } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'array',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `object` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', enum: [1, 2, 3] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: false
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', enum: [true, false] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: false
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', enum: [null] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: false
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: false
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', anyOf: [{ const: null }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: false
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: false
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', oneOf: [{ const: null }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: false
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', allOf: [{ const: false }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', allOf: [{ const: null }] } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string' } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'string component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'string component',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number' } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'number component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'number component',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean' } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'boolean component',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null' } } }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'object',
                  component: 'null component',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `boolean` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', enum: [true, false] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  enum: {
                    items: [
                      {
                        text: 'true',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'false',
                        value: '1',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', anyOf: [{ const: true }, { const: false }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', oneOf: [{ const: true }, { const: false }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', allOf: [{ const: false }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  params: {
                    value: 'false',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean' }

              const values = {}

              const params = {
                '#/': { meta: { component: 'boolean component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'boolean',
                  component: 'boolean component',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `null` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', enum: [null] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  enum: {
                    items: [
                      {
                        text: 'null',
                        value: '0',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', anyOf: [{ const: null }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', oneOf: [{ const: null }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', allOf: [{ const: null }] }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  params: {
                    value: 'null',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null' }

              const values = {}

              const params = {
                '#/': { meta: { component: 'null component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  type: 'null',
                  component: 'null component',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })
      })

      describe('Without params', () => {
        describe('Transforming `string` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  enum: {
                    items: [
                      {
                        text: 'string (1)',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'string (2)',
                        value: '1',
                        selected: false
                      },
                      {
                        text: 'string (3)',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  params: {
                    value: 'string',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `string` type schemas', () => {
              const schema = { type: 'string' }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `number` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', enum: [1, 2, 3] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  enum: {
                    items: [
                      {
                        text: '1',
                        value: '0',
                        selected: false
                      },
                      {
                        text: '2',
                        value: '1',
                        selected: false
                      },
                      {
                        text: '3',
                        value: '2',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        name: '#/2',
                        id: '#/2',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  params: {
                    value: '2',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `number` type schemas', () => {
              const schema = { type: 'number' }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `array` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', enum: [1, 2, 3] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: false
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', enum: [true, false] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', enum: [null] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', enum: [1, 2, 3] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: false
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', enum: [true, false] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', enum: [null] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', anyOf: [{ const: true }, { const: false }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', anyOf: [{ const: null }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', anyOf: [{ const: null }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', oneOf: [{ const: true }, { const: false }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', oneOf: [{ const: null }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }

                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/0/2',
                            id: '#/0/2',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/0/1',
                            id: '#/0/1',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', oneOf: [{ const: null }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/0/0',
                            id: '#/0/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }

                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean', allOf: [{ const: false }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null', allOf: [{ const: null }] }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean', allOf: [{ const: false }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null', allOf: [{ const: null }] } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
              const schema = { type: 'array', items: [{ type: 'string' }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `number` type', () => {
              const schema = { type: 'array', items: [{ type: 'number' }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `boolean` type', () => {
              const schema = { type: 'array', items: [{ type: 'boolean' }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an array of `null` type', () => {
              const schema = { type: 'array', items: [{ type: 'null' }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
              const schema = { type: 'array', items: { type: 'string' } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `number` type', () => {
              const schema = { type: 'array', items: { type: 'number' } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `boolean` type', () => {
              const schema = { type: 'array', items: { type: 'boolean' } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas (`items` is an object of `null` type', () => {
              const schema = { type: 'array', items: { type: 'null' } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        name: '#/0',
                        id: '#/0',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `object` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', enum: [1, 2, 3] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            selected: false
                          },
                          {
                            text: '2',
                            value: '1',
                            selected: false
                          },
                          {
                            text: '3',
                            value: '2',
                            selected: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', enum: [true, false] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            selected: false
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', enum: [null] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            selected: false
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', anyOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', anyOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', anyOf: [{ const: true }, { const: false }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: false
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', anyOf: [{ const: null }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: false
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', oneOf: [{ const: 'string (1)' }, { const: 'string (2)' }, { const: 'string (3)' }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/string/0',
                            id: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/string/1',
                            id: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/string/2',
                            id: '#/string/2',
                            checked: false
                          }
                        ],
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', oneOf: [{ const: 1 }, { const: 2 }, { const: 3 }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/number/0',
                            id: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/number/1',
                            id: '#/number/1',
                            checked: false
                          },
                          {
                            value: '2',
                            name: '#/number/2',
                            id: '#/number/2',
                            checked: false
                          }
                        ],
                        name: '#/number',
                        id: '#/number',
                        required: false
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', oneOf: [{ const: true }, { const: false }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/boolean/0',
                            id: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            name: '#/boolean/1',
                            id: '#/boolean/1',
                            checked: false
                          }
                        ],
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', oneOf: [{ const: null }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            name: '#/null/0',
                            id: '#/null/0',
                            checked: false
                          }
                        ],
                        name: '#/null',
                        id: '#/null',
                        required: false
                      }
                    }
                  ]
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string', allOf: [{ const: 'string' }, { minLength: 1 }, { maxLength: 20 }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        value: 'string',
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number', allOf: [{ minimum: 1 }, { const: 2 }, { maximum: 3 }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        value: '2',
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean', allOf: [{ const: false }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        value: 'false',
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null', allOf: [{ const: null }] } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        value: 'null',
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `object` type schemas of `string` type)', () => {
              const schema = { type: 'object', properties: { string: { type: 'string' } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'string',
                      params: {
                        name: '#/string',
                        id: '#/string',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `number` type', () => {
              const schema = { type: 'object', properties: { number: { type: 'number' } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'number',
                      params: {
                        name: '#/number',
                        id: '#/number',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `boolean` type', () => {
              const schema = { type: 'object', properties: { boolean: { type: 'boolean' } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'boolean',
                      params: {
                        name: '#/boolean',
                        id: '#/boolean',
                        required: false // ?
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas of `null` type', () => {
              const schema = { type: 'object', properties: { null: { type: 'null' } } }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'object',
                  params: {},
                  fields: [
                    {
                      type: 'null',
                      params: {
                        name: '#/null',
                        id: '#/null',
                        required: false // ?
                      }
                    }
                  ]
                })
            })
          })
        })

        describe('Transforming `boolean` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', enum: [true, false] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'boolean',
                  enum: {
                    items: [
                      {
                        text: 'true',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'false',
                        value: '1',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', anyOf: [{ const: true }, { const: false }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'boolean',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', oneOf: [{ const: true }, { const: false }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'boolean',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        name: '#/1',
                        id: '#/1',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean', allOf: [{ const: false }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'boolean',
                  params: {
                    value: 'false',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `boolean` type schemas', () => {
              const schema = { type: 'boolean' }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'boolean',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })

        describe('Transforming `null` type schemas', () => {
          describe('With `enum`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', enum: [null] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'null',
                  enum: {
                    items: [
                      {
                        text: 'null',
                        value: '0',
                        selected: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `anyOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', anyOf: [{ const: null }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'null',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `oneOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', oneOf: [{ const: null }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'null',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        name: '#/0',
                        id: '#/0',
                        checked: false
                      }
                    ],
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('With `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null', allOf: [{ const: null }] }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'null',
                  params: {
                    value: 'null',
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })

          describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            it('transforms `null` type schemas', () => {
              const schema = { type: 'null' }

              // log(JSON.stringify(transform(schema), null, 2))

              return expect(transform(schema))
                .to.eql({
                  type: 'null',
                  params: {
                    name: '#/',
                    id: '#/'
                  }
                })
            })
          })
        })
      })
    })
  })
})
