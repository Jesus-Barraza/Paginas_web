const {calcularCobro} = require("../src/js/act1.js")

test("0 horas corresponde a $0", () => {
    expect(calcularCobro(0)).toBe(0);
});

test("1-2 horas corresponde a $30", () => {
    expect(calcularCobro(2)).toBe(60);
});