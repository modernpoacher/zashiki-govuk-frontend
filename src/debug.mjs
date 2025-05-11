import debug from 'debug'

const {
  env: {
    DEBUG
  }
} = process

if (DEBUG) debug.enable(DEBUG)

export default debug
