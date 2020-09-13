import { createRequire } from 'https://deno.land/std/node/module.ts';
const Lodash = createRequire(import.meta.url)('./lodash-npm');
export default Lodash;

