const {CalcularDescuento} = require("./barrazatorres.js");

test ("El descuento calcula 0", () => {
    expect(CalcularDescuento(0)).toBe(0);
});

test ("El descuento calcula 10% menos del producto", () => {
    expect(CalcularDescuento(500)).toBe(450);
});

test ("El descuento calcula 20% menos del producto a partir de 1001", () => {
    expect(CalcularDescuento(2500)).toBe(2000);
});

test ("El descuento calcula 30% menos del producto a partir de 5001", () => {
    expect(CalcularDescuento(6000)).toBe(4200);
});