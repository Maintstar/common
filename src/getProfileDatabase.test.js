var getProfileDatabase = require('./getProfileDatabase')
var { expect } = require('chai')

describe('getProfileDatabase', function() {

  it.only('success', function () {
    var db = getProfileDatabase('permit', undefined, (cfg) => ({database: 1}))
    expect(db).to.eql({ database: 1 })
  })

  it.only('non existing database should throw', function () {
    try {
      var db = getProfileDatabase('permit', 'mainCity', (cfg) => ({database: 1}))
    } catch (e) {
      expect(e).to.eql(new Error('Cant get database config for profileName: mainCity_permit, app: permit'))
    }
  })

})

