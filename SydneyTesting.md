# Sydney Theme Detection & Testing

This [script](https://github.com/noodles/WappalyzerTesting/blob/main/SydneyScraper.js) was used to generate a list of OceanWP URLs from this [10+ Best Sydney Theme Examples (Websites) in 2021](https://happytemplates.com/sydney-theme-examples/).

When tested using the code above, all version numbers detected matched those outlined in the [Sydney WP theme change log](https://athemes.com/changelog/sydney/).
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
|http://www.yogacards.com/ | Sydney | 5.7.2|
|https://www.yospace.com/ | Sydney | 5.7.2|
|https://www.gamefacemedia.com/ | Sydney | 4.9.18|
|http://go.gilbarco.com/ | Sydney | 4.9.18|
|https://blog.website.com/ | Sydney | 1|
|https://eurocase2017.psnc.pl/ | Sydney | 1|
|http://jannieliu.sites.gettysburg.edu/ | Sydney | 1|
|https://www.peegeos.com/ | Sydney | 1|
|https://www.westsystem.com/ | Sydney | 1|



Entry in technologies.json file for Detecting Sydney theme:

```   "Sydney": {
      "cats": [
        80
      ],
      "description": "Sydney is a powerful business theme that provides a fast way for companies or freelancers to create an online presence. Built by aThemes.",
      "icon": "athemes.png",
      "dom": {
        "link[id*='sydney']": {
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