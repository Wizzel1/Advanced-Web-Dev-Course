
type WeatherData = {
    temperature: number;
    condition: string;
}

class OldWeatherService {
    fetch(): Promise<WeatherData> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ temperature: 20, condition: "sunny" });
            }, 1000);
        });
    }
}

interface WeatherClient2 {
    getCurrentWeather(): Promise<WeatherData>;
}

class WeatherAdapter implements WeatherClient2 {
    private oldWeatherService: OldWeatherService;
    constructor(oldWeatherService: OldWeatherService) {
        this.oldWeatherService = oldWeatherService;
    }
    async getCurrentWeather(): Promise<WeatherData> {
        const data = await this.oldWeatherService.fetch();
        return {
            temperature: data.temperature,
            condition: data.condition,
        };
    }
}

const oldWeatherService = new OldWeatherService();
const weatherAdapter = new WeatherAdapter(oldWeatherService);