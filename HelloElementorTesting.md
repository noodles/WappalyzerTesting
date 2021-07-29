# Hello Elementor WP Theme Detection & Testing

Entry in technologies.json file for Detecting Hello Elementor theme:

```"Astra": {
      "cats": [
        80
      ],
      "description": "Astra is a fast, lightweight, and highly customizable WordPress Theme.",
      "icon": "astra.png",
      "pricing": [
        "low",
        "freemium"
      ],
      "scripts": "themes/astra.*\\.js\\?ver=([0-9.]+)\\;version:\\1",
      "dom": {
        "link[href*='themes/astra',style[id*='astra-theme']": {
          "attributes": { 
            "href": "astra/.*\\.css\\?ver=([0-9.]+)\\;version:\\1"
          }
        },
        "style[id*='astra-theme']": {
          "text": ""
        },
        "body[class*='astra-']": {
          "text": ""
        },
        "script[id*='astra-']": {
          "text": ""
        }
      }
```

TODO: update this section
This [script](https://github.com/noodles/WappalyzerTesting/blob/main/astraScraper.js) was used to generate a list of Astra WP URLs from this [Astra Wordpress Theme Examples site](https://winningwp.com/astra-wordpress-theme-examples/).
When tested using the code above, all version numbers detected matched the pattern assigned to [Astra release versions](https://wpastra.com/changelog/astra-theme/).
      

| URL | Theme | Version | Comment |
| ---------- |:-------------:| :-----:| --------- |
|https://itho.io | Hello Elementor | 2.4.1|
|https://korytko.design | No theme detected | N/A|
|https://www.jorgebarragan.net | Astra | 3.6.2| 
|https://cb4.com | No theme detected | N/A|
|https://blueyandscoot.com.au | No theme detected | N/A|
|https://www.tophatclassics.com | No theme detected | N/A|
|https://meliusconsulting.com.au | No theme detected | N/A|
|https://www.shiraleffel.com | No theme detected | N/A|
|https://www.londonyouthgames.org | GeneratePress | 3.0.4|
|https://www.australiancosmeticinstitute.com.au | Astra | N/A|
|https://graycoatings.com | Astra | 3.3.3|
|https://kbenterprise.in | No theme detected | N/A|
|https://www.covidphotodiaries.org/ | OceanWP | 2.0.9|
|https://r11.solutions | No theme detected | N/A|
|https://www.vitalhat.com | No theme detected | N/A|
|https://jwmountaineering.com/ | Hello Elementor | 2.4.1|
|https://rockscape.ca | No theme detected | N/A|
|https://wint.ai | No theme detected | N/A|
|https://vstavridis.gr/ | OceanWP | N/A|
|https://www.theperfectloaf.com/ | No theme detected | N/A|
|https://onebeat.studio | Hello Elementor | 2.4.1|
|https://dd-design.de | No theme detected | N/A| Elementor |
|https://www.mrlenses.com | GeneratePress | 2.0.8|
|https://www.soliddigital.com | No theme detected | N/A| Elementor |
|https://festivart.gr/en/ | No theme detected | N/A| ?? has Hello stylesheet |
|http://www.childrenandwar.org | Astra | 3.6.5|
|https://www.epicongroup.com | Hello Elementor | 2.2.0|
|https://steelboxco.com/ | No theme detected | N/A| Elementor based |
|https://dartingbasketball.com | Astra | 3.3.3|
|https://thefoxesphotography.com | Astra | 3.0.2|
|https://www.lechrudnicki.com | Astra | N/A|
|https://bringingweb.com | Astra | 3.2.0|
|http://theverahotel.com | No theme detected | N/A| toscana - WooCommerce |
|https://chikitchen.com/ | No theme detected | N/A| jupiterx-child |
|https://www.neoncollective.one/ | Astra | N/A| litespeed? wp instead of wordpress |
|https://www.dizajnar.com/en/home/ | No theme detected | N/A|
|https://www.inspire-shoots.com | Hello Elementor | 2.3.1|
|https://www.thewisetravellers.com/ | No theme detected | N/A|
|https://freehorseworkwear.com | Hello Elementor | 5.7.2|
|https://www.ofias.dk | OceanWP | 2.0.4|
|https://phroommagazine.com/ | Hello Elementor | 2.4.1|
|https://mars.idolaish.com | Hello Elementor | 5.2.1|
|https://naturtintusa.com/ | Hello Elementor | 2.3.1|
|https://itho.io | Hello Elementor | 2.4.1|
|https://korytko.design | No theme detected | N/A|
|https://www.jorgebarragan.net | Astra | 3.6.2|
|https://cb4.com | No theme detected | N/A|
|https://blueyandscoot.com.au | No theme detected | N/A|
|https://www.tophatclassics.com | No theme detected | N/A|
|https://meliusconsulting.com.au | No theme detected | N/A|
|https://www.shiraleffel.com | No theme detected | N/A|
|https://www.londonyouthgames.org | GeneratePress | 3.0.4|
|https://www.australiancosmeticinstitute.com.au | Astra | N/A|
|https://graycoatings.com | Astra | 3.3.3|
|https://kbenterprise.in | No theme detected | N/A|
|https://www.covidphotodiaries.org/ | OceanWP | 2.0.9|
|https://r11.solutions | No theme detected | N/A|
|https://www.vitalhat.com | No theme detected | N/A|
|https://jwmountaineering.com/ | Hello Elementor | 2.4.1|
|https://rockscape.ca | No theme detected | N/A|
|https://wint.ai | No theme detected | N/A|
|https://vstavridis.gr/ | OceanWP | N/A|
|https://www.theperfectloaf.com/ | No theme detected | N/A|
|https://onebeat.studio | Hello Elementor | 2.4.1|
|https://dd-design.de | No theme detected | N/A|
|https://www.mrlenses.com | GeneratePress | 2.0.8|
|https://www.soliddigital.com | No theme detected | N/A|
|https://festivart.gr/en/ | No theme detected | N/A|
|http://www.childrenandwar.org | Astra | 3.6.5|
|https://www.epicongroup.com | Hello Elementor | 2.2.0|
|https://steelboxco.com/ | No theme detected | N/A|
|https://dartingbasketball.com | Astra | 3.3.3|
|https://thefoxesphotography.com | Astra | 3.0.2|
|https://www.lechrudnicki.com | Astra | N/A|
|https://bringingweb.com | Astra | 3.2.0|
|http://theverahotel.com | No theme detected | N/A|
|https://chikitchen.com/ | No theme detected | N/A|
|https://www.neoncollective.one/ | Astra | N/A|
|https://www.dizajnar.com/en/home/ | No theme detected | N/A|
|https://www.inspire-shoots.com | Hello Elementor | 2.3.1|
|https://www.thewisetravellers.com/ | No theme detected | N/A| [Kava](https://crocoblock.com/kava/) |
|https://freehorseworkwear.com | Hello Elementor | 5.7.2|
|https://www.ofias.dk | OceanWP | 2.0.4|
|https://phroommagazine.com/ | Hello Elementor | 2.4.1|
|https://mars.idolaish.com | Hello Elementor | 5.2.1|
|https://naturtintusa.com/ | Hello Elementor | 2.3.1|
