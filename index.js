const fs = require('fs')
const path = require('path')
const tinify = require("tinify");

// 设置key，登录https://tinify.com/dashboard/api查看
tinify.key = "tfQ0QcbxN8BGPMRh4hdhnQ6qHMQYtTQn";

// let compressionsThisMonth = tinify.compressionCount;
// console.log('本月剩余次数---------' + compressionsThisMonth + '/500')

// 设置本地文件或目录，绝对路径或相对路径，windows路径\需转译
const filePath = 'C:\\Users\\Administrator\\Downloads\\时光历\\分享海报2.jpg';

// 判断是否为目录
const stat = fs.lstatSync(filePath);
const isDirec = stat.isDirectory();

if (isDirec) {
  fs.readdir(filePath, function (err, files) {
    const fLen = files.length;
    const compressedDirName = 'Compressed';
    const compressedDirPath = path.join(filePath, compressedDirName);
    if (fLen > 0) {
      fs.stat(compressedDirPath, (err, data) => {
        if (data && data.isDirectory()) {
          console.log(`${compressedDirName}目录已存在`);
        } else {
          fs.mkdirSync(compressedDirPath)
          console.log(`创建${compressedDirName}目录成功`);
        }
        for (var i = 0; i < fLen; i++) {
          const file = files[i];
          const filePathItem = path.join(filePath, file);
          const filePathItemCompressed = path.join(filePath, compressedDirName, file)
          fs.stat(filePathItem, (err, data) => {
            if (data.isFile() && isJPGorPNG(file)) {
              console.log(`${file}压缩中---------------`)
              const source = tinify.fromFile(filePathItem);
              source.toFile(filePathItemCompressed);
            }
          })
        }
      })
    }
  });
} else {
  if (!isJPGorPNG(filePath)) {
    console.error(new Error('非jpg或png文件，请重新选择'));
    return
  };
  console.log(`读取${filePath}---------------`)
  const source = tinify.fromFile(filePath);
  console.log('压缩文件---------------')
  const { dir, ext, name } = path.parse(filePath);
  const outPutFile = path.join(dir, name + '_c' + ext)
  source.toFile(outPutFile);
}

function isJPGorPNG(file) {
  return ['.jpg', '.png'].includes(getExtname(file))
}

function getExtname(file) {
  return path.extname(file).toLowerCase()
}
