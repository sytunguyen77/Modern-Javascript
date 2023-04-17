// arguments & parameters

// const speak = function (name, time) {
//    console.log(`good ${time} ${name}`);
// };

// speak("mario", "morning");

const speak = function (name = "luigi", time = "night") {
   console.log(`good ${time} ${name}`);
};

speak();
speak("shaun");
