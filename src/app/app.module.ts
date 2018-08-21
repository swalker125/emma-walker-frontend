import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppHomepageComponent } from './app-homepage/app-homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: AppHomepageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'terms', component: TermsAndConditionsComponent},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppHomepageComponent,
    AppNavbarComponent,
    TermsAndConditionsComponent,
    TestimonialsComponent,
    ServicesComponent,
    ContactComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})
export class AppModule {
}
