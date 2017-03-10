var getProfileName = require('./getProfileName')
var { expect } = require('chai')

describe('getProfileName', function() {

  it.only('success', function () {
    var db = getProfileName('permit')
    expect(db).to.eql('default_permit')
    db = getProfileName('permit', '')
    expect(db).to.eql('default_permit')
    db = getProfileName('permit', null)
    expect(db).to.eql('default_permit')
  })

})

