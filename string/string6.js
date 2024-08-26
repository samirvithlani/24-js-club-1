//indexof method..
//e -->index..
var city = "ahmedabad";
var index= -1;
for(let i=0;i<city.length;i++){

    //city[i] =a ,false //0
    //city[i] =h ,false //1
    //city[i] =m ,false //2
    //city[i] =e ,true  //3
        if(city[i] == "d"){
             index = i; //3  //4   /8
             //break;
        }
}

console.log("index of e = ",index);
