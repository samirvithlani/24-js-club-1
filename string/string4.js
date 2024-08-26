var data = "A char"

//get ascii value of char
console.log(data.charCodeAt(0)) // charCodeeAt(index)
console.log(data.charCodeAt(1)) // charCodeeAt(index) "space"
console.log(data.charCodeAt(2)) // charCodeeAt(index)

//find char from ascii value
//Stirng class
console.log(String.fromCodePoint(65)) //A
console.log(String.fromCodePoint(32)) //space

console.log(String.fromCharCode(65+32)) //A