const request = require('request-promise');
/*
  $ npm install --save request request-promise
*/

const main = async () => {
  try {
    const res = await request('url');
    const {name} = JSON.parse(res);

    console.log(name);
  } catch (err) {
    console.log(err);
  }
}

main();
