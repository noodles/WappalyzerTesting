# Hestia Theme Detection & Testing

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://www.tradedoubler.com/en/ | Hestia | 1 |
|http://www.formadoresit.es/ | Hestia | 3.0.4 |


Entry in technologies.json file for Detecting Sydney theme:

```
"Hestia": {
      "cats": [
        80
      ],
      "description": "Hestia is a modern WordPress theme for professionals a multipurpose one-page design, widgetized footer, blog/news page, and a clean look.",
      "icon": "themeisle.png",
      "dom": {
        "link[id*='hestia']": {
          "attributes": { 
            "href": "hestia.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "body[class*='hestia-theme']": {
          "text": ""
        }
      },
      "scripts": "themes/hestia.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "requires": "WordPress",
      "website": "https://themeisle.com/themes/hestia/"
    }
```