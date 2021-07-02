// defining the elements that need to be changed.
var currentCitySearch = document.querySelector("#currentCitySearch")
var dayOneName = document.querySelector('#dayOneName')
var dayOneImage = document.querySelector('#dayOneImage')
var dayOneWeatherDescr = document.querySelector('#dayOneWeatherDescr')
var dayOneHighTemp = document.querySelector('#dayOneHighTemp')
var dayOneLowTemp = document.querySelector('#dayOneLowTemp')
var dayTwoName = document.querySelector('#dayTwoName')
var dayTwoImage = document.querySelector('#dayTwoImage')
var dayTwoWeatherDescr = document.querySelector('#dayTwoWeatherDescr')
var dayTwoHighTemp = document.querySelector('#dayTwoHighTemp')
var dayTwoLowTemp = document.querySelector('#dayTwoLowTemp')
var dayThreeName = document.querySelector('#dayThreeName')
var dayThreeImage = document.querySelector('#dayThreeImage')
var dayThreeWeatherDescr = document.querySelector('#dayThreeWeatherDescr')
var dayThreeHighTemp = document.querySelector('#dayThreeHighTemp')
var dayThreeLowTemp = document.querySelector('#dayThreeLowTemp')
var dayFourName = document.querySelector('#dayFourName')
var dayFourImage = document.querySelector('#dayFourImage')
var dayFourWeatherDescr = document.querySelector('#dayFourWeatherDescr')
var dayFourHighTemp = document.querySelector('#dayFourHighTemp')
var dayFourLowTemp = document.querySelector('#dayFourLowTemp')

// capturing the temperature unit of measurement
var unit = document.querySelector("#unit-choice").value

// capturing the keystrokes of the query to define a search parameter
var searchedCityName = ''

function getCityName(element) {
    // console.log(element.value);
  searchedCityName = element.value
}

async function search(event) {
    event.preventDefault()
    unit = document.querySelector("#unit-choice").value

    // console.log(searchedCityName, unit);

    var response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCityName}&appid=b8e7494fe6a6bb044202985c17c9b009&units=${unit}`)

    var cityWeatherData = await response.json()

    // City that has been searched
    currentCitySearch.innerHTML = cityWeatherData.city.name

    // Today's weather in searched city
    dayOneImage.src = "http://openweathermap.org/img/wn/"+ (cityWeatherData.list[0].weather[0].icon) +"@2x.png"
    dayOneWeatherDescr.innerHTML = cityWeatherData.list[0].weather[0].description
    dayOneHighTemp.innerHTML = cityWeatherData.list[0].main.temp_max
    dayOneLowTemp.innerHTML = cityWeatherData.list[0].main.temp_min

    // Tomorrow's weather in searched city
    dayTwoImage.src = "http://openweathermap.org/img/wn/"+ (cityWeatherData.list[8].weather[0].icon) +"@2x.png"
    dayTwoWeatherDescr.innerHTML = cityWeatherData.list[8].weather[0].description
    dayTwoHighTemp.innerHTML = cityWeatherData.list[8].main.temp_max
    dayTwoLowTemp.innerHTML = cityWeatherData.list[8].main.temp_min

    // Day Three's weather in searched city
    dayThreeImage.src = "http://openweathermap.org/img/wn/"+ (cityWeatherData.list[16].weather[0].icon) +"@2x.png"
    dayThreeWeatherDescr.innerHTML = cityWeatherData.list[16].weather[0].description
    dayThreeHighTemp.innerHTML = cityWeatherData.list[16].main.temp_max
    dayThreeLowTemp.innerHTML = cityWeatherData.list[16].main.temp_min

    // Day Four's weather in searched city
    dayFourImage.src = "http://openweathermap.org/img/wn/"+ (cityWeatherData.list[24].weather[0].icon) +"@2x.png"
    dayFourWeatherDescr.innerHTML = cityWeatherData.list[24].weather[0].description
    dayFourHighTemp.innerHTML = cityWeatherData.list[24].main.temp_max
    dayFourLowTemp.innerHTML = cityWeatherData.list[24].main.temp_min
  }