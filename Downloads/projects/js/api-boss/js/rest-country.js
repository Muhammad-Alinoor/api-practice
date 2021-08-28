const loadCountries = () => {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) => {
    const countriesDiv = document.getElementById("countries-div");
    countries.forEach(country => {
        const div = document.createElement("div");
        countriesDiv.classList.add("country-style")
        div.classList.add("seperate-country")
        div.innerHTML = `
           <h3>Name: ${country.name}</h3>
           <h4>Capital: ${country.capital}</h4>
           <button onclick="loadCountryDetails('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    })
}
const loadCountryDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = (country) => {
    console.log(country.flag)
    const countryDetails = document.getElementById("country-details");
    const div = document.createElement("div");
    countryDetails.textContent = "";
    div.classList.add("country");
    div.innerHTML = `
    <img height="200px" width="300px" src= "${country.flag}">
    <h3>Name: ${country.name}</h3>
    <h4>Capital: ${country.capital}</h4>
    `;
    countryDetails.appendChild(div);
}