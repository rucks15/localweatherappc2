import { ICurrentWeather } from "./icurrent-weather";
import { Observable } from "rxjs";
export interface IWeatherService {
    getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
}
