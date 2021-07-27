# Astra WP Theme Detection & Testing

Entry in technologies.json file for Detecting Astra theme:

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

This [script](https://github.com/noodles/WappalyzerTesting/blob/main/astraScraper.js) was used to generate a list of Astra WP URLs from this [Astra Wordpress Theme Examples site](https://winningwp.com/astra-wordpress-theme-examples/).
When tested using the code above, the following was detected:
      

| URL | Theme | Version |
| ---------- |:-------------:| :-----:|
| https://www.wunderwuzzi.at |Astra|3.6.5|
| https://www.kuumbwajazz.org/ |Astra|2.0.9|
| https://www.somoswir.com/ |Astra|3.4.6|
|https://broilkingbbq.com/|Astra|N/A|
|https://www.baconscouts.com/|Astra|2.4.5|
|https://www.torgesonelectric.com/|Astra|3.1.2|
|https://www.childrenandwar.org/|Astra|3.6.5|
|https://ikbenonbetaalbaar.nl/|Astra|N/A|
|https://grmfamilylaw.com/|Astra|1.6.2|
|https://dukerichards.com/|Astra|2.6.2|
|https://www.coloradosbdc.org/|Astra|2.0.9|
|https://www.smartchameleon.top/|Astra|N/A|
|https://hijabprintingbandung.com/|Astra|2.4.5|
|https://bakerroofing.com/|Astra|N/A|
|https://naturtintusa.com/|Hello Elementor|N/A|
|https://winningwp.com/ref/astra-wordpress-theme/|Astra|3.6.5|
|https://thefoxesphotography.com/|Astra|3.0.2|
|https://www.easythemepacks.com/|Astra|3.4.2|
|https://www.australiancosmeticinstitute.com.au/|Astra|N/A|
|https://kbsci.com/|Astra|3.0.1|
|https://www.nosleeplessnights.com/|Astra|3.6.2|
|https://www.bertuccis.com/|Astra|1.6.4|
|https://www.floridacollege.edu/|Astra|2.4.5|
|https://www.danaosbornedesign.com/|Astra|3.6.5|
|https://dartingbasketball.com|Astra|3.3.3|
|https://bloggingx.com/|Astra|N/A|
|https://www.neoncollective.one|Astra|N/A|
|https://www.jorgebarragan.net|Astra|3.6.2|
