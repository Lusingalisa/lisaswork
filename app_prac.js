// CALLBACK
/*const fs = require("fs");
// fs is provided by node and it lets us interact with the file system. 
function printResults(err,result){
    console.log(result);
};

fs.readFile("random.txt",{encoding:"utf-8"}, printResults);
 const post=[
    {title:"post one",body:"This is post one"},
    {title:"post two",body:"This is post two"}
 ];*/
/*
// PROMISE
const fs = require("fs");
const readFilePromise = require("./readFilePromise");

const resultPromise=readFilePromise("random.txt")

if (true) {
    console.log(resultPromise.then(result=> console.log(result)))
}
const posts=[
    {title:"post one",body:"This is post one"},
    {title:"post two",body:"This is post two"}
 ];
 */
/*
// Callbacks 
function fetchData(url, callback) {

    // Simulate asynchronous fetch
  
    setTimeout(() => {
  
      const data = { name: "John" };
  
      callback(data); 
  
    }, 1000);
  
  }
  
  
  
  fetchData('/api/user', (user) => {
  
    console.log("User:", user.name);
  
    // Fetch more data based on user
  
    fetchData('/api/posts', (posts) => {
  
      console.log("Posts:", posts);
  
    });
  
  });
*/

// Using a promise
// function fetchData(url) {

//     return new Promise((resolve, reject) => {
  
//       setTimeout(() => {
  
//         const data = { name: "John" };
  
//         resolve(data);
  
//       }, 1000);
  
//     });
  
//   }
  
  
  
//   fetchData('/api/user')
  
//     .then(user => {
  
//       console.log("User:", user.name);
  
//       return fetchData('/api/posts'); // Chain another fetch
  
//     })
  
//     .then(posts => {
  
//       console.log("Posts:", posts);
  
//     })
  
//     .catch(error => {
  
//       console.error("Error:", error);
  
//     });
/*
We can see that when we use a promise instead of a callback, we can have multiple asynchronous operations together by usng .then() 
The .catch() is uused to handle errors, if the promise is rejected, an error message is displayed. This way we can easily debug our code.
*/


// CONVERTING THE CALLBACK-BASED CODE TO PROMISE
/*
const fs=require("fs")
fs.readFile("random.txt","utf-8",(err,data)=>{
    if (err) {
        console.log(`An error has occured:${err}`);
    }
    else {
        console.log(`File content: ${data}`);
    }
});

const fs = require("fs").promises;
fs.readFile("random.txt","utf8")
    .then(data =>console.log(`File content: ${data}`))
    .catch(err => console.log(`An error has occured: ${err}`))
*/ 

// Another example of conversion
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        console.log("All steps completed");
    });
});

// PROMISE
function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

step1()
    .then(() => step2())
    .then(() => console.log("All steps completed"));
