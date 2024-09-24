var marks = [22,23,24,23,20,18]
var flag = false
//some...

for(let i=0;i<marks.length;i++){

    //22>=24 == false
    //23>=24 == false
    //24>=24 == true
    if(marks[i]>=24){
        flag = true //flag = true
        break
    }

}

console.log("is 24 present in marks ",flag)