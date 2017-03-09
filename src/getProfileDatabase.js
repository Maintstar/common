const getProfileName = require('./getProfileName')
const getProfileConfig = require('./getProfileConfig')

const cacheByProfile = {}

function getProfileDatabase (app, profile, getDbByConfig) {
  const profileName = getProfileName(app, profile)
  const config = getProfileConfig(app, profile)

  // no database config
  if (getDbByConfig == null) {
    throw new Error(`please specify getDbByConfig 3rd parameter, which should return database intance by Config`)
  }


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

// expose cache as well
getProfileDatabase.cache = cacheByProfile

module.exports = getProfileDatabase
