var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var result = JSON.parse(request.response)
//A. to print all the countries from asia continent
    var asia_data = result.filter((ele)=>ele.region === "Asia");
    var asia_name = asia_data.map((ele)=>ele.name.common);
    console.log(asia_name);
 //B. to print countires with a opulation of less than 2 Lakhs
    var pop=result.filter((ele)=>ele.population<200000);
    console.log(pop);
//C.Print the following details name, capital, flag, using forEach function
    result.forEach(ele => {
    console.log(ele.name);
        console.log(ele.capital);
        console.log(ele.flag);

   });

//D. Print the total population of countries using reduce function
    var tot = result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(tot);
//E. Print the country that uses US dollars as currency.
       var currency = result.filter((item) => item?.currencies?.USD?.name === "United States dollar")
       var cur = currency.map((value) => value.name);
       console.log(cur);
}