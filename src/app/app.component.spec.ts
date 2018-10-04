import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitySearchComponent } from './city-search/city-search.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatInputModule,ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
      FormsModule],
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        CitySearchComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
