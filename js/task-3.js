/* Task#3: Calculate Element Width*/
'use strict';

function getElementWidth(content, padding, border) { 

    const op1 = parseFloat(content);
    const op2 = 2 * parseFloat(padding);
    const op3 = 2 * parseFloat(border);

    return (op1 + op2 + op3);

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200