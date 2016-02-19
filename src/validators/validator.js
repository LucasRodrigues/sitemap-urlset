import ChangeFreqValidator from './changeFreqValidator';
import LocValidator from './locValidator';
import PriorityValidator from './priorityValidator';

export default class Validator{

  static validate(item){
    const validators = [ChangeFreqValidator,LocValidator,
      PriorityValidator];

    let result = true;
    validators.forEach(validator => {
      result &= validator(item);
    });

    return result;
  }

}