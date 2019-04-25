/****************************************************************************** 
 * Use the coding interface at "Coding Exercises 17: Maps and Sets" in Sec17,
 * ES2015 Part2
 *****************************************************************************/

//*** Map ***//

class MessageBoard {
    
    /* In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1. 
    
    var m = new MessageBoard
    
    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */
    
    constructor() {
        this.messages = new Map();
        this.id = 1;
    }
    
    /* Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
    
    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
    */
    
    addMessage(str){
        this.messages.set(this.id, str);
        this.id++;
        
        // Return the object created from the class so the method can be chained
        return this;
    }
    
    /* Add a method called findMessageById which accepts a number and returns the message
       in the messages map with the same key as the number passed to the function. 
       If the key is not found in the messages map, the function should return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */
    
    findMessageById(id){
        return this.messages.get(id);
    }
    
    /* Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */
    
    findMessageByValue(str){
      for (let msg of this.messages.values()) {
          if (msg === str)
            return msg;
      }
    }
    
    /*Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */
    
    removeMessage(id){
function countPairs(arr, num){
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === num) {
        count++;      
      }
    }
  }
  return count;
}

function countPairs_2(arr, num){
  var cache = new Set(arr);
  var count = 0;
  for (let val of arr) {
    cache.delete(val);
    if (cache.has(num - val)) {
      count++;
    }
  }
  return count;
}


