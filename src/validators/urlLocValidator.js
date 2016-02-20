export default class UrlLocValidator {

  static validate(item) {
    const validators = [this._validateLength, this._shouldNotBeNullOrEmpty];
    let result = {
      status: true,
      messages: []
    };

    validators.forEach(validator => {
      const validatorResult = validator(item.loc);

      result.status &= validatorResult.status;
      if (!validatorResult.status) {
        result.messages.push(validatorResult.message);
      }
    });
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
    const rule = loc.length > sizeLimit;

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
