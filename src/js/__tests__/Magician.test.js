import Magician from '../Magician';


test('negative attack', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.position = 20;
  const result = magician.attack;

  expect(result).toEqual(0);
});

test('100% attack', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.position = 1;
  const result = magician.attack;

  expect(result).toEqual(10);
});

test('50% attack', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.position = 6;
  const result = magician.attack;

  expect(result).toEqual(5);
});

test('50% attack + stoned', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.stoned = true;
  magician.position = 6;
  const result = magician.attack;

  expect(result).toEqual(0);
});


test('100% attack + stoned', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.stoned = true;
  magician.position = 1;
  const result = magician.attack;

  expect(result).toEqual(10);
});

test('90% attack + stoned', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.stoned = true;
  magician.position = 2;
  const result = magician.attack;

  expect(result).toEqual(4);
});

test('get stoned 1', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  const result = magician.stoned;

  expect(result).toEqual(false);
});

test('get stoned 2', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.stoned = true;
  const result = magician.stoned;

  expect(result).toEqual(true);
});

test('get position 1', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  const result = magician.position;

  expect(result).toEqual(1);
});

test('get position 2', () => {
  const magician = new Magician('Andy', 'Magician');
  magician.damage(100);
  magician.position = 2;
  const result = magician.position;

  expect(result).toEqual(2);
});
