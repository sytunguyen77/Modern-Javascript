// Governs how we perform tasks which take some time to complete (e.g. Getting data from a database) (Start something now and finish it later)
// Single threaded
// JavaScript can run ONE statement at a time

console.log(1);
console.log(2);

setTimeout(() => {
   console.log("callback function fired");
}, 2000);

console.log(3);
console.log(4);
