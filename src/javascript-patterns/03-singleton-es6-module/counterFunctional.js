// counterFunctional.js
let counter = 0;

export function increment(){ return ++counter; }
export function decrement(){ return --counter; }
export function getCount(){ return counter; }