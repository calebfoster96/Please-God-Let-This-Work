// Object Oriented Programming using Javascript
class Person {
  constructor(personality) {
  this.personality_type = personality.type
 }

 sayHi() {
  if (this.personality_type == 'outgoing') {
    console.log('Hi! How are you?!')
 }
  if (this.personality_type == 'introverted') {
    console.log('Sup')
 }
}
}


module.exports = Person


