import {ICurrentWeather} from "../icurrent-weather";
import { IWeatherService } from "../iweather-service";
import { of, Observable } from "rxjs";

export class WeatherServiceFake implements IWeatherService{
    private fakeweather: ICurrentWeather={
        city:'Bursa',
        country: 'TR',
        date: 1485789600,
        image:'',
        temperature: 288.32,
        description:'light intensity drizzle'
    }
    public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
    {
        return of(this.fakeweather);
    }
}