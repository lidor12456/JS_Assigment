

const Mask = (str) =>{

    str = str .split('')
    str = str.map((p,index) =>{
        return index<str.length-4?'#':p
    })
    str = str.join('')
    return str
}

console.log(Mask("4556364607935616"))