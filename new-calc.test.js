const calc = require('./new-calc');
test('Soma 1 e 2 espera 3', () => {
    expect(calc.soma(1, 2)).toBe(3);
})

// Atividade A1.1
test('Soma 17 e 13 espera 30', () => {
    expect(calc.soma(17, 13)).toBe(30);
})

test('Soma -11 e -6 espera -17', () => {
    expect(calc.soma(-11, -6)).toBe(-17);
})

test('Soma 77 e -25 espera 52', () => {
    expect(calc.soma(77, -25)).toBe(52);
})

test('Soma 7 e 0 espera 7', () => {
    expect(calc.soma(7, 0)).toBe(7);
})

test('Soma 9 e "r" espera NaN', () => {
    expect(calc.soma(9, r)).toBe(NaN);
})

// Atividade A1.2
test('Subitrair 30 e 14 espera 16', () => {
    expect(calc.sub(30, 14)).toBe(16);
})

test('Subitrair -90 e -34 espera -56', () => {
    expect(calc.sub(-90, -34)).toBe(-56);
})

test('Subitrair 56 e -18 espera 74', () => {
    expect(calc.sub(56, -18)).toBe(74);
})

test('Subitrair 82 e 0 espera 82', () => {
    expect(calc.sub(82, 0)).toBe(82);
})

// Atividade A1.3
test('Multiplicar 17 e 13 espera 221', () => {
    expect(calc.mult(17, 13)).toBe(221);
})

test('Multiplicar -11 e -6 espera 66', () => {
    expect(calc.mult(-11, -6)).toBe(66);
})

test('Multiplicar 56 e -18 espera -1008', () => {
    expect(calc.mult(56, -18)).toBe(-1008);
})

test('Multiplicar 82 e 0 espera 0', () => {
    expect(calc.mult(82, 0)).toBe(0);
})

// Atividade A2.1
test('Dividir 30 e 15 espera 2', () => {
    expect(calc.div(30, 15)).toBe(2);
})

test('Dividir -90 e -30 espera 3', () => {
    expect(calc.div(-90, -30)).toBe(3);
})

test('Dividir 77 e -7 espera -11', () => {
    expect(calc.div(77, -7)).toBe(-11);
})

test('Dividir 7 e 0 espera 0', () => {
    expect(calc.div(7, 0)).toBe(0);
})