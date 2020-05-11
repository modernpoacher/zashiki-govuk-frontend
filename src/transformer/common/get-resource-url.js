import Boom from '@hapi/boom'

import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

import {
  NOT_FOUND
} from './exception'

export default function getResourceUrl (resource = {}) {
  if (Reflect.has(resource, 'omega')) {
    return Rails.to(resource, Signals.OMEGA_PATTERN)
  } else {
    if (Reflect.has(resource, 'debark')) {
      return Rails.to(resource, Signals.DEBARK_PATTERN)
    } else {
      if (Reflect.has(resource, 'confirmation')) {
        return Rails.to(resource, Signals.CONFIRMATION_PATTERN)
      } else {
        if (Reflect.has(resource, 'embark')) {
          return Rails.to(resource, Signals.EMBARK_PATTERN)
        } else {
          if (Reflect.has(resource, 'alpha')) {
            return Rails.to(resource, Signals.ALPHA_PATTERN)
          }
        }
      }
    }
  }

  throw Boom.notFound(NOT_FOUND)
}
