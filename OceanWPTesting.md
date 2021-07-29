# OceanWP Theme Detection & Testing

TODO: update this section
This [script](https://github.com/noodles/WappalyzerTesting/blob/main/astraScraper.js) was used to generate a list of Astra WP URLs from this [Astra Wordpress Theme Examples site](https://winningwp.com/astra-wordpress-theme-examples/).
When tested using the code above, all version numbers detected matched the pattern assigned to [Astra release versions](https://wpastra.com/changelog/astra-theme/).
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://www.aprimoredecor.com.br | OceanWP | 1.0|
|https://hearttomarket.com | OceanWP | 1.7.2|
|https://progreso.com.sg | No theme detected | N/A|
|https://www.connectcue.com | OceanWP | 1.0|
|https://www.webtimiser.de | OceanWP | N/A|
|https://refrescandonegocios.com | OceanWP | N/A|
|https://hopefoods.com | OceanWP | N/A|
|http://ema-locksmith.com | OceanWP | N/A|
|https://quarteldesign.com | OceanWP | 1.0.0|
|http://woodennickelsportsbar.com | OceanWP | N/A|
|https://la-solargroup.com | OceanWP | 1.0|
|https://northhillschurch.com | OceanWP | 1.0|
|https://splhelmet.com | OceanWP | 2.0.2|
|http://www.strategycom.eu | OceanWP | 2.0.7|

Entry in technologies.json file for Detecting Hello Elementor theme:

```    "OceanWP": {
      "cats": [
        80
      ],
      "description": "OceanWP is a fast-loading WordPress theme that has great support for third-party plugins and drag-and-drop page builders.",
      "icon": "OceanWP.png",
      "pricing": [
        "low",
        "recurring"
      ],
      "dom": {
        "link[id*='oceanwp']": {
          "attributes": { 
            "href": "oceanwp.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "body[class*='oceanwp-theme']": {
          "text": ""
        }
      },
      "scripts": "themes/oceanwp.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "requires": "WordPress",
      "website": "https://oceanwp.org"
    }
```