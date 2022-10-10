


const longest = (str1,str2) =>{


    let Str = str1 + str2
    console.log(Str);
        Str =  new Set(Str)
        console.log(Str);

        Str = [...Str]
        console.log(Str);

        Str.sort()
        console.log(Str);

        Str = Str.join('')
        console.log(Str);

        return Str
}
console.log(longest( "xyaabbbccccdefww","xxxxyyyyabklmopq"))

