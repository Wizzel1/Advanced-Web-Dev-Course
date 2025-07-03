
type WeatherData = {
    temperature: number;
    condition: string;
}

class OldWeatherService {
    fetch(): WeatherData {
        return { temperature: 20, condition: "sunny" };
    }
}

interface WeatherClient2 {
    getCurrentWeather(): WeatherData;
}

class WeatherAdapter implements WeatherClient2 {
    private oldWeatherService: OldWeatherService;
    constructor(oldWeatherService: OldWeatherService) {
        this.oldWeatherService = oldWeatherService;
    }
    getCurrentWeather(): WeatherData {
        const data = this.oldWeatherService.fetch();
        return {
            temperature: data.temperature,
            condition: data.condition,
        };
    }
}

const oldWeatherService = new OldWeatherService();
const weatherAdapter = new WeatherAdapter(oldWeatherService);