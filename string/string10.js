var data = "hi this is india, and india is a great country"

//3 4 5 6 exluding 6
//var ss = data.substring(3,6)
//var ss = data.substring(5,data.length)
//var ss = data.substring(10) data.length
//console.log(ss) // thi

var x = data.slice(3)
console.log(x) // thi

//"ahmedbad"
//3,6
//loop sp =3 , end 6
//e,d,b
//"" + e
//e + d
//ed + b
//edb + a


var mystr = "ahmedabad"
var sp =3
var ep;

if(ep==undefined){
    ep = mystr.length
}

var ss =""

for(let i=sp;i<ep;i++){

    ss = ss + mystr[i]

}
console.log(ss) // edba




