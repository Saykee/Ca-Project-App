import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PwnedDataComponent } from './pwned-data/pwned-data.component';
import { specialPipe} from '../app/services/specialPipe';
import { PasswordCheckerComponent } from './password-checker/password-checker.component'

@NgModule({
  declarations: [
    AppComponent,
    PwnedDataComponent,
    specialPipe,
    PasswordCheckerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
