// const para = document.querySelector(".error");
// const para1 = document.querySelector("div.error");
// const para2 = document.querySelector("body > h1");

// console.log(para);
// console.log(para1);
// console.log(para2);

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
   console.log(para);
});
console.log(paras);
console.log(paras[2]);

const errors = document.querySelectorAll(".error");
console.log(errors);
