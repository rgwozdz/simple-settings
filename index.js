"use strict";

let _settings = new WeakMap();

class Settings {

  constructor(obj) {
    // Use the WeakMap to store as a private member
    _settings.set(this, obj);
  }


  /**
   * Get the value, array, regex, or object assigned to a given key
   * @param key
   * @returns {*}
   */
  get(key){

    // Retrieve the private member
    let settings =_settings.get(this);

    if(typeof settings[key] === 'undefined') {
      // Handle a key that isn't found
      throw new Error (`Setting "${key}" is undefined.`)
    } else if (settings[key] === null || settings[key] instanceof Array || settings[key] instanceof RegExp) {
      // handle null, arrays, and regex
      return settings[key];
    } else if (typeof settings[key] === 'object') {
      // handle object by returning another Settings instance, the will allow chaining to get nested properties
      return new Settings(settings[key]);
    } else {
      // handle primatives
      return settings[key];
    }
  }

  /**
   * Convert Settings instance to a frozen object
   * @returns {Object}
   */
  toJS(){
    return Object.freeze(_settings.get(this));
  }
}

module.exports = Settings;
