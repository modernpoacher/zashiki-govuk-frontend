import debug from 'debug'

import {
  expect
} from 'chai'

import transform, {
  transformFieldToCheckboxes,
  transformFieldToDateInput,
  transformFieldToFileUpload,
  transformFieldToRadios,
  transformFieldToSelect,
  transformFieldToInput,
  transformFieldToComponent,
  transformFieldsToComponent,
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
  transformElementsToRadiosEnum,
  transformElementsToRadiosAnyOf,
  transformElementsToRadiosOneOf,
  transformElementsToSelectForEnum,
  transformElementsToSelectForAnyOf,
  transformElementsToSelectForOneOf,
  transformElementsToSelectEnum,
  transformElementsToSelectAnyOf,
  transformElementsToSelectOneOf,
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
} from '@modernpoacher/zashiki-govuk-frontend/transformer'

describe('#transformer', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

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
              it('transforms `string` type schemas With `enum`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }

                const document = 2

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          value: '0',
                          checked: false
                        },
                        {
                          text: 'Two',
                          value: '1',
                          checked: false
                        },
                        {
                          text: 'Three',
                          value: '2',
                          checked: true
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  anyOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = 'Two'

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          id: '#/0',
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          id: '#/1',
                          checked: true
                        },
                        {
                          value: '2',
                          text: 'Three',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  oneOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = 'Two'

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          id: '#/0',
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          id: '#/1',
                          checked: true
                        },
                        {
                          value: '2',
                          text: 'Three',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
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

                const document = 'string'

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  minLength: 1,
                  const: 'string',
                  maxLength: 20
                }

                const document = 'string'

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `string` type schemas With `enum`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }

                const document = 2

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          value: '0',
                          selected: false
                        },
                        {
                          text: 'Two',
                          value: '1',
                          selected: false
                        },
                        {
                          text: 'Three',
                          value: '2',
                          selected: true
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  anyOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = 'Two'

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          selected: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          selected: true
                        },
                        {
                          value: '2',
                          text: 'Three',
                          selected: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  oneOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = 'Two'

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          selected: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          selected: true
                        },
                        {
                          value: '2',
                          text: 'Three',
                          selected: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
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

                const document = 'string'

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  minLength: 1,
                  const: 'string',
                  maxLength: 20
                }

                const document = 'string'

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })
            })
          })

          describe('Transforming `number` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `number` type schemas With `enum`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `anyOf`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Number (2)',
                          id: '#/1',
                          checked: true
                        },
                        {
                          value: '2',
                          text: 'Number (3)',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `oneOf`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Number (2)',
                          id: '#/1',
                          checked: true
                        },
                        {
                          value: '2',
                          text: 'Number (3)',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'number',
                  title: 'Radios',
                  description: 'A number schema',
                  minimum: 1,
                  const: 2,
                  maximum: 3
                }

                const document = 2

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `number` type schemas With `enum`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `anyOf`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `oneOf`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
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

                const document = 2

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'number',
                  title: 'Select',
                  description: 'A number schema',
                  minimum: 1,
                  const: 2,
                  maximum: 3
                }

                const document = 2

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })
            })
          })

          describe('Transforming `array` type schemas', () => {
            describe('To a `checkboxes` component', () => {
              it('transforms `array` type schemas With `enum` (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  description: 'A string schema',
                  items: {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                }

                const document = [
                  'One',
                  'Two',
                  'Three'
                ]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        },
                        {
                          text: 'Two',
                          value: '1',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        },
                        {
                          text: 'Three',
                          value: '2',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [3]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
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
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'true',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        },
                        {
                          text: 'false',
                          value: '1',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'null',
                      enum: [
                        null
                      ]
                    }
                  ]
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'null',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                }

                const document = [
                  'One',
                  'Two',
                  'Three'
                ]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'One',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        },
                        {
                          text: 'Two',
                          value: '1',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        },
                        {
                          text: 'Three',
                          value: '2',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }

                const document = [3]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
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
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }

                const document = [false] // look-up

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'true',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: false
                        },
                        {
                          text: 'false',
                          value: '1',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `enum` (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    enum: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'null',
                          value: '0',
                          id: '#/0',
                          name: '#/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'string',
                      anyOf: [
                        { const: 'One' },
                        { const: 'Two' },
                        { const: 'Three' }
                      ]
                    }
                  ]
                }

                const document = [
                  'One',
                  'Two',
                  'Three'
                ]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [3]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }

                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'null',
                      anyOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }

                const document = [
                  'One',
                  'Two',
                  'Three'
                ]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const document = [3]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `anyOf` (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }

                const document = [0]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    anyOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'string',
                      oneOf: [
                        { const: 'One' },
                        { const: 'Two' },
                        { const: 'Three' }
                      ]
                    }
                  ]
                }

                const document = [
                  'One',
                  'Two',
                  'Three'
                ]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [3]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'null',
                      oneOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }

                const document = [
                  'One',
                  'Two',
                  'Three'
                ]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }

                const document = [3]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/0/2',
                          name: '#/0/2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/0/1',
                          name: '#/0/1',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              it('transforms `array` type schemas With `oneOf` (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    oneOf: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          value: '0',
                          id: '#/0/0',
                          name: '#/0/0',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = ['string']

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'string',
                          id: '#/0',
                          name: '#/0',
                          value: 'string',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
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

                const document = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: '2',
                          id: '#/0',
                          name: '#/0',
                          value: '2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'boolean',
                      allOf: [
                        { const: false }
                      ]
                    }
                  ]
                }

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'false',
                          id: '#/0',
                          name: '#/0',
                          value: 'false',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'null',
                      allOf: [
                        { const: null }
                      ]
                    }
                  ]
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'null',
                          id: '#/0',
                          name: '#/0',
                          value: 'null',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      { const: 'string' },
                      { maxLength: 20 }
                    ]
                  }
                }

                const document = ['string']

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'string',
                          id: '#/0',
                          name: '#/0',
                          value: 'string',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      { const: 2 },
                      { maximum: 3 }
                    ]
                  }
                }

                const document = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: '2',
                          id: '#/0',
                          name: '#/0',
                          value: '2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'false',
                          id: '#/0',
                          name: '#/0',
                          value: 'false',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  `allOf` incompatible?
               */
              xit('transforms `array` type schemas With `allOf` (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'null',
                          id: '#/0',
                          name: '#/0',
                          value: 'null',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'string',
                      const: 'string',
                      minLength: 1,
                      maxLength: 20
                    }
                  ]
                }

                const document = ['string']

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'string',
                          id: '#/0',
                          name: '#/0',
                          value: 'string',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'number',
                      minimum: 1,
                      const: 2,
                      maximum: 3
                    }
                  ]
                }

                const document = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: '2',
                          id: '#/0',
                          name: '#/0',
                          value: '2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'boolean',
                      const: false
                    }
                  ]
                }

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'false',
                          id: '#/0',
                          name: '#/0',
                          value: 'false',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: [
                    {
                      type: 'null',
                      const: null
                    }
                  ]
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'null',
                          id: '#/0',
                          name: '#/0',
                          value: 'null',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'string',
                    const: 'string',
                    minLength: 1,
                    maxLength: 20
                  }
                }

                const document = ['string']

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'string',
                          id: '#/0',
                          name: '#/0',
                          value: 'string',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'number',
                    minimum: 1,
                    const: 2,
                    maximum: 3
                  }
                }

                const document = [2]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: '2',
                          id: '#/0',
                          name: '#/0',
                          value: '2',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'boolean',
                    const: false
                  }
                }

                const document = [false]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'false',
                          id: '#/0',
                          name: '#/0',
                          value: 'false',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })

              /*
               *  Field incompatible?
               */
              xit('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
                const schema = {
                  type: 'array',
                  title: 'Checkboxes',
                  items: {
                    type: 'null',
                    const: null
                  }
                }

                const document = [null]

                const params = {
                  '#/': { meta: { component: 'checkboxes' } }
                }

                return expect(transform(schema, document, params))
                  .to.eql({
                    type: 'array',
                    component: 'checkboxes',
                    field: {
                      fieldset: {
                        legend: {
                          text: 'Checkboxes'
                        }
                      },
                      items: [
                        {
                          text: 'null',
                          id: '#/0',
                          name: '#/0',
                          value: 'null',
                          checked: true
                        }
                      ],
                      id: '#/'
                    }
                  })
              })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `boolean` type schemas With `enum`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  enum: [
                    true,
                    false
                  ]
                }

                const document = 1

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  anyOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Boolean (False)',
                          id: '#/1',
                          checked: true
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  oneOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Boolean (False)',
                          id: '#/1',
                          checked: true
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  allOf: [
                    { const: false }
                  ]
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  const: false
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `boolean` type schemas With `enum`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  enum: [
                    true,
                    false
                  ]
                }

                const document = 1

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  anyOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  oneOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  allOf: [
                    { const: false }
                  ]
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  const: false
                }

                const document = false

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })
            })
          })

          describe('Transforming `null` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `null` type schemas With `enum`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  enum: [
                    null
                  ]
                }

                const document = 0

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  anyOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: true
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  oneOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: true
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  allOf: [
                    { const: null }
                  ]
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('transforms `null` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  const: null
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `null` type schemas With `enum`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  enum: [
                    null
                  ]
                }

                const document = 0

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  anyOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  oneOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  allOf: [
                    { const: null }
                  ]
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  const: null
                }

                const document = null

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `select`')
              })
            })
          })
        })
      })

      describe('Without values', () => {
        describe('With params', () => {
          describe('Transforming `string` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `string` type schemas With `enum`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          value: '0',
                          checked: false
                        },
                        {
                          text: 'Two',
                          value: '1',
                          checked: false
                        },
                        {
                          text: 'Three',
                          value: '2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  anyOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          id: '#/0',
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          id: '#/1',
                          checked: false
                        },
                        {
                          value: '2',
                          text: 'Three',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  oneOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          id: '#/0',
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          id: '#/1',
                          checked: false
                        },
                        {
                          value: '2',
                          text: 'Three',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Radios',
                  description: 'A string schema',
                  minLength: 1,
                  const: 'string',
                  maxLength: 20
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `string` type schemas With `enum`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          value: '0',
                          selected: false
                        },
                        {
                          text: 'Two',
                          value: '1',
                          selected: false
                        },
                        {
                          text: 'Three',
                          value: '2',
                          selected: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  anyOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          selected: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          selected: false
                        },
                        {
                          value: '2',
                          text: 'Three',
                          selected: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `string` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  oneOf: [
                    { const: 'One', title: 'One' },
                    { const: 'Two', title: 'Two' },
                    { const: 'Three', title: 'Three' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                          text: 'One',
                          selected: false
                        },
                        {
                          value: '1',
                          text: 'Two',
                          selected: false
                        },
                        {
                          value: '2',
                          text: 'Three',
                          selected: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'string',
                  title: 'Select',
                  description: 'A string schema',
                  minLength: 1,
                  const: 'string',
                  maxLength: 20
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })
            })
          })

          describe('Transforming `number` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `number` type schemas With `enum`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `anyOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Number (2)',
                          id: '#/1',
                          checked: false
                        },
                        {
                          value: '2',
                          text: 'Number (3)',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `oneOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Number (2)',
                          id: '#/1',
                          checked: false
                        },
                        {
                          value: '2',
                          text: 'Number (3)',
                          id: '#/2',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'number',
                  title: 'Radios',
                  description: 'A number schema',
                  minLength: 1,
                  const: 2,
                  maxLength: 20
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `number` type schemas With `enum`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `anyOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `number` type schemas With `oneOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
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

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'number',
                  title: 'Select',
                  description: 'A number schema',
                  minimum: 1,
                  const: 2,
                  maximum: 3
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })
            })
          })

          describe('Transforming `array` type schemas', () => {
            it('transforms `array` type schemas With `enum` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                description: 'A string schema',
                items: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
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
                        text: 'One',
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        text: 'Two',
                        value: '1',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        text: 'Three',
                        value: '2',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
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
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        text: 'true',
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        text: 'false',
                        value: '1',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        text: 'null',
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        text: 'One',
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        text: 'Two',
                        value: '1',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        text: 'Three',
                        value: '2',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
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
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        text: 'true',
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        text: 'false',
                        value: '1',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  enum: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        text: 'null',
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }

                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'string',
                  anyOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  anyOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'string',
                  oneOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/0/2',
                        name: '#/0/2',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/0/1',
                        name: '#/0/1',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  oneOf: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    items: [
                      {
                        value: '0',
                        id: '#/0/0',
                        name: '#/0/0',
                        checked: false
                      }
                    ],
                    id: '#/'
                  }
                })
            })

            /*
             *
             */
            it('transforms `array` type schemas With `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'string',
                        value: 'string',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
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

              const document = [2]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: '2',
                        value: '2',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                ]
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'false',
                        value: 'false',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'null',
                        value: 'null',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }
              }

              const document = ['string']

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'string',
                        value: 'string',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: '2',
                        value: '2',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'false',
                        value: 'false',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'null',
                        value: 'null',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            /*
             *
             */
            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'string',
                    const: 'string',
                    minLength: 1,
                    maxLength: 20
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'string',
                        value: 'string',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'number',
                    minimum: 1,
                    const: 2,
                    maximum: 3
                  }
                ]
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: '2',
                        value: '2',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'boolean',
                    const: false
                  }
                ]
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'false',
                        value: 'false',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: [
                  {
                    type: 'null',
                    const: null
                  }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'null',
                        value: 'null',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'string',
                  const: 'string',
                  minLength: 1,
                  maxLength: 20
                }
              }

              const document = ['string']

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'string',
                        value: 'string',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'number',
                  minimum: 1,
                  const: 2,
                  maximum: 3
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: '2',
                        value: '2',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'boolean',
                  const: false
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'false',
                        value: 'false',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Checkboxes',
                items: {
                  type: 'null',
                  const: null
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'checkboxes' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'checkboxes',
                  field: {
                    fieldset: {
                      legend: {
                        text: 'Checkboxes'
                      }
                    },
                    id: '#/',
                    items: [
                      {
                        text: 'null',
                        value: 'null',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ]
                  }

                })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `boolean` type schemas With `enum`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  enum: [
                    true,
                    false
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  anyOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Boolean (False)',
                          id: '#/1',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  oneOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        },
                        {
                          value: '1',
                          text: 'Boolean (False)',
                          id: '#/1',
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  allOf: [
                    { const: true }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Radios',
                  description: 'A boolean schema',
                  const: true
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `boolean` type schemas With `enum`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  enum: [
                    true,
                    false
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  anyOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `boolean` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  oneOf: [
                    { const: true, title: 'Boolean (True)' },
                    { const: false, title: 'Boolean (False)' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  allOf: [
                    { const: true }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'boolean',
                  title: 'Select',
                  description: 'A boolean schema',
                  const: true
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })
            })
          })

          describe('Transforming `null` type schemas', () => {
            describe('To a `radios` component', () => {
              it('transforms `null` type schemas With `enum`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  enum: [
                    null
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  anyOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  oneOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(transform(schema, document, params))
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
                          checked: false
                        }
                      ],
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  allOf: [
                    { const: null }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })

              /*
               *  Schema incompatible with component `radios`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Radios',
                  description: 'A null schema',
                  const: null
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'radios' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throws('Schema incompatible with component `radios`')
              })
            })

            describe('To a `select` component', () => {
              it('transforms `null` type schemas With `enum`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  enum: [
                    null
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `anyOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  anyOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              it('transforms `null` type schemas With `oneOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  oneOf: [
                    { const: null, title: 'Null' }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(transform(schema, document, params))
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
                      id: '#/',
                      name: '#/'
                    }
                  })
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws With `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  allOf: [
                    { const: null }
                  ]
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
              })

              /*
               *  Schema incompatible with component `select`
               */
              it('throws Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
                const schema = {
                  type: 'null',
                  title: 'Select',
                  description: 'A null schema',
                  const: null
                }

                const document = undefined

                const params = {
                  '#/': { meta: { component: 'select' } }
                }

                return expect(() => transform(schema, document, params))
                  .to.throw('Schema incompatible with component `select`')
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
            it('transforms `string` type schemas With `enum`', () => {
              const schema = {
                type: 'string',
                enum: [
                  'One',
                  'Two',
                  'Three'
                ]
              }

              const document = 2

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  enum: {
                    items: [
                      {
                        text: 'One',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'Two',
                        value: '1',
                        selected: false
                      },
                      {
                        text: 'Three',
                        value: '2',
                        selected: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `anyOf`', () => {
              const schema = {
                type: 'string',
                anyOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              const document = 'Two'

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `oneOf`', () => {
              const schema = {
                type: 'string',
                oneOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              const document = 'Two'

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas With `allOf`', () => {
              const schema = {
                type: 'string',
                allOf: [
                  { const: 'string' },
                  { minLength: 1 },
                  { maxLength: 20 }
                ]
              }

              const document = 'string'

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  field: {
                    value: 'string',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'string'
              }

              const document = 'string'

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  field: {
                    value: 'string',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })

          describe('Transforming `number` type schemas', () => {
            it('transforms `number` type schemas With `enum`', () => {
              const schema = {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }

              const document = 2

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `anyOf`', () => {
              const schema = {
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              const document = 2

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `oneOf`', () => {
              const schema = {
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              const document = 2

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas With `allOf`', () => {
              const schema = {
                type: 'number',
                allOf: [
                  { minimum: 1 },
                  { const: 2 },
                  { maximum: 3 }
                ]
              }

              const document = 2

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  field: {
                    value: '2',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'number'
              }

              const document = 2

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  field: {
                    value: '2',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })

          describe('Transforming `array` type schemas', () => {
            it('transforms `array` type schemas With `enum` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                ]
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [1]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }

              const document = ['Two']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: true
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = ['Two']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  anyOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = ['Two']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = ['Two']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }

                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  oneOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = ['Two']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }

                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `array` type schemas With `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = ['string']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                ]
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }
              }

              const document = ['string']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'string' }
                ]
              }

              const document = ['string']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'number' }
                ]
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'boolean' }
                ]
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'null' }
                ]
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string'
                }
              }

              const document = ['string']

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number'
                }
              }

              const document = [2]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean'
                }
              }

              const document = [false]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null'
                }
              }

              const document = [null]

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })
          })

          describe('Transforming `object` type schemas', () => {
            it('transforms `object` type schemas With `enum` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                }
              }

              const document = { string: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: true
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { boolean: 1 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }
              }

              const document = { null: 0 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }
              }

              const document = { string: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/string/0',
                            name: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/string/1',
                            name: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/string/2',
                            name: '#/string/2',
                            checked: true
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/number/0',
                            name: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/number/1',
                            name: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/number/2',
                            name: '#/number/2',
                            checked: false
                          }
                        ],
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { boolean: false }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/boolean/0',
                            name: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/boolean/1',
                            name: '#/boolean/1',
                            checked: true
                          }
                        ],
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = { null: null }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  component: 'component',
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/null/0',
                            name: '#/null/0',
                            checked: true
                          }
                        ],
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }
              }

              const document = { string: 'Two' }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/string/0',
                            name: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/string/1',
                            name: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/string/2',
                            name: '#/string/2',
                            checked: false
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/number/0',
                            name: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/number/1',
                            name: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/number/2',
                            name: '#/number/2',
                            checked: false
                          }
                        ],
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { boolean: false }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/boolean/0',
                            name: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/boolean/1',
                            name: '#/boolean/1',
                            checked: true
                          }
                        ],
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = { null: null }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/null/0',
                            name: '#/null/0',
                            checked: true
                          }
                        ],
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `object` type schemas With `allOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { string: 'string' }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  boolean: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }
              }

              const document = { boolean: false }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = { null: null }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string'
                  }
                }
              }

              const document = { string: 'string' }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  number: {
                    type: 'number'
                  }
                }
              }

              const document = { number: 2 }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  boolean: {
                    type: 'boolean'
                  }
                }
              }

              const document = { boolean: false }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null'
                  }
                }
              }

              const document = { null: null }

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            it('transforms `boolean` type schemas With `enum`', () => {
              const schema = {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }

              const document = 1

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `boolean` type schemas With `anyOf`', () => {
              const schema = {
                type: 'boolean',
                anyOf: [
                  { const: true },
                  { const: false }
                ]
              }

              const document = false

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `boolean` type schemas With `oneOf`', () => {
              const schema = {
                type: 'boolean',
                oneOf: [
                  { const: true },
                  { const: false }
                ]
              }

              const document = false

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `boolean` type schemas With `allOf`', () => {
              const schema = {
                type: 'boolean',
                allOf: [
                  { const: false }
                ]
              }

              const document = false

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  field: {
                    value: 'false',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `boolean` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'boolean'
              }

              const document = false

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  field: {
                    value: 'false',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })

          describe('Transforming `null` type schemas', () => {
            it('transforms `null` type schemas With `enum`', () => {
              const schema = {
                type: 'null',
                enum: [
                  null
                ]
              }

              const document = 0

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `null` type schemas With `anyOf`', () => {
              const schema = {
                type: 'null',
                anyOf: [
                  { const: null }
                ]
              }

              const document = null

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `null` type schemas With `oneOf`', () => {
              const schema = {
                type: 'null',
                oneOf: [
                  { const: null }
                ]
              }

              const document = null

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `null` type schemas With `allOf`', () => {
              const schema = {
                type: 'null',
                allOf: [
                  { const: null }
                ]
              }

              const document = null

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  field: {
                    value: 'null',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `null` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'null'
              }

              const document = null

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  field: {
                    value: 'null',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })
        })

        describe('Without params', () => {
          describe('Transforming `string` type schemas', () => {
            it('transforms `string` type schemas With `enum`', () => {
              const schema = {
                type: 'string',
                enum: [
                  'One',
                  'Two',
                  'Three'
                ]
              }

              const document = 2

              return expect(transform(schema, document))
                .to.eql({
                  type: 'string',
                  enum: {
                    items: [
                      {
                        text: 'One',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'Two',
                        value: '1',
                        selected: false
                      },
                      {
                        text: 'Three',
                        value: '2',
                        selected: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `anyOf`', () => {
              const schema = {
                type: 'string',
                anyOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              const document = 'Two'

              return expect(transform(schema, document))
                .to.eql({
                  type: 'string',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `oneOf`', () => {
              const schema = {
                type: 'string',
                oneOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              const document = 'Two'

              return expect(transform(schema, document))
                .to.eql({
                  type: 'string',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas With `allOf`', () => {
              const schema = {
                type: 'string',
                allOf: [
                  { const: 'string' },
                  { minLength: 1 },
                  { maxLength: 20 }
                ]
              }

              const document = 'string'

              return expect(transform(schema, document))
                .to.eql({
                  type: 'string',
                  field: {
                    value: 'string',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'string'
              }

              const document = 'string'

              return expect(transform(schema, document))
                .to.eql({
                  type: 'string',
                  field: {
                    value: 'string',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })

          describe('Transforming `number` type schemas', () => {
            it('transforms `number` type schemas With `enum`', () => {
              const schema = {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }

              const document = 2

              return expect(transform(schema, document))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `anyOf`', () => {
              const schema = {
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              const document = 2

              return expect(transform(schema, document))
                .to.eql({
                  type: 'number',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `oneOf`', () => {
              const schema = {
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              const document = 2

              return expect(transform(schema, document))
                .to.eql({
                  type: 'number',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas With `allOf`', () => {
              const schema = {
                type: 'number',
                allOf: [
                  { minimum: 1 },
                  { const: 2 },
                  { maximum: 3 }
                ]
              }

              const document = 2

              return expect(transform(schema, document))
                .to.eql({
                  type: 'number',
                  field: {
                    value: '2',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'number'
              }

              const document = 2

              return expect(transform(schema, document))
                .to.eql({
                  type: 'number',
                  field: {
                    value: '2',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })

          describe('Transforming `array` type schemas', () => {
            it('transforms `array` type schemas With `enum` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                ]
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [1]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                ]
              }

              const document = [0]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              }

              const document = [1]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }

              const document = [0]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = ['Two']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  anyOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = ['Two']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = ['Two']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  oneOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = ['Two']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: true
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `array` type schemas With `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = ['string']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                ]
              }

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }
              }

              const document = ['string']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }
              }

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'string' }
                ]
              }

              const document = ['string']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'number' }
                ]
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'boolean' }
                ]
              }

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'null' }
                ]
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string'
                }
              }

              const document = ['string']

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number'
                }
              }

              const document = [2]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean'
                }
              }

              const document = [false]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null'
                }
              }

              const document = [null]

              return expect(transform(schema, document))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })
          })

          describe('Transforming `object` type schemas', () => {
            it('transforms `object` type schemas With `enum` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                }
              }

              const document = { string: 2 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: true
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { boolean: 1 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }
              }

              const document = { null: 0 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }
              }

              const document = { string: 'Two' }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/string/0',
                            name: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/string/1',
                            name: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/string/2',
                            name: '#/string/2',
                            checked: false
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/number/0',
                            name: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/number/1',
                            name: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/number/2',
                            name: '#/number/2',
                            checked: false
                          }
                        ],
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { boolean: false }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/boolean/0',
                            name: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/boolean/1',
                            name: '#/boolean/1',
                            checked: true
                          }
                        ],
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = { null: null }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/null/0',
                            name: '#/null/0',
                            checked: true
                          }
                        ],
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }
              }

              const document = { string: 'Two' }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/string/0',
                            name: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/string/1',
                            name: '#/string/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/string/2',
                            name: '#/string/2',
                            checked: false
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/number/0',
                            name: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/number/1',
                            name: '#/number/1',
                            checked: true
                          },
                          {
                            value: '2',
                            id: '#/number/2',
                            name: '#/number/2',
                            checked: false
                          }
                        ],
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { boolean: false }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/boolean/0',
                            name: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/boolean/1',
                            name: '#/boolean/1',
                            checked: true
                          }
                        ],
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = { null: null }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/null/0',
                            name: '#/null/0',
                            checked: true
                          }
                        ],
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `object` type schemas With `allOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { string: 'string' }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = { number: 2 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  boolean: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }
              }

              const document = { boolean: false }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = { null: null }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string'
                  }
                }
              }

              const document = { string: 'string' }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  number: {
                    type: 'number'
                  }
                }
              }

              const document = { number: 2 }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  boolean: {
                    type: 'boolean'
                  }
                }
              }

              const document = { boolean: false }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null'
                  }
                }
              }

              const document = { null: null }

              return expect(transform(schema, document))
                .to.eql({
                  type: 'object',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            it('transforms `boolean` type schemas With `enum`', () => {
              const schema = {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }

              const document = 1

              return expect(transform(schema, document))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `boolean` type schemas With `anyOf`', () => {
              const schema = {
                type: 'boolean',
                anyOf: [
                  { const: true },
                  { const: false }
                ]
              }

              const document = false

              return expect(transform(schema, document))
                .to.eql({
                  type: 'boolean',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `boolean` type schemas With `oneOf`', () => {
              const schema = {
                type: 'boolean',
                oneOf: [
                  { const: true },
                  { const: false }
                ]
              }

              const document = false

              return expect(transform(schema, document))
                .to.eql({
                  type: 'boolean',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `boolean` type schemas With `allOf`', () => {
              const schema = {
                type: 'boolean',
                allOf: [
                  { const: false }
                ]
              }

              const document = false

              return expect(transform(schema, document))
                .to.eql({
                  type: 'boolean',
                  field: {
                    value: 'false',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `boolean` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'boolean'
              }

              const document = false

              return expect(transform(schema, document))
                .to.eql({
                  type: 'boolean',
                  field: {
                    value: 'false',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })

          describe('Transforming `null` type schemas', () => {
            it('transforms `null` type schemas With `enum`', () => {
              const schema = {
                type: 'null',
                enum: [
                  null
                ]
              }

              const document = 0

              return expect(transform(schema, document))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `null` type schemas With `anyOf`', () => {
              const schema = {
                type: 'null',
                anyOf: [
                  { const: null }
                ]
              }

              const document = null

              return expect(transform(schema, document))
                .to.eql({
                  type: 'null',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `null` type schemas With `oneOf`', () => {
              const schema = {
                type: 'null',
                oneOf: [
                  { const: null }
                ]
              }

              const document = null

              return expect(transform(schema, document))
                .to.eql({
                  type: 'null',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: true
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `null` type schemas With `allOf`', () => {
              const schema = {
                type: 'null',
                allOf: [
                  { const: null }
                ]
              }

              const document = null

              return expect(transform(schema, document))
                .to.eql({
                  type: 'null',
                  field: {
                    value: 'null',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `null` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'null'
              }

              const document = null

              return expect(transform(schema, document))
                .to.eql({
                  type: 'null',
                  field: {
                    value: 'null',
                    id: '#/',
                    name: '#/'
                  }
                })
            })
          })
        })
      })

      describe('Without values', () => {
        describe('With params', () => {
          describe('Transforming `string` type schemas', () => {
            it('transforms `string` type schemas With `enum`', () => {
              const schema = {
                type: 'string',
                enum: [
                  'One',
                  'Two',
                  'Three'
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  enum: {
                    items: [
                      {
                        text: 'One',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'Two',
                        value: '1',
                        selected: false
                      },
                      {
                        text: 'Three',
                        value: '2',
                        selected: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `anyOf`', () => {
              const schema = {
                type: 'string',
                anyOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `oneOf`', () => {
              const schema = {
                type: 'string',
                oneOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas With `allOf`', () => {
              const schema = {
                type: 'string',
                allOf: [
                  { const: 'string' },
                  { minLength: 1 },
                  { maxLength: 20 }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'string',
                  component: 'component',
                  field: {
                    value: 'string',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'string'
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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

          describe('Transforming `number` type schemas', () => {
            it('transforms `number` type schemas With `enum`', () => {
              const schema = {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `anyOf`', () => {
              const schema = {
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `oneOf`', () => {
              const schema = {
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas With `allOf`', () => {
              const schema = {
                type: 'number',
                allOf: [
                  { minimum: 1 },
                  { const: 2 },
                  { maximum: 3 }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'number',
                  component: 'component',
                  field: {
                    value: '2',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'number'
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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

          describe('Transforming `array` type schemas', () => {
            it('transforms `array` type schemas With `enum` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  anyOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }

                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  oneOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }

                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `array` type schemas With `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'string' }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'number' }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'boolean' }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  { type: 'null' }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string'
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number'
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean'
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null'
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'array',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        name: '#/0',
                        id: '#/0'
                      }
                    }
                  ]
                })
            })
          })

          describe('Transforming `object` type schemas', () => {
            it('transforms `object` type schemas With `enum` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: false
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `enum` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
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
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/string/0',
                            name: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/string/1',
                            name: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/string/2',
                            name: '#/string/2',
                            checked: false
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/number/0',
                            name: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/number/1',
                            name: '#/number/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/number/2',
                            name: '#/number/2',
                            checked: false
                          }
                        ],
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/boolean/0',
                            name: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/boolean/1',
                            name: '#/boolean/1',
                            checked: false
                          }
                        ],
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `anyOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/null/0',
                            name: '#/null/0',
                            checked: false
                          }
                        ],
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/string/0',
                            name: '#/string/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/string/1',
                            name: '#/string/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/string/2',
                            name: '#/string/2',
                            checked: false
                          }
                        ],
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/number/0',
                            name: '#/number/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/number/1',
                            name: '#/number/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/number/2',
                            name: '#/number/2',
                            checked: false
                          }
                        ],
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/boolean/0',
                            name: '#/boolean/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/boolean/1',
                            name: '#/boolean/1',
                            checked: false
                          }
                        ],
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `oneOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/null/0',
                            name: '#/null/0',
                            checked: false
                          }
                        ],
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `object` type schemas With `allOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/string',
                        name: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
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

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/number',
                        name: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  boolean: {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/boolean',
                        name: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas With `allOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/null',
                        name: '#/null'
                      }
                    }
                  ]
                })
            })

            /*
             *  Group - Input
             */
            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `string` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  string: {
                    type: 'string'
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        name: '#/string',
                        id: '#/string'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `number` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  number: {
                    type: 'number'
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        name: '#/number',
                        id: '#/number'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `boolean` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  boolean: {
                    type: 'boolean'
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        name: '#/boolean',
                        id: '#/boolean'
                      }
                    }
                  ]
                })
            })

            it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `null` type)', () => {
              const schema = {
                type: 'object',
                title: 'Object',
                properties: {
                  null: {
                    type: 'null'
                  }
                }
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'object',
                  component: 'component',
                  group: {
                    legend: {
                      text: 'Object'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        name: '#/null',
                        id: '#/null'
                      }
                    }
                  ]
                })
            })
          })

          describe('Transforming `boolean` type schemas', () => {
            it('transforms `boolean` type schemas With `enum`', () => {
              const schema = {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `boolean` type schemas With `anyOf`', () => {
              const schema = {
                type: 'boolean',
                anyOf: [
                  { const: true },
                  { const: false }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `boolean` type schemas With `oneOf`', () => {
              const schema = {
                type: 'boolean',
                oneOf: [
                  { const: true },
                  { const: false }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `boolean` type schemas With `allOf`', () => {
              const schema = {
                type: 'boolean',
                allOf: [
                  { const: false }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'boolean',
                  component: 'component',
                  field: {
                    value: 'false',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `boolean` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'boolean'
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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

          describe('Transforming `null` type schemas', () => {
            it('transforms `null` type schemas With `enum`', () => {
              const schema = {
                type: 'null',
                enum: [
                  null
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `null` type schemas With `anyOf`', () => {
              const schema = {
                type: 'null',
                anyOf: [
                  { const: null }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `null` type schemas With `oneOf`', () => {
              const schema = {
                type: 'null',
                oneOf: [
                  { const: null }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `null` type schemas With `allOf`', () => {
              const schema = {
                type: 'null',
                allOf: [
                  { const: null }
                ]
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
                .to.eql({
                  type: 'null',
                  component: 'component',
                  field: {
                    value: 'null',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `null` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'null'
              }

              const document = undefined

              const params = {
                '#/': { meta: { component: 'component' } }
              }

              return expect(transform(schema, document, params))
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

        describe('Without params', () => {
          describe('Transforming `string` type schemas', () => {
            it('transforms `string` type schemas With `enum`', () => {
              const schema = {
                type: 'string',
                enum: [
                  'One',
                  'Two',
                  'Three'
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  enum: {
                    items: [
                      {
                        text: 'One',
                        value: '0',
                        selected: false
                      },
                      {
                        text: 'Two',
                        value: '1',
                        selected: false
                      },
                      {
                        text: 'Three',
                        value: '2',
                        selected: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `anyOf`', () => {
              const schema = {
                type: 'string',
                anyOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `string` type schemas With `oneOf`', () => {
              const schema = {
                type: 'string',
                oneOf: [
                  { const: 'One' },
                  { const: 'Two' },
                  { const: 'Three' }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas With `allOf`', () => {
              const schema = {
                type: 'string',
                allOf: [
                  { const: 'string' },
                  { minLength: 1 },
                  { maxLength: 20 }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'string',
                  field: {
                    value: 'string',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `string` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'string'
              }

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

          describe('Transforming `number` type schemas', () => {
            it('transforms `number` type schemas With `enum`', () => {
              const schema = {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }

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
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `anyOf`', () => {
              const schema = {
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  anyOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            it('transforms `number` type schemas With `oneOf`', () => {
              const schema = {
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  oneOf: {
                    items: [
                      {
                        value: '0',
                        id: '#/0',
                        name: '#/0',
                        checked: false
                      },
                      {
                        value: '1',
                        id: '#/1',
                        name: '#/1',
                        checked: false
                      },
                      {
                        value: '2',
                        id: '#/2',
                        name: '#/2',
                        checked: false
                      }
                    ],
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas With `allOf`', () => {
              const schema = {
                type: 'number',
                allOf: [
                  { minimum: 1 },
                  { const: 2 },
                  { maximum: 3 }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'number',
                  field: {
                    value: '2',
                    id: '#/',
                    name: '#/'
                  }
                })
            })

            /*
             *  Input
             */
            it('transforms `number` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
              const schema = {
                type: 'number'
              }

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

          describe('Transforming `array` type schemas', () => {
            it('transforms `array` type schemas With `enum` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'One',
                      'Two',
                      'Three'
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      enum: {
                        items: [
                          {
                            text: 'One',
                            value: '0',
                            selected: false
                          },
                          {
                            text: 'Two',
                            value: '1',
                            selected: false
                          },
                          {
                            text: 'Three',
                            value: '2',
                            selected: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `enum` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
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
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    anyOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  anyOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `anyOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      anyOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'string',
                    oneOf: [
                      { const: 'One' },
                      { const: 'Two' },
                      { const: 'Three' }
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }

                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  oneOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          },
                          {
                            value: '2',
                            id: '#/0/2',
                            name: '#/0/2',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          },
                          {
                            value: '1',
                            id: '#/0/1',
                            name: '#/0/1',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `oneOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      oneOf: {
                        items: [
                          {
                            value: '0',
                            id: '#/0/0',
                            name: '#/0/0',
                            checked: false
                          }
                        ],
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            /*
             *  Input
             */
            it('transforms `array` type schemas With `allOf` (`items` is an array of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
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

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'boolean',
                    allOf: [
                      { const: false }
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an array of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: [
                  {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `string` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'string',
                  allOf: [
                    { const: 'string' },
                    { minLength: 1 },
                    { maxLength: 20 }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'string',
                      field: {
                        value: 'string',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `number` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { const: 2 },
                    { maximum: 3 }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'number',
                      field: {
                        value: '2',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `boolean` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'boolean',
                      field: {
                        value: 'false',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })

            it('transforms `array` type schemas With `allOf` (`items` is an object of `null` type)', () => {
              const schema = {
                type: 'array',
                title: 'Array',
                items: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }

              return expect(transform(schema))
                .to.eql({
                  type: 'array',
                  group: {
                    legend: {
                      text: 'Array'
                    }
                  },
                  fields: [
                    {
                      type: 'null',
                      field: {
                        value: 'null',
                        id: '#/0',
                        name: '#/0'
                      }
                    }
                  ]
                })
            })
          })

          /*
           *  Input
           */
          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: [
                { type: 'string' }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: [
                { type: 'number' }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'number',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: [
                { type: 'boolean' }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'boolean',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: [
                { type: 'null' }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'null',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: {
                type: 'string'
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: {
                type: 'number'
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'number',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: {
                type: 'boolean'
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'boolean',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })

          it('transforms `array` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
            const schema = {
              type: 'array',
              title: 'Array',
              items: {
                type: 'null'
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'array',
                group: {
                  legend: {
                    text: 'Array'
                  }
                },
                fields: [
                  {
                    type: 'null',
                    field: {
                      name: '#/0',
                      id: '#/0'
                    }
                  }
                ]
              })
          })
        })

        describe('Transforming `object` type schemas', () => {
          it('transforms `object` type schemas With `enum` (`properties` has `string` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                string: {
                  type: 'string',
                  enum: [
                    'One',
                    'Two',
                    'Three'
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    enum: {
                      items: [
                        {
                          text: 'One',
                          value: '0',
                          selected: false
                        },
                        {
                          text: 'Two',
                          value: '1',
                          selected: false
                        },
                        {
                          text: 'Three',
                          value: '2',
                          selected: false
                        }
                      ],
                      id: '#/string',
                      name: '#/string'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `enum` (`properties` has `number` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
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
                      id: '#/number',
                      name: '#/number'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `enum` (`properties` has `boolean` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
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
                      id: '#/boolean',
                      name: '#/boolean'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `enum` (`properties` has `null` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                null: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
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
                      id: '#/null',
                      name: '#/null'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `anyOf` (`properties` has `string` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                string: {
                  type: 'string',
                  anyOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    anyOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/string/0',
                          name: '#/string/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/string/1',
                          name: '#/string/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/string/2',
                          name: '#/string/2',
                          checked: false
                        }
                      ],
                      id: '#/string',
                      name: '#/string'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `anyOf` (`properties` has `number` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'number',
                    anyOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/number/0',
                          name: '#/number/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/number/1',
                          name: '#/number/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/number/2',
                          name: '#/number/2',
                          checked: false
                        }
                      ],
                      id: '#/number',
                      name: '#/number'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `anyOf` (`properties` has `boolean` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'boolean',
                    anyOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/boolean/0',
                          name: '#/boolean/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/boolean/1',
                          name: '#/boolean/1',
                          checked: false
                        }
                      ],
                      id: '#/boolean',
                      name: '#/boolean'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `anyOf` (`properties` has `null` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                null: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'null',
                    anyOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/null/0',
                          name: '#/null/0',
                          checked: false
                        }
                      ],
                      id: '#/null',
                      name: '#/null'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `oneOf` (`properties` has `string` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                string: {
                  type: 'string',
                  oneOf: [
                    { const: 'One' },
                    { const: 'Two' },
                    { const: 'Three' }
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    oneOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/string/0',
                          name: '#/string/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/string/1',
                          name: '#/string/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/string/2',
                          name: '#/string/2',
                          checked: false
                        }
                      ],
                      id: '#/string',
                      name: '#/string'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `oneOf` (`properties` has `number` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'number',
                    oneOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/number/0',
                          name: '#/number/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/number/1',
                          name: '#/number/1',
                          checked: false
                        },
                        {
                          value: '2',
                          id: '#/number/2',
                          name: '#/number/2',
                          checked: false
                        }
                      ],
                      id: '#/number',
                      name: '#/number'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `oneOf` (`properties` has `boolean` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'boolean',
                    oneOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/boolean/0',
                          name: '#/boolean/0',
                          checked: false
                        },
                        {
                          value: '1',
                          id: '#/boolean/1',
                          name: '#/boolean/1',
                          checked: false
                        }
                      ],
                      id: '#/boolean',
                      name: '#/boolean'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `oneOf` (`properties` has `null` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                null: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'null',
                    oneOf: {
                      items: [
                        {
                          value: '0',
                          id: '#/null/0',
                          name: '#/null/0',
                          checked: false
                        }
                      ],
                      id: '#/null',
                      name: '#/null'
                    }
                  }
                ]
              })
          })

          /*
           *  Input
           */
          it('transforms `object` type schemas With `allOf` (`properties` has `string` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    field: {
                      value: 'string',
                      id: '#/string',
                      name: '#/string'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `allOf` (`properties` has `number` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
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

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'number',
                    field: {
                      value: '2',
                      id: '#/number',
                      name: '#/number'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `allOf` (`properties` has `boolean` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                boolean: {
                  type: 'boolean',
                  allOf: [
                    { const: false }
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'boolean',
                    field: {
                      value: 'false',
                      id: '#/boolean',
                      name: '#/boolean'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas With `allOf` (`properties` has `null` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                null: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'null',
                    field: {
                      value: 'null',
                      id: '#/null',
                      name: '#/null'
                    }
                  }
                ]
              })
          })

          /*
           *  Input
           */
          it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `string` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                string: {
                  type: 'string'
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'string',
                    field: {
                      name: '#/string',
                      id: '#/string'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `number` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                number: {
                  type: 'number'
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'number',
                    field: {
                      name: '#/number',
                      id: '#/number'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `boolean` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                boolean: {
                  type: 'boolean'
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'boolean',
                    field: {
                      name: '#/boolean',
                      id: '#/boolean'
                    }
                  }
                ]
              })
          })

          it('transforms `object` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf` (`properties` has `null` type)', () => {
            const schema = {
              type: 'object',
              title: 'Object',
              properties: {
                null: {
                  type: 'null'
                }
              }
            }

            return expect(transform(schema))
              .to.eql({
                type: 'object',
                group: {
                  legend: {
                    text: 'Object'
                  }
                },
                fields: [
                  {
                    type: 'null',
                    field: {
                      name: '#/null',
                      id: '#/null'
                    }
                  }
                ]
              })
          })
        })

        describe('Transforming `boolean` type schemas', () => {
          it('transforms `boolean` type schemas With `enum`', () => {
            const schema = {
              type: 'boolean',
              enum: [
                true,
                false
              ]
            }

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
                  id: '#/',
                  name: '#/'
                }
              })
          })

          it('transforms `boolean` type schemas With `anyOf`', () => {
            const schema = {
              type: 'boolean',
              anyOf: [
                { const: true },
                { const: false }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'boolean',
                anyOf: {
                  items: [
                    {
                      value: '0',
                      id: '#/0',
                      name: '#/0',
                      checked: false
                    },
                    {
                      value: '1',
                      id: '#/1',
                      name: '#/1',
                      checked: false
                    }
                  ],
                  id: '#/',
                  name: '#/'
                }
              })
          })

          it('transforms `boolean` type schemas With `oneOf`', () => {
            const schema = {
              type: 'boolean',
              oneOf: [
                { const: true },
                { const: false }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'boolean',
                oneOf: {
                  items: [
                    {
                      value: '0',
                      id: '#/0',
                      name: '#/0',
                      checked: false
                    },
                    {
                      value: '1',
                      id: '#/1',
                      name: '#/1',
                      checked: false
                    }
                  ],
                  id: '#/',
                  name: '#/'
                }
              })
          })

          /*
             *  Input
             */
          it('transforms `boolean` type schemas With `allOf`', () => {
            const schema = {
              type: 'boolean',
              allOf: [
                { const: false }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'boolean',
                field: {
                  value: 'false',
                  id: '#/',
                  name: '#/'
                }
              })
          })

          /*
             *  Input
             */
          it('transforms `boolean` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            const schema = {
              type: 'boolean'
            }

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

        describe('Transforming `null` type schemas', () => {
          it('transforms `null` type schemas With `enum`', () => {
            const schema = {
              type: 'null',
              enum: [
                null
              ]
            }

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
                  id: '#/',
                  name: '#/'
                }
              })
          })

          it('transforms `null` type schemas With `anyOf`', () => {
            const schema = {
              type: 'null',
              anyOf: [
                { const: null }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'null',
                anyOf: {
                  items: [
                    {
                      value: '0',
                      id: '#/0',
                      name: '#/0',
                      checked: false
                    }
                  ],
                  id: '#/',
                  name: '#/'
                }
              })
          })

          it('transforms `null` type schemas With `oneOf`', () => {
            const schema = {
              type: 'null',
              oneOf: [
                { const: null }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'null',
                oneOf: {
                  items: [
                    {
                      value: '0',
                      id: '#/0',
                      name: '#/0',
                      checked: false
                    }
                  ],
                  id: '#/',
                  name: '#/'
                }
              })
          })

          /*
           *  Input
           */
          it('transforms `null` type schemas With `allOf`', () => {
            const schema = {
              type: 'null',
              allOf: [
                { const: null }
              ]
            }

            return expect(transform(schema))
              .to.eql({
                type: 'null',
                field: {
                  value: 'null',
                  id: '#/',
                  name: '#/'
                }
              })
          })

          /*
           *  Input
           */
          it('transforms `null` type schemas Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
            const schema = {
              type: 'null'
            }

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
