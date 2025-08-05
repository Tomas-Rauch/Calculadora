
const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

test('deve somar números negativos corretamente', () => {
  expect(somar(-5, -3)).toBe(-8);
});

test('deve subtrair com número negativo corretamente', () => {
  expect(subtrair(-10, 5)).toBe(-15);
});

test('deve multiplicar com número negativo corretamente', () => {
  expect(multiplicar(-4, 3)).toBe(-12);
});

test('deve dividir número negativo corretamente', () => {
  expect(dividir(-9, 3)).toBe(-3);
});

test('deve lidar com null ou undefined', () => {
  expect(() => somar(null, 5)).toThrow();
  expect(() => subtrair(undefined, 2)).toThrow();
  expect(() => multiplicar(null, null)).toThrow();
  expect(() => dividir(undefined, 1)).toThrow();
});

test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(50, 10)).toBe(5);
  expect(porcentagem(200, 25)).toBe(50);
});