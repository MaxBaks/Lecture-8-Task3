import ErrorRepository from '../js/errorRepository';
import Settings from '../js/domain';

test('settings should be created correctly', () => {
  const expected = new Map();
  expected.set('theme', 'dark');
  expected.set('music', 'pop');
  expected.set('difficulty', 'hard');

  const test = new Settings();
  test.setOption('music', 'pop');
  test.setOption('difficulty', 'hard');

  expect(test.settings).toEqual(expected);
});

test('error should be shown when setting not exist', () => {
  const expected = Error('Неверная настройка!');

  const test = new Settings();
  const result = test.setOption('notExisting', 'pop');

  expect(result).toEqual(expected);
});

test('error should be shown when setting value not exist', () => {
  const expected = Error('Нет такого значения настройки!');

  const test = new Settings();
  const result = test.setOption('theme', 'colorful');

  expect(result).toEqual(expected);
});


test('unknown error for no code in repository', () => {
  const errs = new ErrorRepository();
  const result = errs.getError(3);

  const expected = Error('Unknown Error');

  expect(result).toEqual(expected);
});
