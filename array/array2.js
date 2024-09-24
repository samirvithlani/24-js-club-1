var marks = [22,23,21,20,24,12]
var sum =0;
for(let i=0;i<marks.length;i++){

    sum = sum + marks[i]

}
console.log("sum of marks is "+sum)

var max = marks[0] //max = 22

for(let i=0;i<marks.length;i++){

    //marks[0] > 22 == 22 > 22 == false
    //marks[1] > 22 == 23 > 22 == true
    //marks[2] > 23 == 21 > 23 == false
    //marks[3] > 23 == 20 > 23 == false
    //marks[4] > 23 == 24 > 23 == true
    //marks[5] > 24 == 12 > 24 == false

    if(marks[i]>max){
        //max = 23
        //max = 24
        max = marks[i]
    }

}
console.log("marks ",max)


