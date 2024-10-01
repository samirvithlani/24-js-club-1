var courses =[
    {
        name:"Java",
        duratin:"6 months",
        fees:1200,
        topics:{
            ch1:"Introduction",
            ch2:"OOP",
            ch3:"Collection",
        }
    },
    {
        name:"Python",
        duratin:"3 months",
        fees:800,
        topics:{
            ch1:"Introduction",
            ch2:"OOP",
            ch3:"Collection",
        }
    },
    {
        name:"PHP",
        duratin:"4 months",
        fees:1000,
        topics:{
            ch1:"Introduction",
            ch2:"OOP",
            ch3:"Collection",
        }
    }
]
//3 subname topc..


courses.forEach((course)=>{


    console.log(course.name)
    console.log(course.topics)

})