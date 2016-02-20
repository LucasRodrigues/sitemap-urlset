
export default class UrlPriorityValidator {

  static validate(item) {
    let result = {
      status: true
    };

    if (item.priority) {
      result = this._acceptedRangeValue(item.priority);
    }

    return result;
  }

  static _acceptedRangeValue(priority) {
    const startRange = 0.0;
    const endRange = 1.0;
    const rule = (
      (priority >= startRange) &&
      (priority <= endRange)
    );

    return rule ?
      {
        status: true
      } :
      {
        status: false,
        messages: [`Priority value ${priority} is not valid,`+
        `should be between ${startRange} and ${endRange}`]
      };
  }
}
