let a = ["ant", "bat", "cat", 42];
// nameless function
a.forEach(function(element) {
  console.log(element);
});

let b = ["ant", "bat", "cat", 42];
//same nameless function, but with the 'Fat arrow' (=>) notation form
b.forEach((element) => {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});