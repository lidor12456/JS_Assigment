

const toWeirdCase = (str) =>{

    Str = ''
    str = str.split(' ')
   
    for(let word of str){
        word = word.split('')
        for(let i = 0;i<word.length;i++){
            Str += i%2===0 ? word[i].toUpperCase():word[i].toLowerCase()
        }
        Str += ' '
    }
    return Str
}

console.log(toWeirdCase("Weird string case"))