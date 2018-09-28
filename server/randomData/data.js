let numList = [0,1,2,3,4,5,6,7,8,9];
let upperList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numAndWordList = [...numList,...lowerList,...upperList];

module.exports = {
    number:numList,
    lowerWord:lowerList,
    upperWord:upperList,
    numAndWord:numAndWordList
};
//小写字母 65-91
//大写字母 97-122
// let A_Z="";
// for(var i=97;i<122;i++)
// {
//     A_Z+=`'${String.fromCharCode(i)}',`;
// }
// console.log(A_Z);