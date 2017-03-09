const path = require('path')
const getProfileName = require('./getProfileName')


module.exports = function (app, profile) {
  const configBase = 'config'
  const profileName = getProfileName(app, profile)

  // main config
  let mainConfigPath = path.resolve(`${configBase}/index`)
  let mainConfig = require(mainConfigPath)

  // profile config
  let profileConfigPath = path.resolve(`${configBase}/profiles/${profileName}`)
  let profileConfig = {}

  try {
    profileConfig = require(profileConfigPath)
  } catch (e) {
    if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
      if (profileName !== 'default') {
        console.warn("Can't load config: " + profileConfigPath)
      }
    } else {
      throw e
    }
  }

  // merge we got final result
  return Object.assign({}, mainConfig, profileConfig)
}
