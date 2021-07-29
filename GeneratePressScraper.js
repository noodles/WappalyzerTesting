const rp = require('request-promise');
const cheerio = require('cheerio'); // Basically jQuery for node.js

var options = {
    uri: 'https://wplift.com/generatepress-examples-showcase',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(function ($) {
        // Process html like you would with jQuery...
        // document.querySelector("#post-75808 > div > div > div.col-xxl-9.bp-toc-col > div.bp-content.c-content > p:nth-child(15) > a")
        //console.log($("p > a:contains('Live site'),p > a:contains('Live Site')").length);
        $("p > a:contains('Visit Website')").each((i, link) => {
          const href = link.attribs.href;
          console.log(href);
        });
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
    });

    //#post-30805 > div > p:nth-child(50) > a