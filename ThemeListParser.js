const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('50kPlusThemes.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    var technologies = {}

    for (var i=0; i < results.length; i++) {

        var theme = {}

        theme["cats"] = [80]
        theme['description'] = results[i]['description']
        theme['icon'] = results[i]['logo']

        var domString = results[i]['dom']
        if(domString) theme['dom'] = domString.split(",")

        var htmlString = results[i]['html']
        if(htmlString) theme['html'] = htmlString.split(",")

        var pricingString = results[i]['pricing']
        if(pricingString) theme['pricing'] = pricingString.split(",")
        
        theme['requires'] = "WordPress"
        theme['website'] = results[i]['url']

        if(results[i]['name'] != "name") technologies[results[i]['name']] = theme

    }

    //var techJson = 
    console.log(technologies)

    let data = JSON.stringify(technologies);
    fs.writeFileSync('Top11.json', data);

  });
