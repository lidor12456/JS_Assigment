
//long row function
const Summation = (n) =>{
    
    if(n<0){
        return -1
    }
    
    let sum =0
    for(let i=0;i<=n;i++){
      sum += i        
    }
    return sum
}


//short row function
const Summation = (n) =>( n === 1? 1 : n + Summation(n-1) )


let sum = Summation(8)

console.log(sum)