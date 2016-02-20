export default class UrlLocValidator {

  static validate(item) {
    let result = {
      status: true
    };
    const requiredResult = this._shouldNotBeNullOrEmpty(item.loc);

    if (!requiredResult.status) {
      result.status = false;
      result.messages = [requiredResult.message];
    } else {
      const lengthResult = this._validateLength(item.loc);
      if (!lengthResult.status) {
        result.status = false;
        result.messages = [lengthResult.message];
      }
    }

    return result;
  }

  static _shouldNotBeNullOrEmpty(loc) {
    return loc ?
      {
        status: true
      } :
      {
        status: false,
        message: 'Loc is not defined, this property is required'
      };
  }

  static _validateLength(loc) {
    const sizeLimit = 2048;
    const rule = loc.length <= sizeLimit;

    return rule ?
      {
        status: true,
        message: ''
      } :
      {
        status: false,
        message: `Loc size limit is ${sizeLimit}`
      };
  }
}
