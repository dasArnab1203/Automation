const request = require('request')
const cheerio = require('cheerio')


console.log("before")


request('https://www.worldometers.info/coronavirus/' , cb)

function cb(error, response, body){
    if(error){
      console.error(error);   
    }else{
        handleHtml(html);
    }
}

function handleHtml(html){
    let setTool = cheerio.load(html)

    console.log(setTool)
}


console.log("after")