# Neve Theme Detection & Testing

A list of [Neve](https://themeisle.com/themes/neve/) URLs was sraped from this [site](https://wpslug.com/wordpress/theme/colormag/websites/).

When tested using the code above, all version numbers detected matched those outlined in the [Generate Press release list](https://generatepress.com/category/development/).
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://health.mingpao.com | ColorMag | N/A|
|http://health.mingpao.com | ColorMag | N/A|
|http://blockchaind.net | ColorMag | 5.5.5|
|http://www.viraltowns.com | No theme detected | N/A|
|https://www.stars-hk.com/ | No theme detected | N/A|



Entry in technologies.json file for Detecting Sydney theme:

```           "Neve": {
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
      }
      "scripts": "themes/neve.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "requires": "WordPress",
      "website": "https://themeisle.com/themes/neve/"
    },
```