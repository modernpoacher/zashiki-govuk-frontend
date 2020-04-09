import debug from 'debug'

import { expect } from 'chai'

import transform, {
  transformFieldToCheckboxes,
  transformFieldToDateInput,
  transformFieldToFieldset,
  transformFieldToFileUpload,
  transformFieldToRadios,
  transformFieldToSelect,
  transformFieldToInput,
  transformFieldToComponent,
  transformFieldsToComponent,
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
  transformElementsToCheckboxesForEnum,
  transformElementsToCheckboxesForAnyOf,
  transformElementsToCheckboxesForOneOf,
  transformElementsToCheckboxesForField,
  transformElementsToCheckboxesEnum,
  transformElementsToCheckboxesAnyOf,
  transformElementsToCheckboxesOneOf,
  transformElementsToCheckboxesField,
  transformElementsToRadiosForEnum,
  transformElementsToRadiosForAnyOf,
  transformElementsToRadiosForOneOf,
  transformElementsToRadiosForField,
  transformElementsToRadiosEnum,
  transformElementsToRadiosAnyOf,
  transformElementsToRadiosOneOf,
  transformElementsToRadiosField,
  transformElementsToSelectForEnum,
  transformElementsToSelectForAnyOf,
  transformElementsToSelectForOneOf,
  transformElementsToSelectForField,
  transformElementsToSelectEnum,
  transformElementsToSelectAnyOf,
  transformElementsToSelectOneOf,
  transformElementsToSelectField,
  transformElementsToInputForEnum,
  transformElementsToInputForAnyOf,
  transformElementsToInputForOneOf,
  transformElementsToInputForField,
  transformElementsToInputEnum,
  transformElementsToInputAnyOf,
  transformElementsToInputOneOf,
  transformElementsToInputField,
  transformFields,
  transformField,
  transformOne,
  transformAll
} from 'zashiki-govuk-frontend/src/transformer'

