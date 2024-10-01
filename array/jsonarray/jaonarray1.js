// var student = {
//     sname:"raj",
//     semail:"raj@gmail.com",
//     sage:23,
// }


var students = [
    {
        sname:"raj",
        sage:23
    },
    {
        sname:"parth",
        sage:24
    }
]
console.log(students)
// console.log(students[0].sname)
// console.log(students[1].sname)

// for(let i=0;i<students.length;i++){

//     console.log(students[i].sname + " " + students[i].sage)
    
// }


students.forEach((stu)=>{

    //console.log(stu)
    console.log(stu.sname + " " + stu.sage)
})

