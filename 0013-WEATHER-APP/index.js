const inp = document.getElementById('inp')
const temp = document.getElementById('temp')
const btn = document.getElementById('btn')

async function calculateTempeature(city) {
    const api_key = "33d9c89bd813247536f05eb59ddd5a58";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
}

btn.addEventListener('click', () => {
    calculateTempeature(inp.value)
})