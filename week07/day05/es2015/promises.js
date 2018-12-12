const p = new Promise(function(resolve, reject) {
  if (Math.random()<0.5) {
    resolve("success");
  } else {
    reject("this is error message");
  }
});

p.then(function(data) {
  console.log("this worked", data);
});

p.catch(function(err){
console.error("something went wrong",err)
});

