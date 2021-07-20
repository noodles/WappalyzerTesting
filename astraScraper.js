const rp = require('request-promise');
const cheerio = require('cheerio'); // Basically jQuery for node.js

var options = {
    uri: 'https://winningwp.com/astra-wordpress-theme-examples/',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(function ($) {
        // Process html like you would with jQuery...
        console.log($("p > a:contains('Live site'),p > a:contains('Live Site')").length);
        $("p > a:contains('Live site'),p > a:contains('live site')").each((i, link) => {
          const href = link.attribs.href;
          console.log(href);
        });
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
    });

    //#post-30805 > div > p:nth-child(50) > a