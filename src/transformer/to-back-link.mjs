import debug from '#zashiki-govuk-frontend/debug'

import {
  Signals
} from 'shinkansen-signals'

import {
  Rails
} from 'shinkansen-rails'

const log = debug('zashiki/transformer/to-back-link')

log('`zashiki` is awake')

export function transformAlpha (resource = {}, pattern = Signals.ALPHA_PATTERN, text = 'Back') {
  log('transformAlpha')

  return transform(resource, pattern, text)
}

export function transformOmega (resource = {}, pattern = Signals.OMEGA_PATTERN, text = 'Back') {
  log('transformOmega')

  return transform(resource, pattern, text)
}

export default function transform (resource, pattern, text) {
  log('transform')

  if (Rails.go(resource, pattern)) {
    return {
      href: Rails.to(resource, pattern),
      text
    }
  }
}
