var getUsers = ()=>{

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{

                resolve("amit")
        },3000)
    })

    return promise
}

var printUser = (name)=>{

    var promise = new Promise((resolve,reject)=>{

            setTimeout(() => {
                resolve("data printed.."+name)
            }, 2000);
    })

    return promise

}

// var fetchUser  = ()=>{

//     //call back hell..
//     var name = getUsers()
//     console.log(name)
//     name.then((data)=>{
//         console.log(data)
//         var print = printUser(data)
//         print.then((data)=>{
//             console.log(data)
            
//         })
//     })

// }

const fetchUser = async()=>{


    var name = await getUsers()
    console.log(name)
    var print = await printUser(name)
    console.log(print)


}
fetchUser()

