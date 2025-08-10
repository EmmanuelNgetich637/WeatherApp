import axios from "axios";

export const getWeather = async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.WEATHER_API_KEY;

    if (!city) return res.status(400).json({ error: "City name is required" });

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        console.log(`Fetching weather for: ${city}`);
        console.log(`URL: ${url}`);

        const { data } = await axios.get(url);

        res.json({
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
    } catch (error) {
        console.error("Error fetching weather:", error.message);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
};
