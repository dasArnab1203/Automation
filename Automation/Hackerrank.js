const code = require('./Answers') 
const loginLink = "https://www.hackerrank.com/auth/login";

let email = "pixayig698@toudrum.com";
let password = "hackerrank";

let puppeteer = require("puppeteer");

let page;

let browserWillbeLaunchedPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
});

browserWillbeLaunchedPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    console.log("New Tab Opened");
    page = newTab;
    let pageWillbeOpenedPromise = newTab.goto(loginLink);
    return pageWillbeOpenedPromise;
  })
  .then(function () {
    let typedEmailPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return typedEmailPromise;
  })
  .then(function () {
    let typedPasswordPromise = page.type("input[id='input-2']", password, {
      delay: 100,
    });
    return typedPasswordPromise;
  })
  .then(function () {
    let loginPromise = page.click("button[data-analytics='LoginPassword']", {
      delay: 100,
    });
    return loginPromise;
  }).then(function(){
    let AlgoPromise = waitAndclick(".topic-card  a[data-attr1='algorithms']", page)
    return AlgoPromise;
   }).then(function(){
    let warmupPromise = waitAndclick(".checkbox-wrap input[value ='warmup']", page)
    return warmupPromise;
  }).then(function(){
     let QuestionsArr = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", {delay: 100})
     return QuestionsArr;
  }).then(function(questionsArr){
    console.log("No of Questions " + questionsArr.length)

    let QuestionPromise = questionSolver(page, questionsArr[0], code.answers[0])
  })

  function waitAndclick(selector, cPage)
  {
    return new Promise(function(resolve, reject){
      let waitForElementPromise = cPage.waitForSelector(selector);
      waitForElementPromise.then(function(){
        let AlgoClickPromise = cPage.click(selector, {delay:1000})
        return AlgoClickPromise
      }).then(function(){
        resolve()
      }).catch(function(){
        reject()
      })
    })
  }

  function questionSolver(page, question, ans){
    return new Promise (function(resolve, reject){
      let questionClickedPromise = question.click()
      questionClickedPromise.then(function(){
        return waitAndclick('input.checkbox-input', page)
      }).then(function(){
        return page.waitForSelector('.text-area.custominput')
      }).then(function(){
        console.log('Text Area Selected')
      })
    })
  }


