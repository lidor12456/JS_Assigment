


const Tribonacci  = (arr,n) =>{
    
    if(arr[arr.length-2] === 0){
        arr[arr.length-2] = 1
    }
    for(let i= 0;i<n;i++){
        
        let sum = arr[arr.length-1] + arr[arr.length-2] + arr[arr.length-3]
        arr.push(sum)
    }
    return arr
}


console.log (Tribonacci([0,0,1],10))