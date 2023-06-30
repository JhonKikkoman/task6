import { orderByProps, specialPower } from '../legend';

describe('testing function orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  test('should transform object into array', () => {
    const result = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    const receiver = orderByProps(obj, ['name', 'level']);
    expect(receiver).toEqual(result);
  });
  test('check in condition expressions', () => {
    const result = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];
    const receiver = orderByProps(obj, ['damage', 'ignore']);
    expect(receiver).toEqual(result);
  });
});

describe('testing function specialPower', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  test('function return new property description', () => {
    const result = [
      {
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
        id: 8,
        name: 'Двойной выстрел',
      },
      {
        description: 'Описание не доступно',
        icon: 'http://...',
        id: 9,
        name: 'Нокаутирующий удар',
      },
    ];
    const receiver = specialPower(character);
    expect(receiver).toEqual(result);
  });
});
