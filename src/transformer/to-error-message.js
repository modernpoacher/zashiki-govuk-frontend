import debug from 'debug'

import transformError from './common/error'

const log = debug('zashiki:transformer:to-error-message')

export default function transform (definition = {}, components = {}) {
  log('transform')

  return transformError(definition, components)
}
