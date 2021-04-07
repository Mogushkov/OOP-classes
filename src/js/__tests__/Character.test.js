import Character from '../Character';

test('wrong name > 10', () => {
  expect(() => new Character('ZombieClark', 'Zombie')).toThrowError(new Error('Ошибка! Имя должно содержать от 2 до 10 символов'));
});

test('wrong name < 2', () => {
  expect(() => new Character('Z', 'Zombie')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('missing character type', () => {
  expect(() => new Character('Clark', 'Immortal')).toThrowError(new Error('Ошибка! Персонажа с таким типом не существует'));
});

/* test('wrong name and missing character type', () => {
    expect(() => new Character('ClarkKent12', 'Immortal')).toThrowError(new Error('Ошибка! Имя должно содержать от 2 до 10 символов, тип персонажа должен соответствовать имеющимся типам'));
}); */
