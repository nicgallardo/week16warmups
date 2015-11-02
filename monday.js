//div by three until you reach one
function divByThree (numb){
  if(numb %3 != 0 ){
    if((numb - 1) % 3 == 0){
      var newNumb  = numb -1
      console.log(newNumb);
      go(newNumb)
    }
  }
  if(numb % 3 == 0){
    go(numb)
  };
  function go(number){
    if(number == 0 || number == 1){
      return 1
    }else{
      var goNumber = Math.round(number / 3)
      console.log(goNumber);
      go(goNumber)
    }
  }
};
console.log(divByThree(100));
