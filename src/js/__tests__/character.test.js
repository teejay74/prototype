import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Zombie from '../zombie';
import Undead from '../undead';
import Swordsman from '../swordsman';

test('класс Character меньше 2 символов', () => {
  expect(() => {
    const recieved = new Character('a', 'Bowman');
    return recieved;
  }).toThrow();
});

test('имя не является строкой', () => {
  expect(() => {
    const recieved = new Character(555, 'Bowman');
    return recieved;
  }).toThrow();
});

test('имя больше 10 символов', () => {
  expect(() => {
    const recieved = new Character('Aaaaaaaaaaaaaa', 'Bowman');
    return recieved;
  }).toThrow();
});

test('несуществующий класс персонажа', () => {
  expect(() => {
    const recieved = new Character('Ivan', 'avenger');
    return recieved;
  }).toThrow();
});

test('тест Bowman', () => {
  const recieved = new Bowman('Teejay', 'Bowman');
  expect(recieved).toEqual({
    type: 'Bowman',
    name: 'Teejay',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('тест Swordsman', () => {
  const recieved = new Swordsman('Teejay', 'Swordsman');
  expect(recieved).toEqual({
    type: 'Swordsman',
    name: 'Teejay',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('тест Magician', () => {
  const recieved = new Magician('Teejay', 'Magician');
  expect(recieved).toEqual({
    type: 'Magician',
    name: 'Teejay',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('тест Daemon', () => {
  const recieved = new Daemon('Teejay', 'Daemon');
  expect(recieved).toEqual({
    type: 'Daemon',
    name: 'Teejay',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('тест Undead', () => {
  const recieved = new Undead('Teejay', 'Undead');
  expect(recieved).toEqual({
    type: 'Undead',
    name: 'Teejay',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('тест Zombie', () => {
  const recieved = new Zombie('Teejay', 'Zombie');
  expect(recieved).toEqual({
    type: 'Zombie',
    name: 'Teejay',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
