export default class ChangeFreqValidator{

  static validate (changeFreq){

    const acceptValues = ['always',
      'hourly','daily','weekly',
      'monthly','anual','never'];

    return acceptValues.indexOf(changeFreq) >= 0;
  }
}