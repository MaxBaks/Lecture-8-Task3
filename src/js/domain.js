import ErrorRepository from './errorRepository';

export default class Settings {
  constructor() {
    this.userSettings = new Map();
    this.defaultSettings = new Map();

    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');
    this.possibleSettings = new Map();
    this.possibleSettings.set('theme', ['dark', 'light', 'gray']);
    this.possibleSettings.set('music', ['trance', 'pop', 'chillout', 'off']);
    this.possibleSettings.set('difficulty', ['easy', 'normal', 'hard', 'nightmare']);
  }

  setOption(key, value) {
    try {
      if (!this.defaultSettings.has(key)) {
        throw new Error(1);
      }
      if (this.possibleSettings.get(key).find(x => x === value) === undefined) {
        throw new Error(2);
      } else {
        this.userSettings.set(key, value);
      }
    } catch (errCode) {
      const errs = new ErrorRepository();
      return errs.getError(Number(errCode.message));
    }

    return this.userSettings;
  }

  get settings() {
    this._settings = this.defaultSettings;
    for (const key of this.userSettings.keys()) {
      this._settings.set(key, this.userSettings.get(key));
    }

    return this._settings;
  }
}
