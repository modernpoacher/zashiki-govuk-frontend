import debug from '#zashiki-govuk-frontend/debug'

import transformError from './common/error.mjs'

const log = debug('zashiki/transformer/to-error-summary')

log('`zashiki` is awake')

export default function transform (definitions = [], { titleText = 'There is a problem', ...components } = {}) {
  log('transform')

  if (definitions.length) {
    return {
      titleText,
      errorList: definitions.map((definition) => transformError(definition, components))
    }
  }
}
