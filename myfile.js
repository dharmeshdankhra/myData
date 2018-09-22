fs = require('fs');
const axios = require('axios');
async = require('async');

let counter = 0;
let errrr = 0;
let data = [];
const runDemo = async () => {
  fs.readFileSync('mydata1.txt').toString().split('\n')
  .forEach(function (line, index) {
    getData(line, index);
  })
}

const getData = (line, index) => {
  if (line) {
    setTimeout(function () {
      axios.get(`https://api.etherscan.io/api?module=account&action=balancemulti&address=${line}&tag=latest&apikey=YourApiKeyToken`)
      .then(response => {
        response.data && response.data.result && response.data.result.map((data) => {
          console.log(`Line No :- ${index}.  ${data.account}      ${data.balance}     Ac No:- ${counter++}`)
        });
      })
      .catch(error => {
        console.log(errrr++);
      });
    }, 1000 * index);
  }
}

runDemo();

