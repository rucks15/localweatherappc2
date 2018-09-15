import { ICurrentWeather } from "./icurrent-weather";
import { Observable } from "rxjs";
export interface IWeatherService {
    getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather>
}
