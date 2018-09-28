let data = require('./data');
let randomNumber = require('./randomNumber');
let randomUpperCase = require('./randomUpperCase');

// let w = randomUpperCase.randomNUpperWord(data.upperWord,6);
// console.log(w);

module.exports = {
    oneUpperWord:randomUpperCase.randomOneUpper(data.upperWord),
    randomNUpperWord(n){
        return randomUpperCase.randomNUpperWord(data.upperWord,n)
    },
    onerLowerWord(){
        return randomUpperCase.randomOneLower(data.lowerWord);
    },
    randomNLowerWord(n){
        return randomUpperCase.randomNLowerWord(data.lowerWord,n)
    },
    randomMixing(n){
        return randomUpperCase.randomMixing(data.numAndWord,n)
    }
};