import debug from '#zashiki-govuk-frontend/debug'

import transformError from './common/error.mjs'

const log = debug('zashiki/transformer/to-error-message')

log('`zashiki` is awake')

export default function transform (definition = {}, components = {}) {
  log('transform')

  return transformError(definition, components)
}
