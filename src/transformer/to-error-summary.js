import debug from 'debug'

import transformError from './common/error'

const log = debug('zashiki:transformer:to-error-summary')

export default function transform (definitions = [], { titleText = 'There is a problem', ...components } = {}) {
  log('transform')

  if (definitions.length) {
    return {
      titleText,
      errorList: definitions.map((definition) => transformError(definition, components))
    }
  }
}
