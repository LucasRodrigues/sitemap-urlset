
export default class UrlGenerator {

  static generate(items) {
    let result = '';

    items.forEach(item => {
      result += this._itemGenerate(item);
    });

    return result;
  }

  static _itemGenerate(item) {
    const template =
    `<url>
        <loc>${item.loc}</loc>
        <lastmod>${item.lastmod}</lastmod>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${item.priority}</priority>
    </url>`;

    return template;
  }
}
