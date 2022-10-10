
const Mumbling = (str) =>{

    str = str.split('')
    
    str =  str.map((p,index) =>{
    
    let chr = p.toUpperCase() 
        for(let i=0;i<index;i++){
            chr += p.toLowerCase()
        }
        return chr
    })
    str  =str.join('-')
    console.log(str)
}

Mumbling("RqaEzty")