/**
 * This class is used to store data in the browser's local storage.
 * @class LocalStorage
 * @method get - Get a value from local storage
 * @method set - Set a value in local storage
 * @method remove - Remove a value from local storage
 * @method clear - Clear all values from local storage
 * @method getAll - Get all values from local storage
 *
 * Remember to use JSON.stringify() and JSON.parse() when storing and retrieving objects.
 */

class LocalStorage {
  constructor() {
    if (!window.localStorage) throw new Error("Local storage is not supported in this browser.");
    this.storage = window.localStorage;
  }

  get(key) {
    const val = this.storage.getItem(key);
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }

  set(key, value) {
    if (typeof value === "object" || Array.isArray(value)) {
      this.storage.setItem(key, JSON.stringify(value));
    } else {
      this.storage.setItem(key, value);
    }
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  getAll() {
    const all = {};
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      all[key] = this.get(key);
    }
    return all;
  }
}
