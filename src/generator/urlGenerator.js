import objectSizeOf from 'object-sizeof';

export default class UrlGenerator {

  static generate(items) {
    const sizeLimitInBytes = 9e+6;
    const results = [];
    let urls = '';

    items.forEach((item, index) => {
      urls += this._generateUrl(item);

      const isOnLimitSize = (objectSizeOf(urls) >= sizeLimitInBytes);
      const isLastItem = (index === items.length - 1);
      const isCutRule = isOnLimitSize || isLastItem;
      if (isCutRule) {
        results.push(urls);
        urls = '';
      }
    });

    return results;
  }

  static _generateUrl(item) {
    const contentUrl = this._generatLoc(item) +
        this._generateChangeFreq(item) + this._generateLastMod(item) +
        this._generatePriority(item);

    const template = `<url>${contentUrl}</url>`;

    return template;
  }

  static _generateLastMod(item) {
    return item.lastMod ? `<lastmod>${item.lastMod}</lastmod>` : '';
  }

  static _generateChangeFreq(item) {
    return item.changeFreq ? `<changefreq>${item.changeFreq}</changefreq>` : '';
  }

  static _generatePriority(item) {
    return item.priority ? `<priority>${item.priority}</priority>` : '';
  }

  static _generatLoc(item) {
    return `<loc>${item.loc}</loc>`;
  }
}
