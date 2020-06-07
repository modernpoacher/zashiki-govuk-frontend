import debug from 'debug'

import { expect } from 'chai'

import transformer from 'zashiki-govuk-frontend/src/transformer/to-error-summary'

describe('zashiki-govuk-frontend/src/transformer/to-error-summary', () => {
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
