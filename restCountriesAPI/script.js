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
                <img src="${country.flag}" title="${country.name}" alt="${country.name}" />
            </div>
            <div class="country-details">
                </div>
                <div class="country-name">
                    <ul>
                    <li><p><strong>Name:</strong> ${country.name} </li>
                    <li><p><strong>Native name:</strong> ${country.nativeName}</p></li>
                    <li><p <strong>>Region:</strong> ${country.region}</p></li>
                    <li><p <strong>Subregion:</strong> ${country.subregion}</p></li>
                    <li><p><strong>Capital:</strong> ${country.capital} </p></li>
                    </ul>
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
      <button class="dark-mode-toggle" title="click here for change to Light Mode">Dark Mode</button>
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
    
      document.querySelector(".dark-mode-toggle").textContent = "Click Here for Dark Mode"
      darkMode = false
    } else {
      disabledLightMode()

      document.querySelector(".dark-mode-toggle").textContent = "Dark Mode"
      darkMode = true
    }
  })
})


 