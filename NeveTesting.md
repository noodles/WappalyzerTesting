# Neve Theme Detection & Testing

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://themeisle.com/demo/?theme=neve | Neve | 2.6.4|

Detected version numbers match format in [Neve change log](https://github.com/Codeinwp/neve/blob/master/CHANGELOG.md)

Entry in technologies.json file for detecting Neve theme:

```           
    "Neve": {
      "cats": [
        80
      ],
      "description": "Neve is a super-fast, easily customizable, multi-purpose theme that works perfectly with Gutenberg and the most popular page builders as well as WooCommerce",
      "icon": "themeisle.png",
      "dom": {
        "link[id*='neve-style']": {
          "attributes": { 
            "href": "neve.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "body[class*='neve-theme']": {
          "text": ""
        }
      },
      "scripts": "themes/neve.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "requires": "WordPress",
      "website": "https://themeisle.com/themes/neve/"
    }
```