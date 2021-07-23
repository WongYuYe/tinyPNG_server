## tinypng nodejs 脚本

### 支持
- 单文件(jpg or png)
- 目录(该目录下所有jpg和png文件)

### 使用
#### npm i

#### 修改index.js
```js
  // 设置key，登录https://tinify.com/dashboard/api查看
  tinify.key = "xxxxxxxxxxxxxxxx";
  ...
  // 设置本地文件或目录，绝对路径或相对路径，windows路径\需转译
  const filePath = 'C:\\Users\\Administrator\\Downloads';

  // 单个文件压缩为xx_c.xxx，目录会新建Compressed文件夹，并保存到此文件夹下
```

#### npm run compress


