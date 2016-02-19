import UrlGenerator from './urlGenerator';

export default class Generator {

  static generate(items) {
    const urls = UrlGenerator.generate(items);
    const urlLimit = 49999;
    let urlsChunks = [];
    for (let i = 0, j = urls.length; i < j; i += urlLimit) {
      urlsChunks.push(urls.slice(i, i + urlLimit));
    }

    let urlSet = [];
    urlsChunks.forEach(urlsChunk => {

      const template = `
        <?xml version="1.0" encoding="utf-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${urlsChunk}
        </urlset>`;

      urlSet.push(template);
    });


    return urlSet;
  }
}
