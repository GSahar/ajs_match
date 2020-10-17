import Daemon from '../Daemon';

test('negative attack', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.position = 20;
  const result = daemon.attack;

  expect(result).toEqual(0);
});

test('100% attack', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.position = 1;
  const result = daemon.attack;

  expect(result).toEqual(10);
});

test('50% attack', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.position = 6;
  const result = daemon.attack;

  expect(result).toEqual(5);
});

test('50% attack + stoned', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.stoned = true;
  daemon.position = 6;
  const result = daemon.attack;

  expect(result).toEqual(0);
});


test('100% attack + stoned', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.stoned = true;
  daemon.position = 1;
  const result = daemon.attack;

  expect(result).toEqual(10);
});

test('90% attack + stoned', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.damage(100);
  daemon.stoned = true;
  daemon.position = 2;
  const result = daemon.attack;

  expect(result).toEqual(4);
});

test('get stoned 1', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  const result = daemon.stoned;

  expect(result).toEqual(false);
});

test('get stoned 2', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.stoned = true;
  const result = daemon.stoned;

  expect(result).toEqual(true);
});

test('get position 1', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  const result = daemon.position;

  expect(result).toEqual(1);
});

test('get position 2', () => {
  const daemon = new Daemon('Andy', 'Daemon');
  daemon.position = 2;
  const result = daemon.position;

  expect(result).toEqual(2);
});
