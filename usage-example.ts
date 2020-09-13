import { ld } from 'https://x.nest.land/deno-lodash@1.0.0/mod.ts';

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = ld.first(words);
let lel = ld.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);