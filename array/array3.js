var lang = ["hindi", "english", "marathi", "gujarati","malayalam"];
var max = lang[0]//max = hindi

for(let i=0;i<lang.length;i++){


    //hindi.l > hindi.length = false
    //english.l > hindi.length = true
    //marathi.l > english.length = false
    
    if(lang[i].length>max.length){
        //english
        max = lang[i]
    }


}
console.log("max length language is ",max)