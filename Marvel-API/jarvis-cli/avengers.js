var api = require('marvel-api')
var Profile = require('./avengerProfile')

class Avengers {
    constructor(config) {
      this.marvel = api.createClient({
       publicKey : config.publicKey,
       privateKey : config.privateKey
     });

   }

   getSpiderMan() {
    this.marvel.characters.findByName('spider-man')
      .then(function(res) {
        console.log(res)
      })
      .fail(console.error)
      .done();
   }  

   assemble(cb) {
    Promise.all([this.marvel.characters.findbyName('Thor')]).then(function (responses) {
     let heroProfiles = []
     responses.forEach(function(character) {
       let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
     heroProfiles.push(profile.createProfile())
   })
   console.log('Avengers Assemble!!!')
   cb(JSON.stringify(heroProfiles))
  })
 }
