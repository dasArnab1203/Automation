const treeModule = require('./commands/tree');
const organizeModule = require('./commands/organize');
const helpModule = require("./commands/help");
const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2);



let command = inputArr[0];
switch (command) {
  case "tree":
    treeModule.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeModule.organizeKey(inputArr[1]);
    break;
  case "help":
    helpModule.helpkey();
    break;

  default:
    console.log("PLEASE ENTER A VALID COMMAND");
    break;
}



