import UrlChangeFreqValidator from './urlChangeFreqValidator';
import UrlLocValidator from './urlLocValidator';
import UrlPriorityValidator from './urlPriorityValidator';

export default class UrlValidatorFactory{
  static get(){
    return [
      UrlChangeFreqValidator,
      UrlLocValidator,
      UrlPriorityValidator
    ];
  }
}