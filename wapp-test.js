const Wappalyzer = require('/Users/hallrichard/Documents/GitHub/themealyzer/wappalyzer/src/drivers/npm/');
const csv = require('csv-parser')

const fs = require('fs')
const urls = []

fs.createReadStream('astra_urls.csv')
  .pipe(csv())
  .on('data', (data) => urls.push(data.url))
  .on('end', () => {

    const wappalyzer = new Wappalyzer()

      ; (async function () {
        try {
          await wappalyzer.init()

          const results = await Promise.all(
            urls.map(async (url) => ({
              url,
              results: await wappalyzer.open(url).analyze()
            }))
          )

          var allThemeInfo = []
          

          for (var i = 0; i < results.length; i++) {

            var themeInfo = {}
            var technologies = results[i].results.technologies
            var theme = ''
            var version = ''

            for (var j = 0; j < technologies.length; j++) {

              var categories = technologies[j].categories
              for (var k = 0; k < categories.length; k++) {

                if (categories[k].id == 80) {

                  theme = technologies[j].name
                  //Check if version number has been detected & print N/A if it hasn't
                  if (technologies[j].version) {
                    version = technologies[j].version 
                  }
                } 
              }
              
            }
            themeInfo['url'] = results[i].url
            if(theme.length > 0) {
              themeInfo['theme'] = theme
              if(version.length > 0) {
                themeInfo['version'] = version
              } else {
                themeInfo['version'] ="N/A"
              }
            } else {
              themeInfo['theme'] = "No theme detected"
              themeInfo['version'] ="N/A"
            }
            allThemeInfo.push(themeInfo)
            //console.log(themeInfo)
          }

          // Output for use in table on GitHub
          console.log("| URL | Theme | Version |\n| ---------- |:-------------:| :-----:|")
          allThemeInfo.forEach((themeRow) =>  {
            console.log("|" + themeRow.url + " | " + themeRow.theme + " | " + themeRow.version + "|")
          })

        } catch (error) {
          console.error(error)
        }

        await wappalyzer.destroy()
      })()

  }
  );