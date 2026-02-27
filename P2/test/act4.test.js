const {reacomodo} = require("../src/JS/act4.js")

const array1 = [3,2,1];
const res1 = [1,2,3];

const array2 = [4,3,1,1];
const res2 = [1,1,3,4];

const array3 = [2,14,8,9,1,4,7];
const res3 = [1,2,4,7,8,9,14];

test('reacomodo 3,2,1 a 1,2,3', () => {
    expect(reacomodo(array1)).toStrictEqual(res1);
});

test('reacomodo 4,3,1,1 a 1,1,3,4', () => {
    expect(reacomodo(array2)).toStrictEqual(res2);
});

test('reacomodo 2,14,8,9,1,4,7 a 1,2,4,7,8,9,14', () => {
    expect(reacomodo(array3)).toStrictEqual(res3);
});