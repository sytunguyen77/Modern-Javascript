// variables & block scope
const age = 30;

if (true) {
   // age = 40;
   const age = 40;
   const name = "shaun";
   console.log("inside 1st code block:", age, name);

   if (true) {
      const age = 50;
      console.log("inside 2nd code block:", age);
      var test = "hello";
   }
}

console.log("outside code block:", age, name, test);
