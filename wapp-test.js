const Wappalyzer = require('/Users/hallrichard/Documents/GitHub/themealyzer/wappalyzer/src/drivers/npm/');
const csv = require('csv-parser')

const fs = require('fs')
const urls = []

fs.createReadStream('astra_urls.csv')
  .pipe(csv())
  .on('data', (data) => urls.push(data.url))
  .on('end', () => {

    const wappalyzer = new Wappalyzer()

;(async function() {
  try {
    await wappalyzer.init()

    const results = await Promise.all(
      urls.map(async (url) => ({
        url,
        results: await wappalyzer.open(url).analyze()
      }))
    )
    
    var outputCSV = ''

    for (var i = 0; i < results.length; i++){

        var technologies = results[i].results.technologies
        var url = results[i].url

        for (var j = 0; j < technologies.length; j++){

            var categories = technologies[j].categories
    
            for (var k = 0; k < categories.length; k++){
    
                if(categories[k].id == 80) {
                    
                  
                    if (outputCSV.length > 0) outputCSV += '\n'
                    outputCSV += url + ', ' + technologies[j].name + ', '
                    //Check if version number has been detected & print N/A if it hasn't
                    if (technologies[j].version) {
                        outputCSV += technologies[j].version
                    } else {
                        outputCSV += 'N/A'
                    }
                    
                } 
                
            }
        }

    }

    console.log(outputCSV)

  } catch (error) {
    console.error(error)
  }

  await wappalyzer.destroy()
})()

  }
);