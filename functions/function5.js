// var data = "india";
// data.indexOf("i")

function indexOf(data, p) {
    //"india" , p ="i"

    //ahmedabad , p = "m"
  let index = -1;
  for (let i = 0; i < data.length; i++) {
    //data[0] == "a" == "m"
    //data[1] == "h" == "m"
    //data[2] == "m" == "m"
    if (data[i] == p) {
        //0 = 0
        //2 = 2
      index = i;
      break;
    }
  }

  return index; //0
}


//var index = indexOf("india","i")
var index = indexOf("ahmedabad","m")
console.log(index);
