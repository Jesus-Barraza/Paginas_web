const {act3} = require("../src/JS/act3.js")

test ("a es un palíndromo", () => {
    expect(act3("a")).toBe(true);
});

test ("2 es un número palindrómico", () => {
    expect(act3(2)).toBe(true);
});

test ("- no es un palíndromo", () => {
    expect(act3("-")).toBe(false);
});

test ("false no es un tipo de valor válido", () => {
    expect(act3(false)).toBe(false);
});

test ("ab no es un palindromo", () => {
    expect(act3("ab")).toBe(false);
});

test ("vacío es falso", () => {
    expect(act3("")).toBe(false);
});

test ("34 no es un número palindrómico", () => {
    expect(act3(34)).toBe(false);
});

test ("343 es un número palindrómico", () => {
    expect(act3(343)).toBe(true);
});

test ("palíndromo multipalabra", () => {
    expect(act3("Dábale arroz a la zorra el abad")).toBe(true);
});

test ("letras y números no cuentan como palíndromos", () => {
    expect(act3("34ana43")).toBe(false);
});