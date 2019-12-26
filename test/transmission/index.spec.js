import { expect } from 'chai'

import transform, {
  getTitle,
  getDescription,
  getIsReadOnly,
  getIsWriteOnly,
  getDefaultValue,
  getMin,
  getMax,
  getMinLength,
  getMaxLength,
  getMinItems,
  getMaxItems,
  getHasUniqueItems,
  getMinContains,
  getMaxContains,
  getMinProperties,
  getMaxProperties,
  getIsExclusiveMin,
  getIsExclusiveMax,
  getPattern,
  getStep
} from 'shinkansen-transmission/transmission'

describe('shinkansen-transmission/transmission', () => {
  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })

  describe('`getTitle`', () => {
    it('is a function', () => {
      expect(getTitle)
        .to.be.a('function')
    })
  })

  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })

  describe('`getIsReadOnly`', () => {
    it('is a function', () => {
      expect(getIsReadOnly)
        .to.be.a('function')
    })
  })

  describe('`getIsWriteOnly`', () => {
    it('is a function', () => {
      expect(getIsWriteOnly)
        .to.be.a('function')
    })
  })

  describe('`getDefaultValue`', () => {
    it('is a function', () => {
      expect(getDefaultValue)
        .to.be.a('function')
    })
  })

  describe('`getMin`', () => {
    it('is a function', () => {
      expect(getMin)
        .to.be.a('function')
    })
  })

  describe('`getMax`', () => {
    it('is a function', () => {
      expect(getMax)
        .to.be.a('function')
    })
  })

  describe('`getIsExclusiveMin`', () => {
    it('is a function', () => {
      expect(getIsExclusiveMin)
        .to.be.a('function')
    })
  })

  describe('`getIsExclusiveMax`', () => {
    it('is a function', () => {
      expect(getIsExclusiveMax)
        .to.be.a('function')
    })
  })

  describe('`getPattern`', () => {
    it('is a function', () => {
      expect(getPattern)
        .to.be.a('function')
    })
  })

  describe('`getStep`', () => {
    it('is a function', () => {
      expect(getStep)
        .to.be.a('function')
    })
  })

  it('transforms', () => {
    const schema = {
      $id: 'https://example.com/geographical-location.schema.json',
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'Latitude and Longitude',
      description: 'A geographical coordinate',
      required: ['latitude', 'longitude'],
      type: 'object',
      properties: {
        stringTypeSubSchema: {
          title: 'String type sub schema',
          type: 'string',
          minLength: 1,
          maxLength: 10
        },
        numberTypeSubSchema: {
          title: 'Number type sub schema',
          type: 'string',
          min: 1,
          max: 10
        },
        arrayTypeSubSchema: {
          title: 'Array type sub schema',
          type: 'array',
          items: [
            { type: 'string' }
          ]
        },
        objectTypeSubSchema: {
          title: 'Object type sub schema',
          type: 'object',
          properties: {
            one: { type: 'string' },
            two: { type: 'number' }
          }
        },
        booleanTypeScubSchema: {
          title: 'Boolean type sub schema',
          type: 'boolean'
        },
        nullTypeSubSchema: {
          title: 'Null type sub schema',
          type: 'null'
        },
        latitude: {
          title: 'Latitude',
          type: 'number',
          minimum: -90,
          maximum: 90,
          multipleOf: 42.0
        },
        longitude: {
          title: 'Longitude',
          type: 'number',
          minimum: -180,
          maximum: 180,
          exclusiveMinimum: true,
          exclusiveMaximum: true
        }
      }
    }

    return expect(transform(schema))
      .to.eql({
        elements: {
          description: 'A geographical coordinate',
          fields: [
            {
              elements: {
                field: {
                  maxLength: 10,
                  minLength: 1,
                  name: 'stringTypeSubSchema',
                  required: false,
                  type: 'string'
                },
                title: 'String type sub schema'
              },
              meta: {
                maxLength: 10,
                minLength: 1,
                name: 'stringTypeSubSchema',
                required: false,
                rootSchema: schema,
                schema: {
                  maxLength: 10,
                  minLength: 1,
                  title: 'String type sub schema',
                  type: 'string'
                },
                type: 'string'
              }
            },
            {
              elements: {
                field: {
                  name: 'numberTypeSubSchema',
                  required: false,
                  type: 'string'
                },
                title: 'Number type sub schema'
              },
              meta: {
                name: 'numberTypeSubSchema',
                required: false,
                rootSchema: schema,
                schema: {
                  max: 10,
                  min: 1,
                  title: 'Number type sub schema',
                  type: 'string'
                },
                type: 'string'
              }
            },
            {
              elements: {
                fields: [
                  {
                    elements: {
                      field: {
                        required: false,
                        type: 'string'
                      }
                    },
                    meta: {
                      arrayName: 'arrayTypeSubSchema',
                      required: false,
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      type: 'string'
                    }
                  }
                ],
                title: 'Array type sub schema'
              },
              meta: {
                name: 'arrayTypeSubSchema',
                required: false,
                rootSchema: schema,
                schema: {
                  items: [
                    {
                      type: 'string'
                    }
                  ],
                  title: 'Array type sub schema',
                  type: 'array'
                },
                type: 'array'
              }
            },
            {
              elements: {
                fields: [
                  {
                    elements: {
                      field: {
                        name: 'one',
                        required: false,
                        type: 'string'
                      }
                    },
                    meta: {
                      name: 'one',
                      required: false,
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      type: 'string'
                    }
                  },
                  {
                    elements: {
                      field: {
                        name: 'two',
                        required: false,
                        type: 'number'
                      }
                    },
                    meta: {
                      name: 'two',
                      required: false,
                      rootSchema: schema,
                      schema: {
                        type: 'number'
                      },
                      type: 'number'
                    }
                  }
                ],
                title: 'Object type sub schema'
              },
              meta: {
                name: 'objectTypeSubSchema',
                required: false,
                rootSchema: schema,
                schema: {
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'number' }
                  },
                  title: 'Object type sub schema',
                  type: 'object'
                },
                type: 'object'
              }
            },
            {
              elements: {
                field: {
                  name: 'booleanTypeScubSchema',
                  required: false,
                  type: 'boolean'
                },
                title: 'Boolean type sub schema'
              },
              meta: {
                name: 'booleanTypeScubSchema',
                required: false,
                rootSchema: schema,
                schema: {
                  title: 'Boolean type sub schema',
                  type: 'boolean'
                },
                type: 'boolean'
              }
            },
            {
              elements: {
                field: {
                  name: 'nullTypeSubSchema',
                  required: false,
                  type: 'null'
                },
                title: 'Null type sub schema'
              },
              meta: {
                name: 'nullTypeSubSchema',
                required: false,
                rootSchema: schema,
                schema: {
                  title: 'Null type sub schema',
                  type: 'null'
                },
                type: 'null'
              }
            },
            {
              elements: {
                field: {
                  max: 90,
                  min: -90,
                  name: 'latitude',
                  required: true,
                  step: 42,
                  type: 'number'
                },
                title: 'Latitude'
              },
              meta: {
                max: 90,
                min: -90,
                name: 'latitude',
                required: true,
                rootSchema: schema,
                schema: {
                  maximum: 90,
                  minimum: -90,
                  multipleOf: 42,
                  title: 'Latitude',
                  type: 'number'
                },
                step: 42,
                type: 'number'
              }
            },
            {
              elements: {
                field: {
                  max: 180,
                  min: -180,
                  name: 'longitude',
                  required: true,
                  type: 'number'
                },
                title: 'Longitude'
              },
              meta: {
                isExclusiveMax: true,
                isExclusiveMin: true,
                max: 180,
                min: -180,
                name: 'longitude',
                required: true,
                rootSchema: schema,
                schema: {
                  exclusiveMaximum: true,
                  exclusiveMinimum: true,
                  maximum: 180,
                  minimum: -180,
                  title: 'Longitude',
                  type: 'number'
                },
                type: 'number'
              }
            }
          ],
          title: 'Latitude and Longitude'
        },
        meta: {
          schema: {
            $id: 'https://example.com/geographical-location.schema.json',
            $schema: 'http://json-schema.org/draft-07/schema#',
            description: 'A geographical coordinate',
            properties: {
              arrayTypeSubSchema: {
                items: [
                  {
                    type: 'string'
                  }
                ],
                title: 'Array type sub schema',
                type: 'array'
              },
              booleanTypeScubSchema: {
                title: 'Boolean type sub schema',
                type: 'boolean'
              },
              latitude: {
                maximum: 90,
                minimum: -90,
                multipleOf: 42,
                title: 'Latitude',
                type: 'number'
              },
              longitude: {
                exclusiveMaximum: true,
                exclusiveMinimum: true,
                maximum: 180,
                minimum: -180,
                title: 'Longitude',
                type: 'number'
              },
              nullTypeSubSchema: {
                title: 'Null type sub schema',
                type: 'null'
              },
              numberTypeSubSchema: {
                max: 10,
                min: 1,
                title: 'Number type sub schema',
                type: 'string'
              },
              objectTypeSubSchema: {
                properties: {
                  one: {
                    type: 'string'
                  },
                  two: {
                    type: 'number'
                  }
                },
                title: 'Object type sub schema',
                type: 'object'
              },
              stringTypeSubSchema: {
                maxLength: 10,
                minLength: 1,
                title: 'String type sub schema',
                type: 'string'
              }
            },
            required: [
              'latitude',
              'longitude'
            ],
            title: 'Latitude and Longitude',
            type: 'object'
          },
          type: 'object'
        }
      })
  })

  it('transforms `number` schemas', () => {
    const schema = { type: 'number' }

    return expect(transform(schema))
      .to.eql({
        meta: {
          type: 'number',
          schema
        },
        elements: {
          field: {
            type: 'number'
          }
        }
      })
  })

  it('transforms `string` schemas', () => {
    const schema = { type: 'string' }

    return expect(transform(schema))
      .to.eql({
        meta: {
          type: 'string',
          schema
        },
        elements: {
          field: {
            type: 'string'
          }
        }
      })
  })

  describe('Transforming `array` schemas', () => {
    describe('With `items`', () => {
      it('transforms `array` schemas (`items` is type `number`)', () => {
        const schema = {
          type: 'array',
          items: [
            {
              type: 'number'
            }
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'number',
                    schema: {
                      type: 'number'
                    },
                    rootSchema: schema
                  },
                  elements: {
                    field: {
                      required: false,
                      type: 'number'
                    }
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `string`)', () => {
        const schema = {
          type: 'array',
          items: [
            {
              type: 'string'
            }
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'string',
                    schema: {
                      type: 'string'
                    },
                    rootSchema: schema
                  },
                  elements: {
                    field: {
                      required: false,
                      type: 'string'
                    }
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `array`)', () => {
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array'
            }
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'array',
                    schema: {
                      type: 'array'
                    },
                    rootSchema: schema
                  },
                  elements: {
                    fields: []
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `object`)', () => {
        const schema = {
          type: 'array',
          items: [
            {
              type: 'object'
            }
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'object',
                    schema: {
                      type: 'object'
                    },
                    rootSchema: schema
                  },
                  elements: {
                    fields: []
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
        const schema = {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            }
          }
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'object',
                    schema: {
                      type: 'object',
                      properties: {
                        one: { type: 'string' },
                        two: { type: 'string' }
                      }
                    },
                    rootSchema: schema
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: { type: 'string' },
                          rootSchema: schema
                        },
                        elements: {
                          field: {
                            name: 'one',
                            required: false,
                            type: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: { type: 'string' },
                          rootSchema: schema
                        },
                        elements: {
                          field: {
                            name: 'two',
                            required: false,
                            type: 'string'
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `object` with `properties` and `required`)', () => {
        const schema = {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            },
            required: [
              'one'
            ]
          }
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'object',
                    schema: {
                      type: 'object',
                      properties: {
                        one: { type: 'string' },
                        two: { type: 'string' }
                      },
                      required: [
                        'one'
                      ]
                    },
                    rootSchema: schema
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          type: 'string',
                          schema: { type: 'string' },
                          rootSchema: schema
                        },
                        elements: {
                          field: {
                            name: 'one',
                            required: true,
                            type: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: { type: 'string' },
                          rootSchema: schema
                        },
                        elements: {
                          field: {
                            name: 'two',
                            required: false,
                            type: 'string'
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `boolean`)', () => {
        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean'
            }
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'boolean',
                    schema: {
                      type: 'boolean'
                    },
                    rootSchema: schema
                  },
                  elements: {
                    field: {
                      required: false,
                      type: 'boolean'
                    }
                  }
                }
              ]
            }
          })
      })

      it('transforms `array` schemas (`items` is type `null`)', () => {
        const schema = {
          type: 'array',
          items: [
            {
              type: 'null'
            }
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: [
                {
                  meta: {
                    required: false,
                    type: 'null',
                    schema: {
                      type: 'null'
                    },
                    rootSchema: schema
                  },
                  elements: {
                    field: {
                      required: false,
                      type: 'null'
                    }
                  }
                }
              ]
            }
          })
      })
    })

    describe('Without `items`', () => {
      it('transforms `array` schemas', () => {
        const schema = { type: 'array' }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'array',
              schema
            },
            elements: {
              fields: []
            }
          })
      })
    })
  })

  describe('Transforming `object` schemas', () => {
    describe('With `properties`', () => {
      it('transforms `object` schemas (with `properties`)', () => {
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'string' },
            two: { type: 'string' }
          }
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'object',
              schema
            },
            elements: {
              fields: [
                {
                  elements: {
                    field: {
                      name: 'one',
                      required: false,
                      type: 'string'
                    }
                  },
                  meta: {
                    name: 'one',
                    required: false,
                    type: 'string',
                    schema: {
                      type: 'string'
                    },
                    rootSchema: schema
                  }
                },
                {
                  elements: {
                    field: {
                      name: 'two',
                      required: false,
                      type: 'string'
                    }
                  },
                  meta: {
                    name: 'two',
                    required: false,
                    type: 'string',
                    schema: {
                      type: 'string'
                    },
                    rootSchema: schema
                  }
                }
              ]
            }
          })
      })

      it('transforms `object` schemas (with `properties` and `required`)', () => {
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'string' },
            two: { type: 'string' }
          },
          required: [
            'one'
          ]
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'object',
              schema
            },
            elements: {
              fields: [
                {
                  elements: {
                    field: {
                      name: 'one',
                      required: true,
                      type: 'string'
                    }
                  },
                  meta: {
                    name: 'one',
                    required: true,
                    rootSchema: schema,
                    schema: { type: 'string' },
                    type: 'string'
                  }
                },
                {
                  elements: {
                    field: {
                      name: 'two',
                      required: false,
                      type: 'string'
                    }
                  },
                  meta: {
                    name: 'two',
                    required: false,
                    rootSchema: schema,
                    schema: { type: 'string' },
                    type: 'string'
                  }
                }
              ]
            }
          })
      })
    })

    describe('Without `properties`', () => {
      it('transforms `object` schemas', () => {
        const schema = { type: 'object' }

        return expect(transform(schema))
          .to.eql({
            meta: {
              type: 'object',
              schema
            },
            elements: {
              fields: []
            }
          })
      })
    })
  })

  it('transforms `boolean` schemas', () => {
    const schema = { type: 'boolean' }

    return expect(transform(schema))
      .to.eql({
        meta: {
          type: 'boolean',
          schema
        },
        elements: {
          field: {
            type: 'boolean'
          }
        }
      })
  })

  it('transforms `null` schemas', () => {
    const schema = { type: 'null' }

    return expect(transform(schema))
      .to.eql({
        meta: {
          type: 'null',
          schema
        },
        elements: {
          field: {
            type: 'null'
          }
        }
      })
  })

  describe('`getTitle()`', () => {
    describe('Schema has a `title` field', () => {
      describe('`title` is truthy', () => {
        it('returns a `title` object', () => {
          expect(getTitle({ title: 'MOCK TITLE' }))
            .to.eql({ title: 'MOCK TITLE' })
        })
      })

      describe('`title` is falsy', () => {
        it('returns an object', () => {
          expect(getTitle({ title: '' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `title` field', () => {
      it('returns an object', () => {
        expect(getTitle({}))
          .to.eql({})
      })
    })
  })

  describe('`getDescription()`', () => {
    describe('Schema has a `description` field', () => {
      describe('`description` is truthy', () => {
        it('returns a `description` object', () => {
          expect(getDescription({ description: 'MOCK DESCRIPTION' }))
            .to.eql({ description: 'MOCK DESCRIPTION' })
        })
      })

      describe('`description` is falsy', () => {
        it('returns an object', () => {
          expect(getDescription({ description: '' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `description` field', () => {
      it('returns an object', () => {
        expect(getDescription({}))
          .to.eql({})
      })
    })
  })

  describe('`getMin()`', () => {
    describe('Schema has a `minimum` field', () => {
      describe('`minimum` is a number', () => {
        it('returns a `min` object', () => {
          expect(getMin({ minimum: 1 }))
            .to.eql({ min: 1 })
        })
      })

      describe('`minimum` is not a number', () => {
        it('returns an object', () => {
          expect(getMin({ minimum: 'MOCK MINIMUM' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `minimum` field', () => {
      it('returns an object', () => {
        expect(getMin({}))
          .to.eql({})
      })
    })
  })

  describe('`getMax()`', () => {
    describe('Schema has a `maximum` field', () => {
      describe('`maximum` is a number', () => {
        it('returns a `max` object', () => {
          expect(getMax({ maximum: 1 }))
            .to.eql({ max: 1 })
        })
      })

      describe('`maximum` is not a number', () => {
        it('returns a `max` object', () => {
          expect(getMax({ maximum: 'MOCK MAXIMUM' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `maximum` field', () => {
      it('returns an object', () => {
        expect(getMax({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinLength()`', () => {
    describe('Schema has a `minLength` field', () => {
      describe('`minLength` is a number', () => {
        it('returns a `minLength` object', () => {
          expect(getMinLength({ minLength: 1 }))
            .to.eql({ minLength: 1 })
        })
      })

      describe('`minLength` is not a number', () => {
        it('returns an object', () => {
          expect(getMinLength({ minLength: 'MOCK MIN LENGTH' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `minLength` field', () => {
      it('returns an object', () => {
        expect(getMinLength({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxLength()`', () => {
    describe('Schema has a `maxLength` field', () => {
      describe('`maxLength` is a number', () => {
        it('returns a `maxLength` object', () => {
          expect(getMaxLength({ maxLength: 1 }))
            .to.eql({ maxLength: 1 })
        })
      })

      describe('`maxLength` is not a number', () => {
        it('returns an object', () => {
          expect(getMaxLength({ maxLength: 'MOCK MAX LENGTH' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `maxLength` field', () => {
      it('returns an object', () => {
        expect(getMaxLength({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinItems()`', () => {
    describe('Schema has a `minItems` field', () => {
      describe('`minItems` is a number', () => {
        it('returns a `minItems` object', () => {
          expect(getMinItems({ minItems: 1 }))
            .to.eql({ minItems: 1 })
        })
      })

      describe('`minItems` is not a number', () => {
        it('returns an object', () => {
          expect(getMinItems({ minItems: 'MOCK MIN ITEMS' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `minItems` field', () => {
      it('returns an object', () => {
        expect(getMinItems({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxItems()`', () => {
    describe('Schema has a `maxItems` field', () => {
      describe('`maxItems` is a number', () => {
        it('returns a `maxItems` object', () => {
          expect(getMaxItems({ maxItems: 1 }))
            .to.eql({ maxItems: 1 })
        })
      })

      describe('`maxItems` is not a number', () => {
        it('returns an object', () => {
          expect(getMaxItems({ maxItems: 'MOCK MAX ITEMS' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `maxItems` field', () => {
      it('returns an object', () => {
        expect(getMaxItems({}))
          .to.eql({})
      })
    })
  })

  describe('`getHasUniqueItems()`', () => {
    describe('Schema has an `uniqueItems` field', () => {
      describe('`uniqueItems` is a boolean', () => {
        it('returns a `hasUniqueItems` object', () => {
          expect(getHasUniqueItems({ uniqueItems: true }))
            .to.eql({ hasUniqueItems: true })
        })
      })

      describe('`uniqueItems` is not a boolean', () => {
        it('returns an object', () => {
          expect(getHasUniqueItems({ uniqueItems: 'MOCK UNIQUE ITEMS' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have an `uniqueItems` field', () => {
      it('returns an object', () => {
        expect(getHasUniqueItems({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinContains()`', () => {
    describe('`minContains` is a number', () => {
      describe('Schema has a `minContains` field', () => {
        it('returns a `minContains` object', () => {
          expect(getMinContains({ minContains: 1 }))
            .to.eql({ minContains: 1 })
        })
      })

      describe('`minContains` is not a number', () => {
        it('returns an object', () => {
          expect(getMinContains({ minContains: 'MOCK MIN CONTAINS' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `minContains` field', () => {
      it('returns an object', () => {
        expect(getMinContains({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxContains()`', () => {
    describe('Schema has a `maxContains` field', () => {
      describe('`maxContains` is a number', () => {
        it('returns a `maxContains` object', () => {
          expect(getMaxContains({ maxContains: 1 }))
            .to.eql({ maxContains: 1 })
        })
      })

      describe('`maxContains` is not a number', () => {
        it('returns an object', () => {
          expect(getMaxContains({ maxContains: 'MOCK MAX CONTAINS' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `maxContains` field', () => {
      it('returns an object', () => {
        expect(getMaxContains({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinProperties()`', () => {
    describe('`minProperties` is a number', () => {
      describe('Schema has a `minProperties` field', () => {
        it('returns a `minProperties` object', () => {
          expect(getMinProperties({ minProperties: 1 }))
            .to.eql({ minProperties: 1 })
        })
      })

      describe('`minProperties` is not a number', () => {
        it('returns an object', () => {
          expect(getMinContains({ minProperties: 'MOCK MIN PROPERTIES' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `minProperties` field', () => {
      it('returns an object', () => {
        expect(getMinProperties({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxProperties()`', () => {
    describe('Schema has a `maxProperties` field', () => {
      describe('`maxProperties` is a number', () => {
        it('returns a `maxProperties` object', () => {
          expect(getMaxProperties({ maxProperties: 1 }))
            .to.eql({ maxProperties: 1 })
        })
      })

      describe('`maxProperties` is not a number', () => {
        it('returns an object', () => {
          expect(getMaxProperties({ maxProperties: 'MOCK MAX PROPERTIES' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `maxProperties` field', () => {
      it('returns an object', () => {
        expect(getMaxProperties({}))
          .to.eql({})
      })
    })
  })

  describe('`getIsExclusiveMin()`', () => {
    describe('Schema has an `exclusiveMinimum` field', () => {
      describe('`exclusiveMinimum` is a boolean', () => {
        it('returns an `isExclusiveMin` object', () => {
          expect(getIsExclusiveMin({ exclusiveMinimum: true }))
            .to.eql({ isExclusiveMin: true })
        })
      })

      describe('`exclusiveMinimum` is not a boolean', () => {
        it('returns an object', () => {
          expect(getIsExclusiveMin({ exclusiveMinimum: 'MOCK EXCLUSIVE MINIMUM' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have an `exclusiveMinimum` field', () => {
      it('returns an object', () => {
        expect(getIsExclusiveMin({}))
          .to.eql({})
      })
    })
  })

  describe('`getIsExclusiveMax()`', () => {
    describe('Schema has an `exclusiveMaximum` field', () => {
      describe('`exclusiveMaximum` is a boolean', () => {
        it('returns an `isExclusiveMax` object', () => {
          expect(getIsExclusiveMax({ exclusiveMaximum: true }))
            .to.eql({ isExclusiveMax: true })
        })
      })

      describe('`exclusiveMaximum` is not a boolean', () => {
        it('returns an `isExclusiveMax` object', () => {
          expect(getIsExclusiveMax({ exclusiveMaximum: 'MOCK IS EXCLUSIVE MAXIMUM' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have an `exclusiveMaximum` field', () => {
      it('returns an object', () => {
        expect(getIsExclusiveMax({}))
          .to.eql({})
      })
    })
  })

  describe('`getPattern()`', () => {
    describe('Schema has a `pattern` field', () => {
      it('returns a `pattern` object', () => {
        expect(getPattern({ pattern: 'MOCK PATTERN' }))
          .to.eql({ pattern: 'MOCK PATTERN' })
      })
    })

    describe('Schema does not have a `pattern` field', () => {
      it('returns an object', () => {
        expect(getPattern({}))
          .to.eql({})
      })
    })
  })

  describe('`getStep()`', () => {
    describe('Schema has a `multipleOf` field', () => {
      describe('`multipleOf` is a number', () => {
        it('returns a `step` object', () => {
          expect(getStep({ multipleOf: 1 }))
            .to.eql({ step: 1 })
        })
      })

      describe('`multipleOf` is not a number', () => {
        it('returns a `step` object', () => {
          expect(getStep({ multipleOf: 'MOCK MULTIPLE OF' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `multipleOf` field', () => {
      it('returns an object', () => {
        expect(getStep({}))
          .to.eql({})
      })
    })
  })
})
