

const Fibonacci = (arr,n) =>{

    for(let i=0;i<n;i++){
        let sum = arr[arr.length-1] + arr[arr.length-2]
        arr.push(sum)
    }
    return arr
}


console.log(Fibonacci([1,1],12))