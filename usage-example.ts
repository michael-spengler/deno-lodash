// import Lodash from 'https://x.nest.land/deno-lodash@0.0.1/mod.ts';
import { ld } from './mod.ts';

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = ld.first(words);
let lel = ld.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);