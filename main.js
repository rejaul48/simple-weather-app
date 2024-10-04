// 053023031eb6e0202e899ebcc3ddeb25
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const apiHandle = async (cityName) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=053023031eb6e0202e899ebcc3ddeb25`);
        const data = await res.json();
        WeatherHandle(data.main);
        document.getElementById('usersCityName').innerText = cityName.toUpperCase();
        cityName.value = "";
    }catch(err){
        return alert("Something went wrong!")
    }
}

const WeatherHandle = (data) => {
    // console.log(data);
    const tempKelvin = data.temp;
    const feelLikes = data.feels_like;
    const humidity = data.humidity;
    const temperature = tempKelvin - 273.15;
    const feel = feelLikes - 273.15;

    document.getElementById('temperature').innerText = parseInt(temperature);

    document.getElementById('feelLike').innerText = parseInt(feel);

    document.getElementById('humidity').innerText = humidity;


}


const searchHanldle = () => {
    const userInput = document.getElementById('userInput').value;
    apiHandle(userInput);

    userInput = document.getElementById('userInput').value = "";

}