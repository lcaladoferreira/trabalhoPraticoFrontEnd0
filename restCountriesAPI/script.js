let darkMode = true

async function getCountries() {
  let response = await fetch("https://restcountries.com/v2/all")
  let data = response.json()
  return data
}

function getCountriesHtml(country) {
  return (document.body.innerHTML = `
    
        <div class="country">
            <div class="flag">
                <img src="${country.flag}" alt="${country.name} flag" />
            </div>
            <div class="country-details">
                <h3 class="country-name">${country.name}</h3>
                <div class="country-detail">
                    <p><strong>Native name:</strong> ${country.nativeName}</p>
                    <p class="region"><strong>Region:</strong> ${country.region}</p>
                    <p class="region"><strong>Subregion:</strong> ${country.subregion}</p>
                    <p><strong>Capital:</strong> ${country.capital} </p>
                </div>
            </div>
        </div>
    
`)
}

function searchCountry(e) {
  let inputCountry = e.target.value.toLowerCase()
  let allCountries = document.querySelectorAll(".country-name")

  for (let i = 0; i < allCountries.length; i++) {
    let country = allCountries[i].textContent.toLocaleLowerCase()
    let countryGrid = document.querySelectorAll(".country")
    if (country.includes(inputCountry)) {
      countryGrid[i].style.display = "block"
    } else {
      countryGrid[i].style.display = "none"
    }
  }
}

function region(){
    if (data.map((country) => getCountriesHtml(country.Asia)).join(""));
}

function enableLightMode() {
  document.body.classList.add("lightMode")
}

function disabledLightMode() {
  document.body.classList.remove("lightMode")
}

getCountries().then((data) => {
  document.body.innerHTML = `
      <nav>
      <h3> Countries list with RestCountries API </h3>
      <button class="dark-mode-toggle">Dark Mode</button>
      </nav>
      <div class="sortContainer">
        <input id="searchCountry" type="text" placeholder="Search for a country..." />
        <select name="region" id="region-select">
            <option value="Region">Filter by Region</option>
            <option class = 'Africa' value="Africa">Africa</option>
            <option class = 'America' value="America">America</option>
            <option class = 'Asia' value="Asia">Asia</option>
            <option class = 'Europe' value="Europe">Europe</option>
            <option class = 'Oceania' value="Oceania">Oceania</option>
        </select>
      </div>  
        <div class="countries">
                ${data.map((country) => getCountriesHtml(country)).join("")}
        </div>
    `
  

  
  let searchBar = document.getElementById("searchCountry")
  let regionSelect = document.getElementById("region-select")
  
  regionSelect.addEventListener("input", ()=>{
    let regionCountry = regionSelect.value.toLowerCase()
    let regionAll = document.querySelectorAll(".region")
    
    for(let i=0;i<regionAll.length;i++){
      
      let rCountry = regionAll[i].textContent.toLowerCase()
      let rGrid = document.querySelectorAll(".country")
      if(rCountry.includes(regionCountry)){
        rGrid[i].style.display = "block"
      }else{
        rGrid[i].style.display = "none"
      }
      
    }
    
    
  })

  searchBar.addEventListener("input", searchCountry)
  
  document.querySelector(".dark-mode-toggle").addEventListener("click", () => {
    if (darkMode) {
      enableLightMode()
      document.querySelector(".dark-mode-toggle").textContent = "Light Mode"
      darkMode = false
    } else {
      disabledLightMode()
      document.querySelector(".dark-mode-toggle").textContent = "Dark Mode"
      darkMode = true
    }
  })
})


 