
export default class UrlGenerator {

  static generate(items) {
    let result = '';

    items.forEach(item => {
      result += this._itemGenerate(item);
    });

    return result;
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
