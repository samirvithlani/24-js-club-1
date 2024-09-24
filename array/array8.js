var countries = ["india","china","bhutan","pakistan","nepal"]
//1st param index position
//2nd param is delete count
console.log(countries)
//countries.splice(1,1)
//countries.splice(1,3)
//countries.splice(2,1,"srilanka","japan") //2nd index 1 element will be removed and 2 elements will be added
//countries.splice(3,0,"japan")
//countries.splice(0,4)
//countries.splice(0,1,"japan")
countries.splice(2,0,"japan","srilanka","bhutan")
console.log(countries)