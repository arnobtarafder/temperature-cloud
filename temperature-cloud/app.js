// const enterButton = document.getElementById("enter");
document.getElementById('search-input').addEventListener("keypress", function (event) {
    if (event.key == 'Enter') {
        document.getElementById('enter').click()
    };
});



const API_KEY = '839a46dfe327caa07d0dde9c9cf01c44';
console.log(API_KEY);
const searchTemperature = () => {
    let city = document.getElementById("search-input").value;
    let cityClear = document.getElementById("search-input");   
    // clear input 
    cityClear.value = "";

    
    if (city == "") {
        Swal.fire({
            text: 'Empty! Please type a city name!',
            icon: 'error',
        }
        )
    }

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  
    else {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
  }
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText("city", temperature.name);
    setInnerText("temperature", temperature.main.temp);
    setInnerText("condition", temperature.weather[0].main);
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById("weather-icon");
    imageIcon.setAttribute("src", url);
}