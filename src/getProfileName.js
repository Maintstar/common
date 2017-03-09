

module.exports = function (app = null, profile = 'default') {
  return profile + (app != null ? '_' + app : '')
}
