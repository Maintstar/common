const path = require('path')
const getProfileName = require('./getProfileName')


module.exports = function (app, profile) {
  const configBase = 'config'


  // main config
  let mainConfigPath = path.resolve(`${configBase}/index`)
  let mainConfig = require(mainConfigPath)

  //console.log(mainConfig)

  // profile config
  // let profileConfigPath = path.resolve(`${configBase}/profiles/${profileName}`)
  // let profileConfig = {}

  // profile config: default.js, santaClara.js
  let profileConfigPath = path.resolve(`${configBase}/profiles/${getProfileName(undefined, profile)}`)
  let profileConfig = tryLoadConfig(app, profile, profileConfigPath)

  // profile + app config
  let profileAppConfigPath = path.resolve(`${configBase}/profiles/${getProfileName(app, profile)}`)
  let profileAppConfig = tryLoadConfig(app, profile, profileAppConfigPath)

  // merge we got final result
  return Object.assign({}, mainConfig, profileConfig, profileAppConfig)
}

function tryLoadConfig (app, profile, path) {
  try {
    let cfg = require(path)
    return cfg
  } catch (e) {
    if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
      if (profile !== 'default') {
        console.warn(`can't load config app:${app} profile:${profile} path: ${path}.js`)
      }
    } else {
      throw e
    }
  }
  return {}
}
