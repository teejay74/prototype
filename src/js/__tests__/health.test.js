import getHealthPoints from '../health';

test.each([
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
])('%o', (obj, expected) => {
  const result = getHealthPoints(obj);
  expect(result).toBe(expected);
});
