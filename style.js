fetch('https://api.covid19api.com/summary').then((apidata)=>{
    return apidata.json();
})
.then((actualdata) => {
    const myData=actualdata.Countries[77];
    document.getElementById("apiIndia").innerHTML=`The name of the country is ${myData.Country}.Total confirmed cases here is ${myData.TotalConfirmed} and total death cases here is ${myData.TotalDeaths} and toal recovered cases here is ${myData.TotalRecovered}.`
})
.catch((error)=>{
    console.log(error)
});