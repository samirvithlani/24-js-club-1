var courses =[
    {
        name:"Java",
        duratin:"6 months",
        fees:1200,
        topics:{
            ch1:"Introduction",
            ch2:"OOP",
            ch3:"Collection",
        },
        versions:["JDK 1.8","JDK 1.9","JDK 1.10"]
    },
    {
        name:"Python",
        duratin:"3 months",
        fees:800,
        topics:{
            ch1:"Introduction",
            ch2:"OOP",
            ch3:"Collection",
        },
        versions:["2.7","3.0","3.8"]
    },
    {
        name:"PHP",
        duratin:"4 months",
        fees:1000,
        topics:{
            ch1:"Introduction",
            ch2:"OOP",
            ch3:"Collection",
        },
        versions:["5.6","7.0","7.4"]
    }
]


// for(let i=0;i<courses.length;i++){
//     //courses[i] = {java...}
//     //courses[i] = {python...}
//     console.log(courses[i].name)
//     //j=0 //courses[0].versions[0]
//     //j=1 //courses[0].versions[1]
//     //j=2 //courses[0].versions[2]
//     for(let j=0;j<courses[i].versions.length;j++){
//         console.log(courses[i].versions[j])
//     }

// }


courses.forEach((course)=>{

    console.log(course.name)
    course.versions.forEach((version)=>{
        console.log(version)
    })

})