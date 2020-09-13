import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ld } from './mod.ts';

Deno.test("sleep for 2 seconds", async (): Promise<void> => {

    let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

    assertEquals('sky', ld.first(words))
    assertEquals('universe', ld.last(words))
});