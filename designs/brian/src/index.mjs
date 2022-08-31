import { Design } from '@freesewing/core'
import { name, version } from '../pkg.mjs'
import { back } from './back.mjs'
import { front } from './front.mjs'
import { sleeve } from './sleeve.mjs'
// Re-export skeleton parts so peope can re-use them
import { base } from './base.mjs'
import { sleevecap } from './sleevecap.mjs'

// Setup our new design
const Brian = new Design({
  name,
  version,
  parts: [ back, front, sleeve ],
})

// Named exports
export { back, front, sleeve, base, sleevecap, Brian }
