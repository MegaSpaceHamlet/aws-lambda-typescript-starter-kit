const handler = require('./dist/index').handler;

const test = {
  body: JSON.stringify({
    message: "Hello, World"
  })
};

handler(test).then((s) => {
  console.log(s);
}).catch(e => console.error(e));
