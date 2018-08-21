import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatToolbarModule } from '@angular/material';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AppNavbarComponent],
      imports: [RouterTestingModule, MatIconModule, MatToolbarModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  }));
});
