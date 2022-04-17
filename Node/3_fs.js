const fs = require('fs') // File System module

const path = require('path') //Path Module

// let content = fs.readFileSync('fs.txt')

// console.log('This is fs data->' + content)

// fs.writeFileSync('fs1.txt' , 'This is written on fs1')
// console.log('Data written')

// fs.appendFileSync('fs1.txt' , '  This is the 2nd line on fs1')

// fs.unlinkSync('fs1.txt')
// console.log('File Deleted')

//DIRECTORIES

// fs.mkdirSync('My Directory')
// console.log('Directory Created')

//delete directory

// fs.rmdirSync('My Directory')
// console.log('Directory  removed')

// Existance of a directory or folder
let doesExist = fs.existsSync('My Directory')
//console.log(doesExist)

//time and creation of directory
let statsOfDirectory = fs.lstatSync('My Directory')
//console.log(statsOfDirectory)

//whether file or folder
//console.log('isFile?' , statsOfDirectory.isFile())

//readdirSync
let folderpath = 'C:\\Users\\Asus\\Desktop\\WEB DEV\\FJP\\FJP-3-Dev-master\\2_HTML_CSS\\28 Dec 2021\\final\\Node\\My Directory'
let foldercontent = fs.readdirSync(folderpath)
console.log("Directory Content->" + foldercontent)


// Copying Files

//src file , destination path

let srcFilePath = 'C:\\Users\\Asus\\Desktop\\WEB DEV\\FJP\\FJP-3-Dev-master\\2_HTML_CSS\\28 Dec 2021\\final\\Node\\fs.txt'
let destinationPath = 'C:\\Users\\Asus\\Desktop\\WEB DEV\\FJP\\FJP-3-Dev-master\\2_HTML_CSS\\28 Dec 2021\\final\\Node\\My Directory2'

let tobecopiedFileName = path.basename(srcFilePath)
console.log(tobecopiedFileName)

let destPath = path.join(destinationPath , tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log('File Copied')

