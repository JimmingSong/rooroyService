const number = require('./randomNumber');
module.exports = {
    randomOneUpper(list){
        let num = number.randomNumber(0,26);
        return list[num]
    },
    randomNUpperWord(list,n=1){
        let wList = '';
        for (let i = 0;i < n;i++){
            let num = number.randomNumber(0,26);
            wList += list[num];
        }
        return wList
    },
    randomOneLower(list){
        let num = number.randomNumber(0,26);
        return list[num]
    },
    randomNLowerWord(list,n = 1){
        let wList = '';
        for (let i = 0;i < n;i++){
            let num = number.randomNumber(0,26);
            wList += list[num];
        }
        return wList
    },
    randomMixing(list,n = 1){
        let wList = '';
        for (let i = 0;i < n;i++){
            let num = number.randomNumber(0,62);
            wList += list[num];
        }
        return wList
    }
};