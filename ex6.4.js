

const isogram = (str) =>{

    let count = 0
    const Letters = {}
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str[i] !== ',' && str[i] !== ' '){

            if(str[i] in Letters === false){
                Letters[str[i]] = 1
            }else{
                Letters[str[i]] += 1
            }
            
        }
console.log(Letters);

    }
    for (const property in Letters) {
       
        if( Letters[property] >1){
           return false
       }
    }
    return true
}

console.log(isogram("moOse"))