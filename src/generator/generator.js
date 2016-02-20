import UrlGenerator from './urlGenerator';
import UrlSetGenerator from './urlSetGenerator';
import chunk from 'chunk';

export default class Generator {
  static generate(items) {
    const sizeLimit = 50000;
    let urlSets = [];
    const chunksItems = chunk(items, sizeLimit);

    chunksItems.forEach(chunkItem => {
      const urls = UrlGenerator.generate(chunkItem);
      urlSets.push(UrlSetGenerator.generate(urls));
    });

    return urlSets;
  }
}