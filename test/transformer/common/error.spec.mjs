import debug from 'debug'

import {
  expect
} from 'chai'

import {
  getErrorTextForMaxItems,
  getErrorTextForMinItems,
  getErrorTextForMaxLength,
  getErrorTextForMinLength,
  getErrorTextForMaxProperties,
  getErrorTextForMinProperties,
  getErrorTextForAdditionalItems,
  getErrorTextForMaximum,
  getErrorTextForMinimum,
  getErrorTextForFormat,
  getErrorTextForAdditionalProperties,
  getErrorTextForDependencies,
  getErrorTextForUniqeItems,
  getErrorTextForPropertyRequired,
  getErrorTextForPropertyNames,
  getErrorTextForPatternRequired,
  getErrorTextForMultipleOf,
  getErrorTextForPattern,
  getErrorTextForConst,
  getErrorTextForEnum,
  getErrorTextFor$Ref,
  getErrorTextForOneOf,
  getErrorTextForTypeInvalid,
  getErrorTextByType,
  hasError,
  getError
} from '@modernpoacher/zashiki-govuk-frontend/transformer/common/error'

describe('#transformer/common/error', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`getErrorTextForMaxItems`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMaxItems)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMinItems`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMinItems)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMaxLength`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMaxLength)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMinLength`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMinLength)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMaxProperties`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMaxProperties)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMinProperties`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMinProperties)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForAdditionalItems`', () => {
    it('is a function', () => {
      return expect(getErrorTextForAdditionalItems)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMaximum`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMaximum)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMinimum`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMinimum)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForFormat`', () => {
    it('is a function', () => {
      return expect(getErrorTextForFormat)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForAdditionalProperties`', () => {
    it('is a function', () => {
      return expect(getErrorTextForAdditionalProperties)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForDependencies`', () => {
    it('is a function', () => {
      return expect(getErrorTextForDependencies)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForUniqeItems`', () => {
    it('is a function', () => {
      return expect(getErrorTextForUniqeItems)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForPropertyRequired`', () => {
    it('is a function', () => {
      return expect(getErrorTextForPropertyRequired)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForPropertyNames`', () => {
    it('is a function', () => {
      return expect(getErrorTextForPropertyNames)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForPatternRequired`', () => {
    it('is a function', () => {
      return expect(getErrorTextForPatternRequired)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMultipleOf`', () => {
    it('is a function', () => {
      return expect(getErrorTextForMultipleOf)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForPattern`', () => {
    it('is a function', () => {
      return expect(getErrorTextForPattern)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForConst`', () => {
    it('is a function', () => {
      return expect(getErrorTextForConst)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForEnum`', () => {
    it('is a function', () => {
      return expect(getErrorTextForEnum)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextFor$Ref`', () => {
    it('is a function', () => {
      return expect(getErrorTextFor$Ref)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForOneOf`', () => {
    it('is a function', () => {
      return expect(getErrorTextForOneOf)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForTypeInvalid`', () => {
    it('is a function', () => {
      return expect(getErrorTextForTypeInvalid)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextByType`', () => {
    it('is a function', () => {
      return expect(getErrorTextByType)
        .to.be.a('function')
    })
  })

  describe('`hasError`', () => {
    it('is a function', () => {
      return expect(hasError)
        .to.be.a('function')
    })
  })

  describe('`getError`', () => {
    it('is a function', () => {
      return expect(getError)
        .to.be.a('function')
    })
  })

  describe('`getErrorTextForMaxItems()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMaxItems())
        .to.equal('Max items')
    })
  })

  describe('`getErrorTextForMinItems()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMinItems())
        .to.equal('Min items')
    })
  })

  describe('`getErrorTextForMaxLength()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMaxLength())
        .to.equal('Max length')
    })
  })

  describe('`getErrorTextForMinLength()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMinLength())
        .to.equal('Min length')
    })
  })

  describe('`getErrorTextForMaxProperties()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMaxProperties())
        .to.equal('Max properties')
    })
  })

  describe('`getErrorTextForMinProperties()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMinProperties())
        .to.equal('Min properties')
    })
  })

  describe('`getErrorTextForAdditionalItems()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForAdditionalItems())
        .to.equal('Additional items')
    })
  })

  describe('`getErrorTextForMaximum()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMaximum())
        .to.equal('Maximum')
    })
  })

  describe('`getErrorTextForMinimum()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMinimum())
        .to.equal('Minimum')
    })
  })

  describe('`getErrorTextForFormat()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForFormat())
        .to.equal('Format')
    })
  })

  describe('`getErrorTextForAdditionalProperties()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForAdditionalProperties())
        .to.equal('Additional properties')
    })
  })

  describe('`getErrorTextForDependencies()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForDependencies())
        .to.equal('Dependencies')
    })
  })

  describe('`getErrorTextForUniqeItems()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForUniqeItems())
        .to.equal('Unique items')
    })
  })

  describe('`getErrorTextForPropertyRequired()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForPropertyRequired())
        .to.equal('Property required')
    })
  })

  describe('`getErrorTextForPropertyNames()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForPropertyNames())
        .to.equal('Property names')
    })
  })

  describe('`getErrorTextForPatternRequired()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForPatternRequired())
        .to.equal('Pattern required')
    })
  })

  describe('`getErrorTextForMultipleOf()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForMultipleOf())
        .to.equal('Multiple of')
    })
  })

  describe('`getErrorTextForPattern()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForPattern())
        .to.equal('Pattern')
    })
  })

  describe('`getErrorTextForConst()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForConst())
        .to.equal('Const')
    })
  })

  describe('`getErrorTextForEnum()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForEnum())
        .to.equal('Enum')
    })
  })

  describe('`getErrorTextFor$Ref()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextFor$Ref())
        .to.equal('$Ref')
    })
  })

  describe('`getErrorTextForOneOf()`', () => {
    it('returns a string', () => {
      return expect(getErrorTextForOneOf())
        .to.equal('One of')
    })
  })

  describe('`getErrorTextForTypeInvalid()`', () => {
    describe('With params', () => {
      describe('Expected type is string', () => {
        it('returns a string', () => {
          return expect(getErrorTextForTypeInvalid({ expectedType: 'string' }))
            .to.equal('Type invalid (expected string)')
        })
      })

      describe('Expected type is number', () => {
        it('returns a string', () => {
          return expect(getErrorTextForTypeInvalid({ expectedType: 'number' }))
            .to.equal('Type invalid (expected number)')
        })
      })

      describe('Expected type is object', () => {
        it('returns a string', () => {
          return expect(getErrorTextForTypeInvalid({ expectedType: 'object' }))
            .to.equal('Type invalid (expected object)')
        })
      })

      describe('Expected type is array', () => {
        it('returns a string', () => {
          return expect(getErrorTextForTypeInvalid({ expectedType: 'array' }))
            .to.equal('Type invalid (expected array)')
        })
      })

      describe('Expected type is boolean', () => {
        it('returns a string', () => {
          return expect(getErrorTextForTypeInvalid({ expectedType: 'boolean' }))
            .to.equal('Type invalid (expected boolean)')
        })
      })

      describe('Expected type is null', () => {
        it('returns a string', () => {
          return expect(getErrorTextForTypeInvalid({ expectedType: 'null' }))
            .to.equal('Type invalid (expected null)')
        })
      })
    })

    describe('Without params', () => {
      it('throws', () => {
        return expect(() => getErrorTextForTypeInvalid())
          .to.throw('Error incompatible with Zashiki')
      })
    })
  })

  describe('`getErrorTextByType()`', () => {
    describe('With params', () => {
      describe('With `MAX_ITEMS`', () => {
        it('returns a string', () => {
          const params = { type: 'MAX_ITEMS' }

          return expect(getErrorTextByType(params))
            .to.equal('Max items')
        })
      })

      describe('With `MIN_ITEMS`', () => {
        it('returns a string', () => {
          const params = { type: 'MIN_ITEMS' }

          return expect(getErrorTextByType(params))
            .to.equal('Min items')
        })
      })

      describe('With `MAX_LENGTH`', () => {
        it('returns a string', () => {
          const params = { type: 'MAX_LENGTH' }

          return expect(getErrorTextByType(params))
            .to.equal('Max length')
        })
      })

      describe('With `MIN_LENGTH`', () => {
        it('returns a string', () => {
          const params = { type: 'MIN_LENGTH' }

          return expect(getErrorTextByType(params))
            .to.equal('Min length')
        })
      })

      describe('With `MAX_PROPERTIES`', () => {
        it('returns a string', () => {
          const params = { type: 'MAX_PROPERTIES' }

          return expect(getErrorTextByType(params))
            .to.equal('Max properties')
        })
      })

      describe('With `MIN_PROPERTIES`', () => {
        it('returns a string', () => {
          const params = { type: 'MIN_PROPERTIES' }

          return expect(getErrorTextByType(params))
            .to.equal('Min properties')
        })
      })

      describe('With `ADDITIONAL_ITEMS`', () => {
        it('returns a string', () => {
          const params = { type: 'ADDITIONAL_ITEMS' }

          return expect(getErrorTextByType(params))
            .to.equal('Additional items')
        })
      })

      describe('With `MAXIMUM`', () => {
        it('returns a string', () => {
          const params = { type: 'MAXIMUM' }

          return expect(getErrorTextByType(params))
            .to.equal('Maximum')
        })
      })

      describe('With `MINIMUM`', () => {
        it('returns a string', () => {
          const params = { type: 'MINIMUM' }

          return expect(getErrorTextByType(params))
            .to.equal('Minimum')
        })
      })

      describe('With `FORMAT`', () => {
        it('returns a string', () => {
          const params = { type: 'FORMAT' }

          return expect(getErrorTextByType(params))
            .to.equal('Format')
        })
      })

      describe('With `ADDITIONAL_PROPERTIES`', () => {
        it('returns a string', () => {
          const params = { type: 'ADDITIONAL_PROPERTIES' }

          return expect(getErrorTextByType(params))
            .to.equal('Additional properties')
        })
      })

      describe('With `DEPENDENCIES`', () => {
        it('returns a string', () => {
          const params = { type: 'DEPENDENCIES' }

          return expect(getErrorTextByType(params))
            .to.equal('Dependencies')
        })
      })

      describe('With `UNIQUE_ITEMS`', () => {
        it('returns a string', () => {
          const params = { type: 'UNIQUE_ITEMS' }

          return expect(getErrorTextByType(params))
            .to.equal('Unique items')
        })
      })

      describe('With `PROPERTY_REQUIRED`', () => {
        it('returns a string', () => {
          const params = { type: 'PROPERTY_REQUIRED' }

          return expect(getErrorTextByType(params))
            .to.equal('Property required')
        })
      })

      describe('With `PROPERTY_NAMES`', () => {
        it('returns a string', () => {
          const params = { type: 'PROPERTY_NAMES' }

          return expect(getErrorTextByType(params))
            .to.equal('Property names')
        })
      })

      describe('With `PATTERN_REQUIRED`', () => {
        it('returns a string', () => {
          const params = { type: 'PATTERN_REQUIRED' }

          return expect(getErrorTextByType(params))
            .to.equal('Pattern required')
        })
      })

      describe('With `TYPE_INVALID`', () => {
        describe('With params', () => {
          describe('Expected type is string', () => {
            it('returns a string', () => {
              const params = { type: 'TYPE_INVALID', params: { expectedType: 'string' } }

              return expect(getErrorTextByType(params))
                .to.equal('Type invalid (expected string)')
            })
          })

          describe('Expected type is number', () => {
            it('returns a string', () => {
              const params = { type: 'TYPE_INVALID', params: { expectedType: 'number' } }

              return expect(getErrorTextByType(params))
                .to.equal('Type invalid (expected number)')
            })
          })

          describe('Expected type is object', () => {
            it('returns a string', () => {
              const params = { type: 'TYPE_INVALID', params: { expectedType: 'object' } }

              return expect(getErrorTextByType(params))
                .to.equal('Type invalid (expected object)')
            })
          })

          describe('Expected type is array', () => {
            it('returns a string', () => {
              const params = { type: 'TYPE_INVALID', params: { expectedType: 'array' } }

              return expect(getErrorTextByType(params))
                .to.equal('Type invalid (expected array)')
            })
          })

          describe('Expected type is boolean', () => {
            it('returns a string', () => {
              const params = { type: 'TYPE_INVALID', params: { expectedType: 'boolean' } }

              return expect(getErrorTextByType(params))
                .to.equal('Type invalid (expected boolean)')
            })
          })

          describe('Expected type is null', () => {
            it('returns a string', () => {
              const params = { type: 'TYPE_INVALID', params: { expectedType: 'null' } }

              return expect(getErrorTextByType(params))
                .to.equal('Type invalid (expected null)')
            })
          })

          describe('Otherwise', () => {
            it('throws', () => {
              const params = { type: 'TYPE_INVALID' }

              return expect(() => getErrorTextByType(params))
                .to.throw('Error incompatible with Zashiki')
            })
          })
        })

        describe('Without params', () => {
          it('throws', () => {
            return expect(() => getErrorTextByType())
              .to.throw('Error incompatible with Zashiki')
          })
        })
      })

      describe('With `MULTIPLE_OF`', () => {
        it('returns a string', () => {
          const params = { type: 'MULTIPLE_OF' }

          return expect(getErrorTextForMultipleOf(params))
            .to.equal('Multiple of')
        })
      })

      describe('With `PATTERN`', () => {
        it('returns a string', () => {
          const params = { type: 'PATTERN' }

          return expect(getErrorTextForPattern(params))
            .to.equal('Pattern')
        })
      })

      describe('With `CONST`', () => {
        it('returns a string', () => {
          const params = { type: 'CONST' }

          return expect(getErrorTextForConst(params))
            .to.equal('Const')
        })
      })

      describe('With `ENUM`', () => {
        it('returns a string', () => {
          const params = { type: 'ENUM' }

          return expect(getErrorTextForEnum(params))
            .to.equal('Enum')
        })
      })

      describe('With `$REF`', () => {
        it('returns a string', () => {
          const params = { type: '$REF' }

          return expect(getErrorTextFor$Ref(params))
            .to.equal('$Ref')
        })
      })

      describe('With `ONE_OF`', () => {
        it('returns a string', () => {
          const params = { type: 'ONE_OF' }

          return expect(getErrorTextForOneOf(params))
            .to.equal('One of')
        })
      })

      describe('Otherwise', () => {
        it('throws', () => {
          return expect(() => getErrorTextByType())
            .to.throw('Error incompatible with Zashiki')
        })
      })
    })

    describe('Without params', () => {
      it('throws', () => {
        return expect(() => getErrorTextByType())
          .to.throw('Error incompatible with Zashiki')
      })
    })
  })

  describe('`hasError()`', () => {
    describe('With params', () => {
      describe('Has the error', () => {
        it('returns true', () => {
          return expect(hasError([{ uri: 'mock-uri' }], 'mock-uri'))
            .to.be.true
        })
      })

      describe('Does not have the error', () => {
        it('returns false', () => {
          return expect(hasError([{ uri: 'not-mock-uri' }], 'mock-uri'))
            .to.be.false
        })
      })
    })

    describe('Without params', () => {
      it('returns a string', () => {
        return expect(hasError())
          .to.be.false
      })
    })
  })

  describe('`getError()`', () => {
    it('returns an object', () => {
      return expect(getError([{ uri: 'mock-uri' }], 'mock-uri'))
        .to.eql({ uri: 'mock-uri' })
    })
  })
})
