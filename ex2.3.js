

//long row function
const findNextSquare = (num) =>{
    if ( Number.isInteger( Math.sqrt(num)) === false){
        return -1
    }
    N = Math.sqrt(num)
    N++
    N = Math.pow(N,2)
    console.log(N)
}
findNextSquare(121)


//short row function
const findNextSquare = (num) => Number.isInteger(Math.sqrt(num)) ? Math.pow(Math.sqrt(num)+1,2):-1
console.log(findNextSquare(144))