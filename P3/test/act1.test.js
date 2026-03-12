const {calcularCobro} = require("../src/js/act1.js")

test("0 horas corresponde a $0", () => {
    expect(calcularCobro(0)).toBe(0);
});

test("1-2 horas corresponde a $30", () => {
    expect(calcularCobro(2)).toBe(60);
});

test("3-5 horas corresponde a $25", () => {
    expect(calcularCobro(4)).toBe(100);
});

test("Más de 5 horas corresponde a $20", () => {
    expect(calcularCobro(6)).toBe(120);
});

test("No se pueden hacer horas negativas", () => {
    expect(() => calcularCobro(-3)).toThrow(Error);
});

/*
test("No se pueden hacer horas negativas", () => {
    expect(calcularCobro(-3)).toBe("Error: no se puede hacer horas negativas");
});
*/