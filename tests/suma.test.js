const suma = require("./suma");

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(2, 2)).toBe(3);
});
