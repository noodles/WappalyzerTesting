# OceanWP Theme Detection & Testing

TODO: update script link
This [script](https://github.com/noodles/WappalyzerTesting/blob/main/astraScraper.js) was used to generate a list of OceanWP URLs from this [Over 15 Top Examples of Websites Using The OceanWP WordPress Theme (2021)](https://wpdonuts.com/examples-of-websites-using-oceanwp/).

When tested using the code above, all version numbers detected matched the pattern assigned to [OceanWP change log](https://docs.oceanwp.org/article/653-oceanwp-theme-changelog) (1.0.0 - 3.0.2).

      

| URL | Theme | Version | Comment |
| ---------- |:-------------:| :-----:|
|https://www.aprimoredecor.com.br | OceanWP | 1.0|
|https://www.connectcue.com | OceanWP | 1.0|
|https://quarteldesign.com | OceanWP | 1.0.0|
|https://la-solargroup.com | OceanWP | 1.0|
|https://northhillschurch.com | OceanWP | 1.0|
|https://hearttomarket.com | OceanWP | 1.7.2|
|https://splhelmet.com | OceanWP | 2.0.2|
|http://www.strategycom.eu | OceanWP | 2.0.7|
|http://ema-locksmith.com | OceanWP | N/A|
|https://hopefoods.com | OceanWP | N/A|
|https://refrescandonegocios.com | OceanWP | N/A|
|http://woodennickelsportsbar.com | OceanWP | N/A|
|https://www.webtimiser.de | OceanWP | N/A| 
|https://progreso.com.sg | No theme detected | N/A| Time out |


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
