import Validator from './validators/validator';
import Generator from './generator/generator';

export default class Orchestrator {

  static do(items) {
    let result = {};
    const itemsValidator = Validator.validate(items);

    if (itemsValidator.status) {
      result = {
        status: true,
        urlSet: Generator.generate(items)
      };
    } else {
      result = {
        status: false,
        messages: itemsValidator.messages
      };
    }

    return result;
  }
}
