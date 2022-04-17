const path = require('path')


let ext = path.extname('C:\\Users\\Asus\\Desktop\\WEB DEV\\FJP\\FJP-3-Dev-master\\2_HTML_CSS\\28 Dec 2021\\final\\First Website\\index.html')
// gives extension name of file

console.log('Extensioion name-> ' + ext)

let basename = path.basename('C:\\Users\\Asus\\Desktop\\WEB DEV\\FJP\\FJP-3-Dev-master\\2_HTML_CSS\\28 Dec 2021\\final\\First Website\\index.html')
console.log('BaseName -> ' + basename)

console.log(__dirname)// gets current directory path
console.log(__filename)// gets current file path
