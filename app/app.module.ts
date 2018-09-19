import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartpageComponent } from './startpage/startpage.component';

//import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {
    path: '',
    component:StartpageComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
   // AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
