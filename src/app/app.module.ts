import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { SplashService } from './splash.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component'
import { RegisterService } from './register.service';
import { UserDashComponent } from './user-dash/user-dash.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent},
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    UserDashComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'eventually'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    MatPasswordStrengthModule,
    FlexLayoutModule,
    
    
  ],
  providers: [
    SplashService,
    LoginService,
    RegisterService,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
