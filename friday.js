//find the longsest set of *'s in string

function findLongest (string){
  var toArray = string.split(" ")
  var toLength = toArray.map(function(elem){
    return elem.length;
  })
  return Math.max.apply( Math, toLength );
}
console.log("should be 8");
console.log(findLongest("* ******** **** **"))

console.log("should be 10");
console.log(findLongest("* **** ********** **"))
