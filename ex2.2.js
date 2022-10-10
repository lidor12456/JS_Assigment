
//long row function
const Binary = (arr) =>{
    arr = arr.reverse()
    let num = 0 
    for(let i=0;i<arr.length;i++){
        num += arr[i] * Math.pow(2,i) 
    }
    console.log(num)
}


//short row function
const Binary = (arr) => arr.reverse().reduce((acc,num,index) =>( acc + num*Math.pow(2,index)),0)


console.log(Binary([1, 0, 1, 1]  ) )