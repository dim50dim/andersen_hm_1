'use strict';
////////// TASK 1 

let figureFirst = +prompt('Number 1', '');
let figureSecond = +prompt('Number 2', '');

function correct(a,b) { 
   if (isNaN(a) || isNaN(b)) {return 'Некорректный ввод'} 
   return Number((figureFirst).toString(figureSecond))
}
    
    console.log(correct(figureFirst,figureSecond));


    /////////// Task 2
  

    
    let numberFirst = +prompt('Number first', '');
    let numberSecond = +prompt('Number second', '');

    
    function correctEnd(x,y) { 
      if(/^(0|[1-9]\d*)$/.test(x) == false ||
        ((y ^ 0) == y && y != '') == false){return 'Некорректный ввод'}
      return `Сумма = ${x+y} Частное = ${x/y}`
      }
    console.log(correctEnd(numberFirst, numberSecond));






        


