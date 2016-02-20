export default class UrlChangeFreqValidator {

  static validate(item) {
    let result = {
      status: true
    };

    if (item) {
      result = this._isAcceptedValue(item.changeFreq);
    }

    return result;
  }

  static _isAcceptedValue(changeFreq) {
    const acceptValues = ['always',
      'hourly', 'daily', 'weekly',
      'monthly', 'anual', 'never'];

    const rule =
      acceptValues.indexOf(changeFreq) >= 0;

    return rule ?
      {
        status: true
      } :
      {
        status: false,
        messages: [`Value is different from accepts ${acceptValues}`]
      };
  }
}
