"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 2));
console.log(somarValores('ola', 'tudo bem?'));
console.log(somarValores(1, '15'));
