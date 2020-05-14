import debug from 'debug'

import Boom from '@hapi/boom'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('zashiki:transformer:exception')

const transformException = ({
  code = 500,
  name = 'Internal Server Error',
  message
} = {}) => ({
  code,
  name,
  ...(
    message ? { message } : {}
  )
})

export default (error) => ({
  status: Signals.FAILURE,
  exception: transformException(error)
})

export const NOT_FOUND = 'https://tools.ietf.org/html/rfc7231#section-6.5.4'
export const BAD_DATA = 'https://tools.ietf.org/html/rfc7231#section-6.5.1'
export const BAD_IMPLEMENTATION = 'https://tools.ietf.org/html/rfc7231#section-6.5.1'

export function handleException (error) {
  const {
    code,
    message = 'No error message defined'
  } = error

  if (code) log(code, message)
  else log(message)

  if (code === 404) throw Boom.notFound(NOT_FOUND)
  throw Boom.badImplementation(BAD_IMPLEMENTATION)
}
