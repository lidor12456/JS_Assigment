

//long row function
const nb_year = (startYear,Addpercent,comming,endYear) =>{

    let numOfYear = 0

    Addpercent = Addpercent/100;

    while(startYear<endYear){

        startYear = startYear + startYear*Addpercent + comming
        numOfYear++
    }
    return numOfYear
}

//short row function
const nb_year = (startYear,Addpercent,comming,endYear) =>  startYear <  endYear ? 1 + nb_year(startYear + startYear*(Addpercent/100) + comming,Addpercent,comming,endYear): 0

console.log(nb_year(1500000, 2.5, 10000, 2000000))