import objectSizeOf from 'object-sizeof';

export default class UrlGenerator {

  static generate(items) {
    const sizeLimitInBytes = 9e+6;
    const results = [];
    let urls = '';

    items.forEach((item,index) => {
      urls += this._itemGenerate(item);

      const isOnLimitSize = (objectSizeOf(urls) >= sizeLimitInBytes);
      const isLastItem = (index === items.length -1);
      if (isOnLimitSize || isLastItem){
        results.push(urls);
        urls = '';
      }
    });

    return results;
  }

  static _itemGenerate(item) {
    let innerXml = '';

    if (item.lastmod) {
      const templateLastMod = `<lastmod>${item.lastmod}</lastmod>`;
      innerXml += templateLastMod;
    }
    if (item.changefreq) {
      const templateChangeFreq = `<changefreq>${item.changefreq}</changefreq>`;
      innerXml += templateChangeFreq;
    }
    if (item.priority) {
      const templatePriority = `<priority>${item.priority}</priority>`;
      innerXml += templatePriority;
    }
    innerXml += `<loc>${item.loc}</loc>`;

    const template =
    `<url>${innerXml}</url>`;

    return template;
  }
}
