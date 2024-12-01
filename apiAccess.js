let url = "https://6553a36f5449cfda0f2efc2a.mockapi.io/userapi";


// XMLHTTPRequest
let req = new XMLHttpRequest();

req.open("GET",url);

//sending a connection
req.send();

req.onload = function(){
    if(req.status == 200){
    let data1 = JSON.parse(req.response);
    console.log(data1)
    }
    else
    console.log("Failed to fetch data");
}

//Promise along with XMLHTTPRequest

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

let promise = new Promise((resolve,reject)=>{
  
    let reques = new XMLHttpRequest();

    reques.open("GET",url);

    reques.send();

    reques.onload = function(){
        if(reques.status == 200){
        let data = JSON.parse(reques.response);

        resolve(data);
        }
        else{
            reject("Failed to fetch data");
        }
    }
});

promise.then((data)=> console.log(data)).catch((err)=>console.log(err));

