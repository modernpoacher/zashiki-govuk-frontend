import debug from 'debug'

import {
  Signals
} from 'shinkansen-signals'

import {
  Rails
} from 'shinkansen-rails'

const log = debug('zashiki:transformer:to-back-link')

export function transformAlpha (resource = {}, pattern = Signals.ALPHA_PATTERN, text) {
  log('transformAlpha')

  return transform(resource, pattern, text)
}

export function transformOmega (resource = {}, pattern = Signals.OMEGA_PATTERN, text) {
  log('transformOmega')

  return transform(resource, pattern, text)
}

export default function transform (resource = {}, pattern, text = 'Back') {
  log('transform')

  if (Rails.go(resource, pattern)) {
    return {
      href: Rails.to(resource, pattern),
      text
    }
  }
}