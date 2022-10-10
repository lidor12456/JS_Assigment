
//long row function
const SumOfLowest = (arr) =>{      
    arr = arr.sort((a,b) =>{
        return a-b
    })
    sum = arr[0] + arr[1]
    return sum;
}
console.log(SumOfLowest([22,3,4,6,5]))


//short row function
const SumOfLowest = (arr) => arr.sort((a,b) => a-b).filter((_,index) => (index === 0) || (index === 1)).reduce((acc,num) => acc + num)
console.log(SumOfLowest([22,3,4,6,5]));
