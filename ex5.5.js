

const twoWords = (str) =>{

    str = str.split(' ')

    str =  str.map(p =>{
      return  p[0].replace(p[0],p[0].toUpperCase())
       
    })
    str =  str.join('.')
    return str
}

console.log(twoWords('sam harris'))