export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Неверная настройка!');
    this.errors.set(2, 'Нет такого значения настройки!');
  }

  getError(code) {
    if (this.errors.has(code)) {
      return Error(this.errors.get(code));
    }

    return Error('Unknown Error');
  }
}
