let puppeteer = require('puppeteer')

let browserWillbeLaunchedPromise = puppeteer.launch({
      headless: false,
      defaultViewport: null,

})

browserWillbeLaunchedPromise.then(function(browserInstance){
    let newTabPromise = browserInstance.newPage()
    return newTabPromise;
}).then(function(newTab){
    console.log('New Tab Opened')
    let pageWillbeOpenedPromise = newTab.goto('https://www.pepcoding.com/')
    return pageWillbeOpenedPromise;
}).then(function(){
    console.log('Website opened')
})