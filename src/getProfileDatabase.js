const getProfileName = require('./getProfileName')
const getProfileConfig = require('./getProfileConfig')

const cacheByProfile = {}

module.exports = function (app, profile, getDbByConfig) {
  const profileName = getProfileName(app, profile)
  const config = getProfileConfig(profileName)

  // cache by profile name
  let cached = cacheByProfile[profileName]
  if (cached == null) {

    // no database config
    if (config.db == null) {
      throw new Error(`Cant get database config for profileName: ${profileName}, app: ${app}`)
    }

    // init knex DB
    cached = cacheByProfile[profileName] = getDbByConfig(config.db)
  }

  return cached
}
