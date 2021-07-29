# Generate Press Theme Detection & Testing

A list of [Generate Press](https://generatepress.com/) URLs was sraped from this [site](https://wpslug.com/wordpress/theme/colormag/websites/).

When tested using the code above, all version numbers detected matched those outlined in the [Generate Press release list](https://generatepress.com/category/development/).
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://health.mingpao.com | ColorMag | N/A|
|http://health.mingpao.com | ColorMag | N/A|
|http://blockchaind.net | ColorMag | 5.5.5|
|http://www.viraltowns.com | No theme detected | N/A|
|https://www.stars-hk.com/ | No theme detected | N/A|



Entry in technologies.json file for Detecting Sydney theme:

```       "GeneratePress": {
      "cats": [
        80
      ],
      "description": "GeneratePress is a lightweight WordPress theme that focuses on speed, stability, and accessibility",
      "icon": "generatepress.png",
      "dom": {
        "link[id*='generatepress-style']": {
          "attributes": { 
            "href": "generatepress.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "link[id*='generate-style']": {
          "attributes": { 
            "href": "generatepress.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "body[class*='generatepress-theme']": {
          "text": ""
        }
      }
      "scripts": [
        "themes/generatepress.*\\.js\\?ver=([0-9.]+)\\;version:\\1"
      ],
      "requires": "WordPress",
      "website": "https://generatepress.com/"
    }
```