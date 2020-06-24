const debug = require('debug')

const log = debug('zashiki:transformer')

const {
  env: {
    DEBUG = 'zashiki:transformer',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

log('`zashiki` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: '12.18.1'
      },
      useBuiltIns: 'entry',
      corejs: 3
    }
  ]
]

const plugins = [
  '@babel/proposal-export-default-from',
  [
    'module-resolver', {
      alias: {
        'zashiki-govuk-frontend': '.'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
