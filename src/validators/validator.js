import ChangeFreqValidator from './changeFreqValidator';
import LocValidator from './locValidator';
import PriorityValidator from './priorityValidator';

export default class Validator {

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
