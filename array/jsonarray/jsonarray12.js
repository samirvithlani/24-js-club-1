//map : return same length of array
//filter : return same or less length of array
//reduce : return single value

var marks = [12,13,14,15,16]
// var total =0;

// for(let i=0;i<marks.length;i++){
//     total = total+marks[i];
// }
//sum = 0
//m = 12
//12+0 = 12
//12+13 = 25
//25+14 = 39
var total = marks.reduce((sum,m)=>sum+m,0)
console.log(total);

