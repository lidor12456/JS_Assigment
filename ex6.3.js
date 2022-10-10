


const longest = (str1,str2) =>{


    let Str = str1 + str2
        Str =  new Set(Str)
        Str = [...Str]
        Str.sort()
        Str = Str.join('')
        return Str
}
console.log(longest( "xyaabbbccccdefww","xxxxyyyyabklmopq"))

