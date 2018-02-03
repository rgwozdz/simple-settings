
class Setting {

  constructor(obj) {
    this._node = obj;
  }

  get(key){
    if(typeof this._node[key] === 'undefined') {
      throw new Error (`Setting "${key}" is undefined.`)
    } else if (this._node[key] === null ||
      this._node[key] instanceof Array ||
      this._node[key] instanceof RegExp) {
      return this._node[key];
    } else if (typeof this._node[key] === 'object') {
      return new Setting(this._node[key]);
    } else {
      return this._node[key];
    }
  }

  toJS(){
    return Object.freeze(this._node);
  }
}

module.exports = Setting;
