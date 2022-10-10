

const shortestWords = (str) =>{

    str = str.split(' ')

  return  str.reduce((acc,word) =>{
       return  acc > word.length ? word.length: acc
    },str[0].length)

}

console.log(shortestWords('helloasfsasfsaf world lion!!!!!!!!!!'))
