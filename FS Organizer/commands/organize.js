const fs = require("fs");
const path = require("path");

let types = {
  code: [
    "asp",
    "cgi",
    "css",
    "html",
    "js",
    "jsp",
    "php",
    "py",
    "rss",
    "xhtml",
    "c",
    "cpp",
    "cs",
    "java",
    "swift",
  ],
  
  image: [
    "ai",
    "bmp",
    "gif",
    "ico",
    "jpeg",
    "jpg",
    "png",
    "psd",
    "svg",
    "tiff",
  ],
  media: ["midi", "mp4", "mkv", "mp3", "wpl", "flv", "m4v", "mpg", "wmv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz", "pkg", "z"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
    "pps",
    "ppt",
    "pptx",
  ],
  app: ["exe", "dmg", "apk", "deb"],
};

function OrganizeFn(dirpath) {
  let destPath;

  if (dirpath == undefined) {
    console.log("Please Enter a valid path");
    return;
  } else {
    let doesExist = fs.existsSync(dirpath);

    if (doesExist == true) {
      destPath = path.join(dirpath, "Organized_Files");

      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath);
      } else {
        console.log("This folder already exists");
      }
    } else {
      console.log("Enter a valid path");
    }
  }

  OrganizeHelper(dirpath, destPath);
}

function OrganizeHelper(src, dest) {
  let childnames = fs.readdirSync(src);

  for (let i = 0; i < childnames.length; i++) {
    let childAddress = path.join(src, childnames[i]);
    let isFile = fs.lstatSync(childAddress).isFile();
    // console.log(childAddress + " " + isFile);

    if (isFile == true) {
      let fileCatagory = getCatagory(childnames[i]);
      console.log(childnames[i] + " belongs to " + fileCatagory);

      sendFiles(childAddress, dest, fileCatagory);
    }
  }
}

function getCatagory(name) {
  let ext = path.extname(name);
  ext = ext.slice(1);
  //console.log(ext);

  for (let type in types) {
    let ctypeArr = types[type];
    //console.log(ctypeArr);

    for (let i = 0; i < ctypeArr.length; i++) {
      if (ext == ctypeArr[i]) return type;
    }
  }

  return "others";
}

function sendFiles(srcFilePath, dest, fileCategory) {
  let catPath = path.join(dest, fileCategory);

  if (fs.existsSync(catPath) == false) {
    fs.mkdirSync(catPath);
  }

  let filename = path.basename(srcFilePath);
  let destFilePath = path.join(catPath, filename);

  fs.copyFileSync(srcFilePath, destFilePath);

  fs.unlinkSync(srcFilePath);

  console.log(filename + " is copied to " + fileCategory);
}

module.exports = {
  organizeKey: OrganizeFn,
};
