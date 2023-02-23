const request = require('request');
const fs = require('fs');
const cmdLineArray = (cmdLine) => {
  return cmdLine.slice(2);
}
let array = cmdLineArray(process.argv);
request(array[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCcode:', response && response.statusCode);
  // console.log('body:', body);
  // console.log(body.length)
  fs.writeFile(array[1], body, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${array[1]}`)
  })
});
