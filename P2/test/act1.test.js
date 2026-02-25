const Calculadora = require("../src/JS/Act1.js");

test("2+2=4", () => {
    const calc = new Calculadora(2, 2);
    expect(calc.sumar()).toBe(4);
});

test("suma de caracteres", () => {
    const calc = new Calculadora("a", "b");
    expect(calc.sumar()).toBe(false);
});

test("2-2=0", () => {
    const calc = new Calculadora(2, 2);
    expect(calc.restar()).toBe(0);
});

test("resta de cadenas", () => {
    const calc = new Calculadora("a", "b");
    expect(calc.restar()).toBe(false);
});

test("2*2=4", () => {
    const calc = new Calculadora(2, 2);
    expect(calc.multiplicar()).toBe(4);
});

test("multiplicación de cadenas", () => {
    const calc = new Calculadora("a", "b");
    expect(calc.sumar()).toBe(false);
});

test("2/2=1", () => {
    const calc = new Calculadora(2, 2);
    expect(calc.dividir()).toBe(1);
});

test("2/0=infinito", () => {
    const calc = new Calculadora(2, 0);
    expect(calc.dividir()).toBe(false);
});

test("división de caracteres", () => {
    const calc = new Calculadora("a", "b");
    expect(calc.dividir()).toBe(false);
});