

module.exports = function (app = null, profile) {
  profile = profile || 'default'
  return profile + (app != null ? '_' + app : '')
}
