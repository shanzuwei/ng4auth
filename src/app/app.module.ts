import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
