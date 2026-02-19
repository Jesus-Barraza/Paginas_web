const {act2} = require("../src/JS/act2.js")

test ("2 es par", () => {
    expect(act2(2)).toBe(true);
});

test("3 no es par", () => {
    expect(act2(3)).toBe(false);
});

test("0 no es par ni impar", () => {
    expect(act2(0)).toBe(false);
});

test("-2 no es par ni impar", () => {
    expect(act2(-2)).toBe(false);
});