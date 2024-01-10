// 1 include()  
//------------------------------------------------
//1-ci Usul 

// Array.prototype.customInclude = function(input) {
//     let checker = false; // Assume the element is not found initially
//     this.forEach((value) => {
//         if (value === input) {
//             checker = true; // Set to true if the element is found
//         }
//     });
//     return checker;
// };

// let myArr = [1, 2, 3, 4, 5];
// let input = 3;
// console.log(myArr.customInclude(input));


//----------------------------------------------

// 2-ci usul

// / Daha sadelesdirilmis versiyadir, adi for istifade olunubchecker deyiskeni yoxdur ve input deyiskeni yerine, check edeceyimiz deyer birbasa custom funsiyanin qebul etdiyi funksiyaya argument olaraq oturulub :)
//

// Array.prototype.customInclude = function(element) {
//     for(let i = 0; i < this.length; i++) {
//         if(this[i] === element) {
//             return true
//         }
//     }
//     return false 
// }

// let myArr = [1, 2, 3, 4, 5]
// console.log(myArr.customInclude(2));

//---------------------------------------------------------------------------------------------------

// 2 indexOf();

// Array.prototype.customIdxOf = function (input) {
//     this.forEach((value, idx) => {
//         if (value === idx) {
//             return true
//         }
//     })
//     return false;
// }

// let myArr = [1, 2, 3, 4, 7];
// console.log(myArr.customIdxOf(2));

//----------------------------------------------------------------------------------------------

// 3 reverse()

// Array.prototype.customReverse = function() {
//     let reversedArr = [];
//     for(let i = 0; i <= this; i++) {
//         reversedArr.push(this[i])
//     }
//     return reversedArr
// }

// let myArr = [1, 2, 3, 4, 7];
// console.log(myArr.customReverse()); 
 



//----------------------------------------------------------------------------------------------

// 4 join()

// Array.prototype.customJoin = function(element) {
//     let joinedElements = ''
//     this.forEach((value) => {
//         joinedElements += value
//     })
//     return joinedElements
// }
// let myArr = ['2', '2', '4', 5, 5, "salam", false]
// console.log(myArr.customJoin())

//----------------------------------------------------------------------------------------------

// 5 find()

// Callback funksiyanin icinde iterasiya olunan element bize true      
// Verib vermediyini yoxlayiriq ve eger uygundursa find edirik
// call backden alinan element ve index sadece if === rolu oynayir 
// deye basa dusurem. 
// NOTE : Bu kodu arasdirib yazmisam, cunki bu sintaksisi basa dusmeye calisiram
// Yuxarida yazdigim sintaksis stilleri mene daha yaxin gelir
//
// Array.prototype.customFind = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {    
//             return this[i];         
//     return 'Ele bir serte uyan element yoxdur';
// };

// let myArr = ['2', '2', '4', 6, 5, "salam", false];

// let foundElement = myArr.customFind(function(element) {
//     return element > 2 && typeof element == 'string';
// });

// console.log(foundElement); 

//------------------------------------------------------------------------------------------------

// 6 findIndex()

// Array.prototype.findCustomIdx = function(element) {
//     let foundIdx = -1;
//     this.forEach((value, idx) => {
//         if (value === element) {
//             foundIdx = idx;
//         }
//     });
//     return foundIdx;
// }

// let myArr = [1, 2, 4, 5, 3, 7, 4];
// console.log(myArr.findCustomIdx(4)); 


//

//-------------------------------------------------------------------------------------------------

// 7 filter()

// Bu kod 5ci taskdaki olan kodla eyni mentiqde isleyir, sadece olaraq deyisken yaradilib
// Sert qoyulub ve True olan iterable elementler ora pushlanib ve consola cixarilib

// Array.prototype.customFilter = function(callback) {
//     let filteredArr = [];
//     for(let i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {
//             filteredArr.push(this[i])
//         }
//     }
//     console.log(filteredArr)
// }

// let myArr = ['2', '2', '4', 6, 5, "salam", false, true];
// let myFilter = myArr.customFilter(function(element) {
//     return typeof element == 'string'
// })

//--------------------------------------------------------------------------------------------------

// 8 every()

//------------------------------------------------------------------------------------------------------

// 9 some()

// Array.prototype.customSome = function(element) {
//     for(let i of this) {
//         if(typeof element === typeof this[i] && element === this[i]) {
//             return element
//         }

//     }
//     return 'not finded'
// }

// let myArr = [4,5,2,5,5,2,]
// console.log(myArr.customSome(3))


// 2-ci usul

// 2 ededinin arrayin icinde olan elementlerin her hansi birine beraber olsa bu zaman some metodunu islet

// Array.prototype.customSome = function(element) {
//     for (let i = 0; i < this.length; i++) {
//         if (element === this[i]) {
//             return true;
//         }
//     }
//     return false;
// };
// let myArr = ['0', '4', '5', '6'];
// console.log(myArr.customSome('2'));  

//----------------------------------------------------------------------------------------------------------------

// 10 reduce()



















