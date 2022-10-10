

const  trimming = (str) =>{

    str = str.split('')


    
    str.shift()
    str.pop()
    
    str = str.join('')
    return str
}

console.log(trimming('eyal'))