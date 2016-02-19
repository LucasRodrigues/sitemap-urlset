export default class ChangeFreqValidator{

  static validate (item){

    const acceptValues = ['always',
      'hourly','daily','weekly',
      'monthly','anual','never'];

    return acceptValues.indexOf(item.changeFreq) >= 0;
  }
}