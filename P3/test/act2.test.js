const {calcularTotal} = require("../src/js/act2.js")

test('carrito vacío tiene total 0', () => {
  const carrito = [];
  expect(calcularTotal(carrito)).toBe(0);
});

test('cosas', () => {
    const carrito = [{nombre: 'laptop', precio: 1000}];
    expect(calcularTotal(carrito)).toBe(1000);
});

test('carrito con varios productos suma todos los precios', () => {
  const carrito = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 100 }
  ];
  expect(calcularTotal(carrito)).toBe(1100);
});


test('Precio mal asignado', () => {
  const carrito = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'Teclado gamer RGB UTD', precio: "2400" }
  ];
  expect(() => calcularTotal(carrito)).toThrow(Error);
});

/*
test('Precio mal asignado', () => {
  const carrito = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'Teclado gamer RGB UTD', precio: "2400" }
  ];
  expect(calcularTotal(carrito)).toBe("Error");
});
*/