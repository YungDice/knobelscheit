import { assertEquals } from "@std/assert";
import { Dice } from "./dice.ts";

Deno.test("Dice: number from 1 - 6",() => {
    const value = new Dice();

    value.roll();

    assertEquals(value.number >= 1 && value.number <= 6, true);
});

Deno.test("Dice: number from 2 - 12",() => {
    const value1 = new Dice();
    const value2 = new Dice();

    value1.roll();
    value2.roll();

    const summe = value1.number + value2.number;

    assertEquals(summe >= 2 && summe <= 12, true);
});