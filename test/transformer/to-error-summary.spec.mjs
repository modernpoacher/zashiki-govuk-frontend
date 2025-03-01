import {
  expect
} from 'chai'

import transformer from '@modernpoacher/zashiki-govuk-frontend/transformer/to-error-summary'

describe('#transformer/to-error-summary', () => {
  describe('`transformer`', () => {
    it('is a function', () => {
      return expect(transformer)
        .to.be.a('function')
    })
  })
})
