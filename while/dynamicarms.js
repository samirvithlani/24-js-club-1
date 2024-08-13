var no = 1634
var noofdigits =0
var rem =0
var sum = 0
var tempNo = no


while(no>0){

    no = Math.floor(no/10)
    //no = no/10
    console.log(no)
    noofdigits++
}

console.log("no of digit...",noofdigits)


while(tempNo>0){

    rem = tempNo % 10 //153 % 10 = 3
    //0 = 0 + 3**3
    sum = sum + rem ** noofdigits
    tempNo  = Math.floor(tempNo/10)


}

console.log(sum)

