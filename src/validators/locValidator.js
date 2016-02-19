
export default class LocValidator{

  static validate (loc){
    const validators = [this._validateLength];
    let isValid = true;

    validators.forEach(validator => {
      isValid &= validator(loc);
    });
  }

  static _validateLength(loc){

    const sizeLimit = 2048;

    return loc.length > sizeLimit;
  }
}