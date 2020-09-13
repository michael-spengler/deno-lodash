import Lodash from './lodash.ts';

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = Lodash.first(words);
let lel = Lodash.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);