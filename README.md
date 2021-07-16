## tinypng nodejs 脚本

### 支持
- 单文件(.jpg or png)
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
```

#### npm run compressed


