let fs = require("fs");

let f1kPromise = fs.promises.readFile("fl.txt");

console.log(f1kPromise);

f1kPromise.then(function(data){      //then means promises are fullfilled
  console.log(data+"");
})

f1kPromise.catch(function(error){   //catch means promises are rejected
    console.log(error+"");                    
  })