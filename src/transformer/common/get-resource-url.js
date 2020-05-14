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
  if (Rails.go(resource, Signals.OMEGA_PATTERN)) {
    return Rails.to(resource, Signals.OMEGA_PATTERN)
  } else {
    if (Rails.go(resource, Signals.DEBARK_PATTERN)) {
      return Rails.to(resource, Signals.DEBARK_PATTERN)
    } else {
      if (Rails.go(resource, Signals.CONFIRM_PATTERN)) {
        return Rails.to(resource, Signals.CONFIRM_PATTERN)
      } else {
        if (Rails.go(resource, Signals.EMBARK_PATTERN)) {
          return Rails.to(resource, Signals.EMBARK_PATTERN)
        } else {
          if (Rails.go(resource, Signals.ALPHA_PATTERN)) {
            return Rails.to(resource, Signals.ALPHA_PATTERN)
          }
        }
      }
    }
  }

  throw Boom.notFound(NOT_FOUND)
}
