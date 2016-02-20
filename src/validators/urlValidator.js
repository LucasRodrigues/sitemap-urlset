import ChangeFreqValidator from './urlChangeFreqValidator';
import LocValidator from './urlLocValidator';
import PriorityValidator from './urlPriorityValidator';

export default class UrlValidator {

  static validate(item) {
    const validators = [ChangeFreqValidator, LocValidator,
      PriorityValidator];

    let result = {
      status: true,
      messages: []
    };
    validators.forEach(validator => {
      const validatorResult = validator(item);

      result.status &= validatorResult.status;
      if (!validatorResult.status) {
        result.messages.concat(validatorResult.messages);
      }
    });

    return result;
  }
}
