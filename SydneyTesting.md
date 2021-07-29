# Sydney Theme Detection & Testing

This [script](https://github.com/noodles/WappalyzerTesting/blob/main/SydneyScraper.js) was used to generate a list of OceanWP URLs from this [10+ Best Sydney Theme Examples (Websites) in 2021](https://happytemplates.com/sydney-theme-examples/).

When tested using the code above, all version numbers detected matched those outlined in the [Sydney WP theme change log](https://athemes.com/changelog/sydney/).
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|https://www.gamefacemedia.com/ | No theme detected | N/A|
|https://blog.website.com/ | Sydney | N/A|
|https://www.westsystem.com/ | Sydney | N/A|
|http://www.yogacards.com/ | Sydney | 1.39.1497307271|
|https://www.yospace.com/ | Sydney | 5.7.2|
|http://go.gilbarco.com/ | No theme detected | N/A|
|https://www.peegeos.com/ | Sydney | N/A|
|https://eurocase2017.psnc.pl/ | Sydney | N/A|
|http://jannieliu.sites.gettysburg.edu/ | Sydney | N/A|

Entry in technologies.json file for Detecting Sydney theme:

```    "Sydney": {
      "cats": [
        80
      ],
      "description": "Sydney is a powerful business theme that provides a fast way for companies or freelancers to create an online presence. Built by aThemes.",
      "icon": "athemes.png",
      "dom": {
        "link[id*='sydney-style']": {
          "attributes": { 
            "href": "sydney.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "body[class*='sydney-theme']": {
          "text": ""
        }
      },
      "scripts": "themes/sydney.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "requires": "WordPress",
      "website": "https://athemes.com/theme/sydney/"
    }
```