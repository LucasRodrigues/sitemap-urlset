
export default class UrlGenerator {

  static generate(item) {
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
