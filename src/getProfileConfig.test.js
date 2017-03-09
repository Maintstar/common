var getProfileConfig = require('./getProfileConfig')
var { expect } = require('chai')

it('default', function () {
  var cfg = getProfileConfig()
  console.info(cfg)
  expect(Object.keys(cfg)).to.eql(['baseParam', 'defaultProfileParam'])
})

it('profile: undefined, app: permit', function () {
  var cfg = getProfileConfig('permit')
  expect(Object.keys(cfg)).to.eql(['baseParam', 'defaultProfileParam', 'defaultProfileAppParam'])
})

it('profile: mainCity, app: permit', function () {
  var cfg = getProfileConfig('permit', 'mainCity')
  expect(Object.keys(cfg)).to.eql(['baseParam', 'mainCityParam', 'mainCityAppParam'])
})

it('profile: mainCity, app: undefined', function () {
  var cfg = getProfileConfig(undefined, 'mainCity')
  expect(Object.keys(cfg)).to.eql(['baseParam', 'mainCityParam'])
})

it('profile: mainCity, app: null', function () {
  var cfg = getProfileConfig(null, 'mainCity')
  expect(Object.keys(cfg)).to.eql(['baseParam', 'mainCityParam'])
})

it('profile: mainCity, app: wo. should work but warn', function () {
  var cfg = getProfileConfig('wo', 'mainCity')
  expect(Object.keys(cfg)).to.eql(['baseParam', 'mainCityParam'])
})

it('profile: santaClara, app: permit. should work but warn', function () {
  var cfg = getProfileConfig('permit', 'santaClara')
  expect(Object.keys(cfg)).to.eql(['baseParam'])
})