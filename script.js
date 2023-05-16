// console.log("Testing, testing, 1 2 3 ...");


const fetchCountries = async () => {
    const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
    const countriesJsonData = await countriesResponse.json();
    console.log(countriesJsonData);

    mapCountryData(countriesJsonData);
}

fetchCountries();

const mapCountryData = (countriesArray) => {

    countryList = document.querySelector("#countriesList");


    // creating a new html element - a list of all the countries
    countriesArray.forEach((country) =>{ 
        const newItemForList = document.createElement("li");
        const countryName = country.name.common;
        const countryCapital = country.capital;
        const countryRegion = country.region;

        newItemForList.innerHTML = [countryName, countryCapital, countryRegion];

        countryList.appendChild(newItemForList);
    })
}

// remove awaiting API
// let countryList = document.getElementById("countriesList");
// let paragraph = document.getElementById("paragraph");
// countryList.remove(paragraph);



//able to write in a textbox to filter results

// LOGIC
// input a country into it - see if the country matches up to one of the list element
// 1. get the input that was typed in
// 2. get the list of countrys 
// 3. iterate through the countrys in a for loop
// 4. where the inputted text matches the i

// const filterCountries = (countriesArray) => {
//     input = document.querySelector("input");

//     countryList = document.querySelector("#countriesList");

//     countriesArray.forEach((country) => {
//         countryName = country.name.common;
//         if (countryName == input){ 
//             const displayCountry = document.createElement("li");
//             displayCountry.innerText = countryName;
//         }
   
//     })
    
// }
const button = document.querySelector("button");
button.addEventListener('click', (event) =>{
    countriesArray = fetchCountries();

    const input = document.querySelector("input");

    const countryList = document.querySelector("#countriesList");

    countriesArray.forEach((country) => {
        const countryName = country.name.common;
        const countryCapital = country.capital;
        const countryRegion = country.region;
        
        if (input.value == countryName){ 
            const displayCountry = document.createElement("li");
            displayCountry.innerText = [countryName, countryCapital, countryRegion];
        }
   
    })

})