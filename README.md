# TwoConts — Istanbul, from two continents

A focused, responsive static guide to Istanbul. The site guides visitors through:

```
Istanbul → European / Asian side → area → category → TwoConts recommendations
```

## What changed

- The homepage is now a TwoConts Istanbul guide rather than a general Turkey travel blog.
- Visitors can switch between the European and Asian sides, then choose an area.
- Category filters are ready for Food, Cafés, Culture, Nightlife, Hidden Places, Bosphorus, and Shopping.
- Recommendations are data-driven, so adding a place does not require changing the page layout.

## Add a recommendation

Open `assets/js/twoconts-data.js` and add an item to the `places` list:

```js
{
  id: "unique-place-id",
  side: "europe",
  area: "karakoy",
  category: "cafes",
  name: "Place name",
  kicker: "A short useful label",
  description: "Why TwoConts recommends it.",
  tip: "A helpful local tip",
  image: "assets/img/your-photo.jpg"
}
```

The site will automatically put it in the correct side, area, and category.

## Main files

- `index.html` — homepage
- `assets/css/twoconts.css` — focused TwoConts design
- `assets/js/twoconts-data.js` — areas, categories, and recommendations
- `assets/js/twoconts.js` — interactive guide behaviour

## Publishing

The live site https://twoconts.com is served by the GitHub-connected Cloudflare Pages project `twoconts`. Pushing to `main` triggers production deployment. The older `twocontinents` project is a separate direct-upload project.

Before publishing, check both JavaScript files with `node --check` and verify area/category navigation in a browser. Local place photos include source and license attribution in the data file. Images showing the surrounding neighbourhood rather than the named venue are captioned accordingly.
