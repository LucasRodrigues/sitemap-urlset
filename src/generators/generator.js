import UrlGenerator from './urlGenerator';
import UrlSetGenerator from './urlSetGenerator';

export default class Generator {
  static generate(items) {
    let urlSets = [];
    const results = UrlGenerator.generate(items);

    results.forEach(result => {
      urlSets.push(UrlSetGenerator.generate(result));
    });

    return urlSets;
  }
}
