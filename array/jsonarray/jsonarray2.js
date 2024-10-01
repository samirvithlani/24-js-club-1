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


var uprName = students.map((stu)=>{

    return stu.sname.toUpperCase();
})
console.log(uprName)

var changedAge = students.map((stu)=>{

    return stu.sage + 2;
})
console.log(changedAge)
