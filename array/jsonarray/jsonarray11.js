var countries =[
    {
        name:"India",
        states:[
            {
                name:"Gujarat",
                population:10000000,
                founded:1960,
            },
            {
                name:"Maharashtra",
                population:20000000,
                founded:1960,
            }
        ]
    },
    {
        name:"USA",
        states:[
            {
                name:"California",
                population:10000000,
                founded:1960,
            },
            {
                name:"Texas",
                population:20000000,
                founded:1960,
            }
        ]
    }
]

//find states of india
//find states of usa havinf population greater than 15000000

// var indiaPopulation =0;
// for(let i=0;i<countries.length;i++){

//     if(countries[i].name =="India"){

//         for(let j=0;j<countries[i].states.length;j++){
//             //india --> gu + mah
//             indiaPopulation = indiaPopulation + countries[i].states[j].population
//         }

//     }


// }
// console.log(indiaPopulation);




var indPop = countries.find((country)=>country.name == "India").states.
reduce((sum,st)=>sum+st.population,0)
console.log(indPop);



