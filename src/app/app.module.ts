import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConvertToJsonComponent } from './convert-to-json/convert-to-json.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';

const appRoutes: Routes = [
  {path: 'admin', component: AdminLoginComponent },
  {path :'adminupload', component: AdminUploadComponent},
  {path: 'home', component: HomeComponent  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent  },
  {path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ConvertToJsonComponent,
    FooterComponent,
    HeaderComponent,
    AdminLoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminUploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
