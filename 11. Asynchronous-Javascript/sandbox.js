// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//    if (request.readyState === 4 && request.status === 200) {
//       console.log(request, request.responseText);
//    } else if (request.readyState === 4) {
//       console.log("could not fetch the data");
//    }
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
// request.send();

/** ========================== CALLBACK FUNCTION ============================= */
// const getTodos = (callback) => {
//    const request = new XMLHttpRequest();

//    request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//          const data = JSON.parse(request.responseText);
//          callback(undefined, data);
//       } else if (request.readyState === 4) {
//          callback("could not fetch data", undefined);
//       }
//    });

//    request.open("GET", "todos.json");
//    request.send();
// };

// getTodos((err, data) => {
//    console.log("callback fired");
//    if (err) {
//       console.log(err);
//    } else {
//       console.log(data);
//    }
// });

/** ========================== CALLBACK FUNCTION PT 2 (CALLBACK HELL) ============================= */
const getTodos = (resource, callback) => {
   const request = new XMLHttpRequest();

   request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
         const data = JSON.parse(request.responseText);
         callback(undefined, data);
      } else if (request.readyState === 4) {
         callback("could not fetch data", undefined);
      }
   });

   request.open("GET", resource);
   request.send();
};

getTodos("todos/luigi.json", (err, data) => {
   console.log(data);
   getTodos("todos/mario.json", (err, data) => {
      console.log(data);
      getTodos("todos/shaun.json", (err, data) => {
         console.log(data);
      });
   });
});
