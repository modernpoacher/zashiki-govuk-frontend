import {
  expect
} from 'chai'

import '#zashiki-govuk-frontend/debug'

import transformer from '@modernpoacher/zashiki-govuk-frontend/transformer/to-error-message'

describe('#transformer/to-error-message', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      return expect(transformer)
        .to.be.a('function')
    })
  })
})
