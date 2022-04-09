const md5 = require('md5');

class MM5 {
  encrypt(pass, showMessage = false) {
    let hash = md5(pass);
    let hashedArr = hash.match(/../g)
    let uniqueHash = [...new Set(hashedArr)];

    while (Infinity) {
      if (uniqueHash.length === 16) {
        if (showMessage) console.log(`final ${hash} -U ${uniqueHash.sort()}`);
        return hash;
      } else {
        hash = md5(hash)
        hashedArr = hash.match(/../g)
        uniqueHash = [...new Set(hashedArr)];
      }
    }
  }

  matchHash(hash, pass, showMessage = false) {
    hash = hash;
    pass = this.encrypt(pass);
  
    if (hash === pass) {
      if (showMessage) console.log('passed');
      return {
        status: "true",
        message: "Password Matches Successfully!"
      }
    } else {
      if (showMessage) console.log('wrong')
  
      return {
        status: "false",
        message: "Error! Password Doesn't Match"
      }
    };
  }
}

const mm5 = new MM5()

const db = {};
db.uname = 'Zubayer'
db.pass = mm5.encrypt('za@')

const payload = mm5.matchHash(db.pass, 'za@', true)

console.log(payload);
