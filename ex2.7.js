



const BasicMath = (action,num1,num2) =>{


switch(action){
    case '+':
        return num1 + num2
      
    case '-':
        return num1 - num2
      
    case '*':
        return num1 * num2
        
    case '/':
        return num1 / num2
        
    }
    
}  
    


console.log( BasicMath('/',4,5))