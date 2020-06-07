import debug from 'debug'

import { expect } from 'chai'

import transform from 'zashiki-govuk-frontend/src/transformer/to-error-message'

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
      return expect(transform)
        .to.be.a('function')
    })
  })
})
