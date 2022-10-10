
//long row function
const Unique = (arr) =>{

   arr =  arr.sort((a,b)=>{

        return a-b
    })

   if(arr[0] === arr[1]){
       return arr[arr.length -1]
   }else{
       return arr[0]
   }

}

//short row function
const Unique = (arr) => arr.sort((a,b) => a-b).reduce((acc,num,index,arr) => arr[0] === arr[1]? arr[arr.length-1]:arr[0])
console.log (Unique([ 1, 1, 1, 2, 1, 1 ]))