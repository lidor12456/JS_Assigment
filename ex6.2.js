

const Duplicates = (str) =>{
    
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


    }

    return Letters


    
}


console.log(Duplicates("Indivisibilities"))