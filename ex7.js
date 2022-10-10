

const filterFunc = (element) =>{

    return element>6? true:false 

}

const Filter = (arr) =>{

    let filterArr =[]
    for(let i = 0 ;i<arr;i++){
        filterFunc(arr[i])? filterArr.push(arr[i]):''
    }
    return filterArr
}

const mapHelper = (element) =>{

    return element*element

}


const Map = (arr) =>{

    let mapArr = []

    for(let i=0;i<arr.length;i++){
        mapArr.push(mapHelper(arr[i]))
    }
    return mapArr
}

const forEachHelper = (element) =>{
    
    return element*element

}

const forEach = (arr) =>{

    for(let i=0; i<arr.length;i++){

        forEachHelper(forEachHelper(arr[i]))
    }
}
