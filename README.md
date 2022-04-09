<h1 align="center"> MM5-Encrypt-Pass 

![NodeJS](https://img.shields.io/badge/Nodejs-339933?style=flat&logo=node.js&logoColor=black)
![md5](https://img.shields.io/npm/v/md5?style=flat&logo=npm)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zubayer-47/MM5-Encrypt-pass/main)

</h1>

### 💻 Can be use for Encrypt user password and match also 🙉


```node
const mm5 = new MM5();

const db = {};

db.uname = 'Zubayer'
db.pass = mm5.encrypt('za@')

const payload = mm5.matchHash(db.pass, 'za@', true)
console.log(payload);

```

### 👨‍💻 Author - [ZubayerJS](https://github.com/zubayer-47)
