var p1 = Promise.resolve(3);
var p2 = Promise.resolve("fuckall")
var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, "foo");
});

Promise.all([p1, p2, p3]).then(function(values) {
  console.log(values); // [3, 1337, "foo"]
});