describe('zashiki-govuk-frontend/src/transformer', () => {
  before(() => debug.enable('zashiki:mocha'))

  describe('`transformer`', () => {
    it('is a function', () => {
      expect(transform)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToCheckboxes`', () => {
    it('is a function', () => {
      expect(transformFieldToCheckboxes)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToDateInput`', () => {
    it('is a function', () => {
      expect(transformFieldToDateInput)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToFieldset`', () => {
    it('is a function', () => {
      expect(transformFieldToFieldset)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToFileUpload`', () => {
    it('is a function', () => {
      expect(transformFieldToFileUpload)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToRadios`', () => {
    it('is a function', () => {
      expect(transformFieldToRadios)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToSelect`', () => {
    it('is a function', () => {
      expect(transformFieldToSelect)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToInput`', () => {
    it('is a function', () => {
      expect(transformFieldToInput)
        .to.be.a('function')
    })
  })

  describe('`transformFieldsToComponent`', () => {
    it('is a function', () => {
      expect(transformFieldsToComponent)
        .to.be.a('function')
    })
  })

  describe('`transformFieldToComponent`', () => {
    it('is a function', () => {
      expect(transformFieldToComponent)
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

  describe('`transformElementsToInputForEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToInputForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputForAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToInputForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputForOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToInputForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputForField`', () => {
    it('is a function', () => {
      expect(transformElementsToInputForField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToInputEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToInputAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToInputOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToInputField`', () => {
    it('is a function', () => {
      expect(transformElementsToInputField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesForEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesForAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesForOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesForField`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesForField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToCheckboxesField`', () => {
    it('is a function', () => {
      expect(transformElementsToCheckboxesField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosForEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosForAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosForOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosForField`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosForField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToRadiosField`', () => {
    it('is a function', () => {
      expect(transformElementsToRadiosField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectForEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectForAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectForOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectForField`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectForField)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectEnum`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectEnum)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectAnyOf`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectOneOf`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformElementsToSelectField`', () => {
    it('is a function', () => {
      expect(transformElementsToSelectField)
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

  describe('`transformAll`', () => {
    it('is a function', () => {
      expect(transformAll)
        .to.be.a('function')
    })
  })

  describe('`transformOne`', () => {
    it('is a function', () => {
      expect(transformOne)
        .to.be.a('function')
    })
  })

  describe('`transform()`', () => {
    describe('With `component`', () => {
      describe('With values', () => {
        describe('With params', () => {
          describe('Transforming `string` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }

                  const values = 'string (2)'

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            checked: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            checked: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            checked: false
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
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    anyOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = 'string (2)'

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: true
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            id: '#/2',
                            name: '#/2',
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
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    oneOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = 'string (2)'

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: true
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            id: '#/2',
                            name: '#/2',
                            checked: false
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    allOf: [
                      { minLength: 1 },
                      { const: 'string' },
                      { maxLength: 20 }
                    ]
                  }

                  const values = 'string'

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    minLength: 1,
                    const: 'string',
                    maxLength: 20
                  }

                  const values = 'string'

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }

                  const values = 'string (2)'

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
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
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    anyOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = 'string (2)'

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            selected: true
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            selected: false
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
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    oneOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = 'string (2)'

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            selected: true
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            selected: false
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    allOf: [
                      { minLength: 1 },
                      { const: 'string' },
                      { maxLength: 20 }
                    ]
                  }

                  const values = 'string'

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    minLength: 1,
                    const: 'string',
                    maxLength: 20
                  }

                  const values = 'string'

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })
          })

          describe('Transforming `number` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            text: '1',
                            value: '0',
                            checked: false
                          },
                          {
                            text: '2',
                            value: '1',
                            checked: true
                          },
                          {
                            text: '3',
                            value: '2',
                            checked: false
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
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    anyOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: true
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            id: '#/2',
                            name: '#/2',
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
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    oneOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: true
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            id: '#/2',
                            name: '#/2',
                            checked: false
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    minimum: 1,
                    const: 2,
                    maximum: 3
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
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
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    anyOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            selected: true
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            selected: false
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
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    oneOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            selected: true
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            selected: false
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    minimum: 1,
                    const: 2,
                    maximum: 3
                  }

                  const values = 2

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })
          })

          describe('Transforming `array` type schemas', () => {
            describe('To a `checkboxes` component', () => {
              describe('With `enum`', () => {
                it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    title: 'Checkboxes',
                    description: 'A string schema',
                    items: {
                      type: 'string',
                      enum: [
                        'String (1)',
                        'String (2)',
                        'String (3)'
                      ]
                    }
                  }

                  const values = [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Checkboxes'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            text: 'String (1)',
                            value: '0',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            text: 'String (2)',
                            value: '1',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            text: 'String (3)',
                            value: '2',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'number',
                        enum: [
                          1,
                          2,
                          3
                        ]
                      }
                    ]
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            text: '2',
                            value: '1',
                            id: '#/0',
                            name: '#/0',
                            checked: true
                          },
                          {
                            text: '3',
                            value: '2',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        enum: [
                          true,
                          false
                        ]
                      }
                    ]
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            name: '#/0',
                            id: '#/0',
                            checked: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            name: '#/0',
                            id: '#/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        enum: [
                          null
                        ]
                      }
                    ]
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            name: '#/0',
                            id: '#/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  }

                  const values = ['string (2)']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      enum: {
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            name: '#/0',
                            id: '#/0',
                            checked: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            name: '#/0',
                            id: '#/0',
                            checked: true
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            name: '#/0',
                            id: '#/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

                      enum: {
                        items: [
                          {
                            text: '1',
                            value: '0',
                            name: '#/0',
                            id: '#/0',
                            checked: false
                          },
                          {
                            text: '2',
                            value: '1',
                            name: '#/0',
                            id: '#/0',
                            checked: true
                          },
                          {
                            text: '3',
                            value: '2',
                            name: '#/0',
                            id: '#/0',
                            checked: false
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

                      enum: {
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            name: '#/0',
                            id: '#/0',
                            checked: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            name: '#/0',
                            id: '#/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      enum: {
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            name: '#/0',
                            id: '#/0',
                            checked: true
                          }
                        ],
                        name: '#/0',
                        id: '#/0',
                        required: false
                      }
                    })
                })
              })

              describe('With `anyOf`', () => {
                it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      }
                    ]
                  }

                  const values = ['string (2)']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'number',
                        anyOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      }
                    ]
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

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
                        required: false
                      }

                    })
                })

                it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        anyOf: [
                          { const: true },
                          { const: false }
                        ]
                      }
                    ]
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        anyOf: [
                          { const: null }
                        ]
                      }
                    ]
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }

                  const values = ['string (2)']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                    })
                })
              })

              describe('With `oneOf`', () => {
                it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      }
                    ]
                  }

                  const values = ['string (2)']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

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
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'number',
                        oneOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      }
                    ]
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

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
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        oneOf: [
                          { const: true },
                          { const: false }
                        ]
                      }
                    ]
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',

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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        oneOf: [
                          { const: null }
                        ]
                      }
                    ]
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }

                  const values = ['string (2)']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                        required: false
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
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
                    })
                })
              })

              /*
               *  `title` `description` `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        allOf: [
                          { const: 'string' },
                          { minLength: 1 },
                          { maxLength: 20 }
                        ]
                      }
                    ]
                  }

                  const values = ['string']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        id: '#/0',
                        name: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'string',
                            value: 'string',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'number',
                        allOf: [
                          { minimum: 1 },
                          { const: 2 },
                          { maximum: 3 }
                        ]
                      }
                    ]
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: '2',
                            value: '2',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        allOf: [
                          { const: false }
                        ]
                      }
                    ]
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'false',
                            value: 'false',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        allOf: [
                          { const: null }
                        ]
                      }
                    ]
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'null',
                            value: 'null',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  }

                  const values = ['string']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'string',
                            value: 'string',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: '2',
                            value: '2',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'false',
                            value: 'false',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'null',
                            value: 'null',
                            checked: false
                          }
                        ]
                      }

                    })
                })
              })

              /*
               *  `title` `description` `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        const: 'string',
                        minLength: 1,
                        maxLength: 20
                      }
                    ]
                  }

                  const values = ['string']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        id: '#/0',
                        name: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'string',
                            value: 'string',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'number',
                        minimum: 1,
                        const: 2,
                        maximum: 3
                      }
                    ]
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: '2',
                            value: '2',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        const: false
                      }
                    ]
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'false',
                            value: 'false',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        const: null
                      }
                    ]
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'null',
                            value: 'null',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'string',
                      const: 'string',
                      minLength: 1,
                      maxLength: 20
                    }
                  }

                  const values = ['string']

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'string',
                            value: 'string',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'number',
                      minimum: 1,
                      const: 2,
                      maximum: 3
                    }
                  }

                  const values = [2]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: '2',
                            value: '2',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'boolean',
                      const: false
                    }
                  }

                  const values = [false]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'false',
                            value: 'false',
                            checked: false
                          }
                        ]
                      }
                    })
                })

                it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                  const schema = {
                    type: 'array',
                    items: {
                      type: 'null',
                      const: null
                    }
                  }

                  const values = [null]

                  const params = {
                    '#/': { meta: { component: 'checkboxes' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'array',
                      component: 'checkboxes',
                      field: {
                        name: '#/0',
                        id: '#/0',
                        required: false,
                        items: [
                          {
                            text: 'null',
                            value: 'null',
                            checked: false
                          }
                        ]
                      }

                    })
                })
              })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    enum: [
                      true,
                      false
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            checked: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            checked: true
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
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    anyOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            id: '#/1',
                            name: '#/1',
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
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    oneOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            id: '#/1',
                            name: '#/1',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    allOf: [
                      { const: false }
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'false',
                            text: 'false',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    const: false
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'false',
                            text: 'false',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    enum: [
                      true,
                      false
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
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
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    anyOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            selected: true
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
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    oneOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    allOf: [
                      { const: false }
                    ]
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'false',
                            text: 'false',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    const: false
                  }

                  const values = false

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'false',
                            text: 'false',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })
          })

          describe('Transforming `null` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    enum: [
                      null
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            checked: true
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
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    anyOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            id: '#/0',
                            name: '#/0',
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
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    oneOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            id: '#/0',
                            name: '#/0',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    allOf: [
                      { const: null }
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               * `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    const: null
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    enum: [
                      null
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
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
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    anyOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            selected: true
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
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    oneOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('With `allOf`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    allOf: [
                      { const: null }
                    ]
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              /*
               *  `value` `checked` / `selected`
               */
              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    const: null
                  }

                  const values = null

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            selected: true
                          }
                        ],
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

      describe('Without values', () => {
        describe('With params', () => {
          describe('Transforming `string` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            text: 'string (1)',
                            value: '0',
                            checked: false
                          },
                          {
                            text: 'string (2)',
                            value: '1',
                            checked: false
                          },
                          {
                            text: 'string (3)',
                            value: '2',
                            checked: false
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
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    anyOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: false
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            id: '#/2',
                            name: '#/2',
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
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    oneOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: false
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            id: '#/2',
                            name: '#/2',
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
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    allOf: [
                      { minLength: 1 },
                      { const: 'string' },
                      { maxLength: 20 }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Radios',
                    description: 'A string schema',
                    minLength: 1,
                    const: 'string',
                    maxLength: 20
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
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
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    anyOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            selected: false
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            selected: false
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
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    oneOf: [
                      { const: 'string (1)', title: 'String (1)' },
                      { const: 'string (2)', title: 'String (2)' },
                      { const: 'string (3)', title: 'String (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'String (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'String (2)',
                            selected: false
                          },
                          {
                            value: '2',
                            text: 'String (3)',
                            selected: false
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
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    allOf: [
                      { minLength: 1 },
                      { const: 'string' },
                      { maxLength: 20 }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `string` type schemas', () => {
                  const schema = {
                    type: 'string',
                    title: 'Select',
                    description: 'A string schema',
                    minLength: 1,
                    const: 'string',
                    maxLength: 20
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'string',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A string schema'
                        },
                        items: [
                          {
                            value: 'string',
                            text: 'string',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })
          })

          describe('Transforming `number` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            text: '1',
                            value: '0',
                            checked: false
                          },
                          {
                            text: '2',
                            value: '1',
                            checked: false
                          },
                          {
                            text: '3',
                            value: '2',
                            checked: false
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
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    anyOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: false
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            id: '#/2',
                            name: '#/2',
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
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    oneOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            id: '#/1',
                            name: '#/1',
                            checked: false
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            id: '#/2',
                            name: '#/2',
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
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    allOf: [
                      { minLength: 1 },
                      { const: 2 },
                      { maxLength: 20 }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Radios',
                    description: 'A number schema',
                    minLength: 1,
                    const: 2,
                    maxLength: 20
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
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
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    anyOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            selected: false
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            selected: false
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
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    oneOf: [
                      { const: 1, title: 'Number (1)' },
                      { const: 2, title: 'Number (2)' },
                      { const: 3, title: 'Number (3)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Number (1)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Number (2)',
                            selected: false
                          },
                          {
                            value: '2',
                            text: 'Number (3)',
                            selected: false
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
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `number` type schemas', () => {
                  const schema = {
                    type: 'number',
                    title: 'Select',
                    description: 'A number schema',
                    minimum: 1,
                    const: 2,
                    maximum: 3
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'number',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A number schema'
                        },
                        items: [
                          {
                            value: '2',
                            text: '2',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })
          })

          describe('Transforming `array` type schemas', () => {
            describe('With `enum`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  description: 'A string schema',
                  items: {
                    type: 'string',
                    enum: [
                      'String (1)',
                      'String (2)',
                      'String (3)'
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      hint: {
                        text: 'A string schema'
                      },
                      items: [
                        {
                          text: 'String (1)',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        },
                        {
                          text: 'String (2)',
                          value: '1',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        },
                        {
                          text: 'String (3)',
                          value: '2',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        }
                      ],
                      id: '#/0',
                      name: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      items: [
                        {
                          text: '1',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        },
                        {
                          text: '2',
                          value: '1',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        },
                        {
                          text: '3',
                          value: '2',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      items: [
                        {
                          text: 'true',
                          value: '0',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        },
                        {
                          text: 'false',
                          value: '1',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      items: [
                        {
                          text: 'null',
                          value: '0',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      items: [
                        {
                          text: 'string (1)',
                          value: '0',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        },
                        {
                          text: 'string (2)',
                          value: '1',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        },
                        {
                          text: 'string (3)',
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

                    enum: {
                      items: [
                        {
                          text: '1',
                          value: '0',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        },
                        {
                          text: '2',
                          value: '1',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        },
                        {
                          text: '3',
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

                    enum: {
                      items: [
                        {
                          text: 'true',
                          value: '0',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        },
                        {
                          text: 'false',
                          value: '1',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      items: [
                        {
                          text: 'null',
                          value: '0',
                          name: '#/0',
                          id: '#/0',
                          checked: false
                        }
                      ],
                      name: '#/0',
                      id: '#/0',
                      required: false
                    }
                  })
              })
            })

            describe('With `anyOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

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
                      required: false
                    }

                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                  })
              })
            })

            describe('With `oneOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

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
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

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
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',

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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                      required: false
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
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
                  })
              })
            })

            /*
             *  `value` `checked` / `selected`
             */
            describe('With `allOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      id: '#/0',
                      name: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'string',
                          value: 'string',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: '2',
                          value: '2',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'false',
                          value: 'false',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'null',
                          value: 'null',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    allOf: [
                      { const: 'string' },
                      { minLength: 1 },
                      { maxLength: 20 }
                    ]
                  }
                }

                const values = ['string']

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'string',
                          value: 'string',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: '2',
                          value: '2',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'false',
                          value: 'false',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'null',
                          value: 'null',
                          checked: false
                        }
                      ]
                    }
                  })
              })
            })

            /*
             *  `title` `description` `value` `checked` / `selected`
             */
            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      const: 'string',
                      minLength: 1,
                      maxLength: 20
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      id: '#/0',
                      name: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'string',
                          value: 'string',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      minimum: 1,
                      const: 2,
                      maximum: 3
                    }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: '2',
                          value: '2',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      const: false
                    }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'false',
                          value: 'false',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      const: null
                    }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'null',
                          value: 'null',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    const: 'string',
                    minLength: 1,
                    maxLength: 20
                  }
                }

                const values = ['string']

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'string',
                          value: 'string',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    minimum: 1,
                    const: 2,
                    maximum: 3
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: '2',
                          value: '2',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    const: false
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'false',
                          value: 'false',
                          checked: false
                        }
                      ]
                    }
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    const: null
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      name: '#/0',
                      id: '#/0',
                      required: false,
                      items: [
                        {
                          text: 'null',
                          value: 'null',
                          checked: false
                        }
                      ]
                    }

                  })
              })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    enum: [
                      true,
                      false
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            text: 'true',
                            value: '0',
                            checked: false
                          },
                          {
                            text: 'false',
                            value: '1',
                            checked: false
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
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    anyOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            id: '#/1',
                            name: '#/1',
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
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    oneOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            id: '#/0',
                            name: '#/0',
                            checked: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            id: '#/1',
                            name: '#/1',
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
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    allOf: [
                      { const: true }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'true',
                            text: 'true',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Radios',
                    description: 'A boolean schema',
                    const: true
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'true',
                            text: 'true',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    enum: [
                      true,
                      false
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
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
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    anyOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            selected: false
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
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    oneOf: [
                      { const: true, title: 'Boolean (True)' },
                      { const: false, title: 'Boolean (False)' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Boolean (True)',
                            selected: false
                          },
                          {
                            value: '1',
                            text: 'Boolean (False)',
                            selected: false
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
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    allOf: [
                      { const: true }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'true',
                            text: 'true',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `boolean` type schemas', () => {
                  const schema = {
                    type: 'boolean',
                    title: 'Select',
                    description: 'A boolean schema',
                    const: true
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'boolean',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A boolean schema'
                        },
                        items: [
                          {
                            value: 'true',
                            text: 'true',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })
          })

          describe('Transforming `null` type schemas', () => {
            describe('To a `radios` component', () => {
              describe('With `enum`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    enum: [
                      null
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      enum: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            text: 'null',
                            value: '0',
                            checked: false
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
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    anyOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      anyOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            id: '#/0',
                            name: '#/0',
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
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    oneOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      oneOf: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            id: '#/0',
                            name: '#/0',
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
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    allOf: [
                      { const: null }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Radios',
                    description: 'A null schema',
                    const: null
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'radios' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'radios',
                      field: {
                        fieldset: {
                          legend: {
                            text: 'Radios'
                          }
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            checked: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })
            })

            describe('To a `select` component', () => {
              describe('With `enum`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    enum: [
                      null
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      enum: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
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
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    anyOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      anyOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            selected: false
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
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    oneOf: [
                      { const: null, title: 'Null' }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      oneOf: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: '0',
                            text: 'Null',
                            selected: false
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
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    allOf: [
                      { const: null }
                    ]
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            selected: true
                          }
                        ],
                        name: '#/',
                        id: '#/'
                      }
                    })
                })
              })

              describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                it('transforms `null` type schemas', () => {
                  const schema = {
                    type: 'null',
                    title: 'Select',
                    description: 'A null schema',
                    const: null
                  }

                  const values = undefined

                  const params = {
                    '#/': { meta: { component: 'select' } }
                  }

                  return expect(transform(schema, values, params))
                    .to.eql({
                      type: 'null',
                      component: 'select',
                      field: {
                        label: {
                          text: 'Select'
                        },
                        hint: {
                          text: 'A null schema'
                        },
                        items: [
                          {
                            value: 'null',
                            text: 'null',
                            selected: true
                          }
                        ],
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

    describe('Without `component`', () => {
      describe('With values', () => {
        describe('With params', () => {
          describe('Transforming `string` type schemas', () => {
            describe('With `enum`', () => {
              it('transforms `string` type schemas', () => {
                const schema = {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                }

                const values = 'string (2)'

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                // console.log(JSON.stringify(transform(schema, values, params), null, 2))

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
                    enum: {
                      items: [
                        {
                          text: 'string (1)',
                          value: '0',
                          // name: '#/',
                          // id: '#/',
                          selected: false
                        },
                        {
                          text: 'string (2)',
                          value: '1',
                          // name: '#/',
                          // id: '#/',
                          selected: true
                        },
                        {
                          text: 'string (3)',
                          value: '2',
                          // name: '#/',
                          // id: '#/',
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
                const schema = {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

                const values = 'string (2)'

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
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
                const schema = {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

                const values = 'string (2)'

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
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
                const schema = {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }

                const values = 'string'

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
                    field: {
                      value: 'string',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `string` type schemas', () => {
                const schema = {
                  type: 'string'
                }

                const values = 'string'

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }

                const values = 2

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
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
                const schema = {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

                const values = 2

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
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
                const schema = {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

                const values = 2

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
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
                const schema = {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }

                const values = 2

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
                    field: {
                      value: '2',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `number` type schemas', () => {
                const schema = {
                  type: 'number'
                }

                const values = 2

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  ]
                }

                const values = ['string (2)']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                // console.log(JSON.stringify(transform(schema, values, params), null, 2))

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }
                }

                const values = ['string (2)']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = ['string (2)']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = ['string (2)']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = ['string (2)']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = ['string (2)']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  ]
                }

                const values = ['string']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    allOf: [
                      { const: 'string' },
                      { minLength: 1 },
                      { maxLength: 20 }
                    ]
                  }
                }

                const values = ['string']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'string' }
                  ]
                }

                const values = ['string']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'number' }
                  ]
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'boolean' }
                  ]
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'null' }
                  ]
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                }

                const values = ['string']

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number'
                  }
                }

                const values = [2]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean'
                  }
                }

                const values = [false]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null'
                  }
                }

                const values = [null]

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  }
                }

                const values = { string: 'string (2)' }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  }
                }

                const values = { null: null }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                const values = { string: 'string (2)' }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = { null: null }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                const values = { string: 'string (2)' }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = { null: null }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  }
                }

                const values = { string: 'string' }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = { null: null }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/null',
                          id: '#/null',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `object` type schemas of `string` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string'
                    }
                  }
                }

                const values = { string: 'string' }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number'
                    }
                  }
                }

                const values = { number: 2 }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean'
                    }
                  }
                }

                const values = { boolean: false }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null'
                    }
                  }
                }

                const values = { null: null }

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/null',
                          id: '#/null',
                          required: false
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
                const schema = {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }

                const values = false

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
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
                const schema = {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }

                const values = false

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
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
                const schema = {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }

                const values = false

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
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
                const schema = {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }

                const values = false

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
                    field: {
                      value: 'false',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `boolean` type schemas', () => {
                const schema = {
                  type: 'boolean'
                }

                const values = false

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'null',
                  enum: [
                    null
                  ]
                }

                const values = null

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
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
                const schema = {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }

                const values = null

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
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
                const schema = {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }

                const values = null

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
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
                const schema = {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }

                const values = null

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
                    field: {
                      value: 'null',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `null` type schemas', () => {
                const schema = {
                  type: 'null'
                }

                const values = null

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                }

                const values = 'string (2)'

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
                const schema = {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

                const values = 'string (2)'

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
                const schema = {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

                const values = 'string (2)'

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
                const schema = {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }

                const values = 'string'

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'string',
                    field: {
                      value: 'string',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `string` type schemas', () => {
                const schema = {
                  type: 'string'
                }

                const values = 'string'

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'string',
                    field: {
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
                const schema = {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }

                const values = 2

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
                const schema = {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

                const values = 2

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
                const schema = {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

                const values = 2

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
                const schema = {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }

                const values = 2

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'number',
                    field: {
                      value: '2',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `number` type schemas', () => {
                const schema = {
                  type: 'number'
                }

                const values = 2

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'number',
                    field: {
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  ]
                }

                const values = ['string (2)']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  ]
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  ]
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  ]
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }
                }

                const values = ['string (2)']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = ['string (2)']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = ['string (2)']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = ['string (2)']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = ['string (2)']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  ]
                }

                const values = ['string']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  ]
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    allOf: [
                      { const: 'string' },
                      { minLength: 1 },
                      { maxLength: 20 }
                    ]
                  }
                }

                const values = ['string']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'string' }
                  ]
                }

                const values = ['string']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'number' }
                  ]
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'boolean' }
                  ]
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'null' }
                  ]
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                }

                const values = ['string']

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number'
                  }
                }

                const values = [2]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean'
                  }
                }

                const values = [false]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null'
                  }
                }

                const values = [null]

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  }
                }

                const values = { string: 'string (2)' }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  }
                }

                const values = { null: null }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                const values = { string: 'string (2)' }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = { null: null }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                const values = { string: 'string (2)' }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = { null: null }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  }
                }

                const values = { string: 'string' }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  }
                }

                const values = { number: 2 }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  }
                }

                const values = { boolean: false }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = { null: null }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/null',
                          id: '#/null',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `object` type schemas of `string` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string'
                    }
                  }
                }

                const values = { string: 'string' }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number'
                    }
                  }
                }

                const values = { number: 2 }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean'
                    }
                  }
                }

                const values = { boolean: false }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null'
                    }
                  }
                }

                const values = { null: null }

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/null',
                          id: '#/null',
                          required: false
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
                const schema = {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }

                const values = false

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
                const schema = {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }

                const values = false

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
                const schema = {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }

                const values = false

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
                const schema = {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }

                const values = false

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'boolean',
                    field: {
                      value: 'false',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `boolean` type schemas', () => {
                const schema = {
                  type: 'boolean'
                }

                const values = false

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'boolean',
                    field: {
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
                const schema = {
                  type: 'null',
                  enum: [
                    null
                  ]
                }

                const values = null

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
                const schema = {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }

                const values = null

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
                const schema = {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }

                const values = null

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
                const schema = {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }

                const values = null

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'null',
                    field: {
                      value: 'null',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `null` type schemas', () => {
                const schema = {
                  type: 'null'
                }

                const values = null

                return expect(transform(schema, values))
                  .to.eql({
                    type: 'null',
                    field: {
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
                const schema = {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
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
                const schema = {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
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
                const schema = {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
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
                const schema = {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
                    field: {
                      value: 'string',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `string` type schemas', () => {
                const schema = {
                  type: 'string'
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'string',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
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
                const schema = {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
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
                const schema = {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
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
                const schema = {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
                    field: {
                      value: '2',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `number` type schemas', () => {
                const schema = {
                  type: 'number'
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'number',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    allOf: [
                      { const: 'string' },
                      { minLength: 1 },
                      { maxLength: 20 }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'string' }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'number' }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'boolean' }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'null' }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number'
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean'
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null'
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'array',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/null',
                          id: '#/null',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `object` type schemas of `string` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string'
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number'
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean'
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null'
                    }
                  }
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'object',
                    component: 'component',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          name: '#/null',
                          id: '#/null',
                          required: false
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
                const schema = {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
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
                const schema = {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
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
                const schema = {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
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
                const schema = {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
                    field: {
                      value: 'false',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `boolean` type schemas', () => {
                const schema = {
                  type: 'boolean'
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'boolean',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'null',
                  enum: [
                    null
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
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
                const schema = {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
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
                const schema = {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
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
                const schema = {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
                    field: {
                      value: 'null',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `null` type schemas', () => {
                const schema = {
                  type: 'null'
                }

                const values = undefined

                const params = {
                  '#/': { meta: { component: 'component' } }
                }

                return expect(transform(schema, values, params))
                  .to.eql({
                    type: 'null',
                    component: 'component',
                    field: {
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
                const schema = {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                }

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
                const schema = {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

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
                const schema = {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }

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
                const schema = {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'string',
                    field: {
                      value: 'string',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `string` type schemas', () => {
                const schema = {
                  type: 'string'
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'string',
                    field: {
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
                const schema = {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }

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
                const schema = {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

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
                const schema = {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }

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
                const schema = {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'number',
                    field: {
                      value: '2',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `number` type schemas', () => {
                const schema = {
                  type: 'number'
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'number',
                    field: {
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
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
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string',
                    allOf: [
                      { const: 'string' },
                      { minLength: 1 },
                      { maxLength: 20 }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'string' }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'number' }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'boolean' }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: [
                    { type: 'null' }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'number'
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'boolean'
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  items: {
                    type: 'null'
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'array',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          name: '#/0',
                          id: '#/0',
                          required: false
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      enum: [
                        true,
                        false
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      anyOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      oneOf: [
                        { const: true },
                        { const: false }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
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
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        { const: 'string' },
                        { maxLength: 20 }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          value: 'string',
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number',
                      allOf: [
                        { minimum: 1 },
                        { const: 2 },
                        { maximum: 3 }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          value: '2',
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          value: 'false',
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          value: 'null',
                          name: '#/null',
                          id: '#/null',
                          required: false
                        }
                      }
                    ]
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `object` type schemas of `string` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    string: {
                      type: 'string'
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'string',
                        field: {
                          name: '#/string',
                          id: '#/string',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `number` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'number'
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'number',
                        field: {
                          name: '#/number',
                          id: '#/number',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `boolean` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    boolean: {
                      type: 'boolean'
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'boolean',
                        field: {
                          name: '#/boolean',
                          id: '#/boolean',
                          required: false
                        }
                      }
                    ]
                  })
              })

              it('transforms `object` type schemas of `null` type)', () => {
                const schema = {
                  type: 'object',
                  properties: {
                    null: {
                      type: 'null'
                    }
                  }
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'object',
                    fields: [
                      {
                        type: 'null',
                        field: {
                          name: '#/null',
                          id: '#/null',
                          required: false
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
                const schema = {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }

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
                const schema = {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }

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
                const schema = {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }

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
                const schema = {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'boolean',
                    field: {
                      value: 'false',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `boolean` type schemas', () => {
                const schema = {
                  type: 'boolean'
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'boolean',
                    field: {
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
                const schema = {
                  type: 'null',
                  enum: [
                    null
                  ]
                }

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
                const schema = {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }

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
                const schema = {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }

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
                const schema = {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'null',
                    field: {
                      value: 'null',
                      name: '#/',
                      id: '#/'
                    }
                  })
              })
            })

            describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              it('transforms `null` type schemas', () => {
                const schema = {
                  type: 'null'
                }

                // log(JSON.stringify(transform(schema), null, 2))

                return expect(transform(schema))
                  .to.eql({
                    type: 'null',
                    field: {
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
})
