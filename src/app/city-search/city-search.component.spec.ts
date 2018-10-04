import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { CitySearchComponent } from './city-search.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitySearchFake } from './city-search-fake';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { DebugElement } from '@angular/core';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySearchComponent],
      imports: [HttpClientTestingModule,MatInputModule,ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
      FormsModule,BrowserAnimationsModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should emit on ngOnInit', () =>{
    let fakesearch:DebugElement;
    fakesearch = fixture.debugElement.query(By.css('input[type=string]'))
    let fakesearchvalue: String;
    fakesearch.nativeElement.value = "seattle,USA";
    component.searchEvent.subscribe((value) => fakesearchvalue = value);
    expect(fakesearchvalue).toBe("seattle,USA");
  });*/
});
