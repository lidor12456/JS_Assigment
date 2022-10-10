
const repeat_str = (n,str) =>{

    let Str = ''
    for(let i=0;i<n;i++){
        Str = Str + str
    }
    return Str
}

console.log(repeat_str(5,"Hello"))