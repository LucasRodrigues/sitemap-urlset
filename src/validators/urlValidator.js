import UrlValidatorFactory from './urlValidatorFactory';

export default class UrlValidator {

  static validate(item) {
    const validators = UrlValidatorFactory.get();
    let result = {
      status: true,
      messages: []
    };

    validators.forEach(validator => {
      const validatorResult = validator.validate(item);

      if (!validatorResult.status) {
        result.status = false;
        result.messages.push(validatorResult.messages);
      }
    });

    return result;
  }
}
