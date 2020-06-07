import debug from 'debug'

import { expect } from 'chai'

import transformer from 'zashiki-govuk-frontend/src/transformer/to-error-message'

describe('zashiki-govuk-frontend/src/transformer/to-error-message', () => {
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
      return expect(transformer)
        .to.be.a('function')
    })
  })
})
