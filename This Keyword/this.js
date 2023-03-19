'use strict'


function adder()
{
    return this +1;
}

const oneadder = adder.bind(1);
const twoadder = adder.bind(2);
const threeadder = adder.bind(3);

console.log(oneadder());
console.log(twoadder());
console.log(threeadder());
