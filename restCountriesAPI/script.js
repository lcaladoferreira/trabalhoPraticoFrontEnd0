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
                    <p><strong>Population:</strong> ${country.population}</p>
                    <p class="region"><strong>Region:</strong> ${country.region}</p>
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
      <h3> Where in the world? </h3>
      <button class="dark-mode-toggle">Dark Mode</button>
      </nav>
      <div class="sortContainer">
        <input id="searchCountry" type="text" placeholder="Search for a country..." />
        <select name="region" id="region-select">
            <option value="Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
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


 