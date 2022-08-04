import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoiftsComponent } from './components/logoifts/logoifts.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { CentroComponent } from './components/centro/centro.component';
import { HomeComponent } from './user/home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MisprestamosComponent } from './user/misprestamos/misprestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    LogoiftsComponent,
    FooterComponent,
    NavbarComponent,
    UserComponent,
    CentroComponent,
    HomeComponent,
    AdduserComponent,
    MisprestamosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
