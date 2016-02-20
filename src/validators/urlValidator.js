import UrlValidatorFactory from './urlValidatorFactory';

export default class UrlValidator {

  static validate(item) {
    const validators = UrlValidatorFactory.get();
    const result = {
      status: true
    };

    validators.forEach(validator => {
      const validatorResult = validator.validate(item);

      if (!validatorResult.status) {
        result.status = false;
        result.messages = result.messages || [];
        result.messages.concat(validatorResult.messages);
      }
    });

    return result;
  }
}
