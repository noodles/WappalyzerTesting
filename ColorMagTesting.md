# Color Mag Theme Detection & Testing

A list of Color Mag URLs was sraped from this [site](https://wpslug.com/wordpress/theme/colormag/websites/).

When tested using the code above, all version numbers detected matched those outlined in the [ColorMag WP theme change log](https://themegrill.com/changelogs/colormag-changelog/).
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://health.mingpao.com | ColorMag | N/A|
|http://health.mingpao.com | ColorMag | N/A|
|http://blockchaind.net | ColorMag | 5.5.5|
|http://www.viraltowns.com | No theme detected | N/A|
|https://www.stars-hk.com/ | No theme detected | N/A|



Entry in technologies.json file for Detecting Sydney theme:

```       "ColorMag": {
      "cats": [
        80
      ],
      "description": "ColorMag theme is for creating news, magazine, newspaper and other kinds of publishing sites. Compatible with Elementor.",
      "icon": "themegrill.png",
      "dom": {
        "link[id*='colormag-style']": {
          "attributes": { 
            "href": "colormag.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "body[class*='colormag-theme']": {
          "text": ""
        }
      },
      "scripts": "themes/colormag.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "requires": "WordPress",
      "website": "https://themegrill.com/themes/colormag/"
    }
```