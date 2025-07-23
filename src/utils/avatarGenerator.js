import { createAvatar } from '@dicebear/core'
import { dylan, identicon } from '@dicebear/collection'

export function generateAvatar() {
  const randomSeed = Math.random().toString(36).substring(2, 15) // generate a random string
  const avatar = createAvatar(dylan, {
    seed: randomSeed,
    size: 128,
    radius: 50,
  })

  return avatar.toDataUri() // returns a base64-encoded SVG as data URI
}
