import { ld } from 'https://deno.land/x/deno_lodash/mod.ts';

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = ld.first(words);
let lel = ld.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);