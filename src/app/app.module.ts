import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { AuthenicationService } from './services/authenication.service';
import { ThemeDirective } from './directives/theme.directive';
import { TestDirective } from './directives/test.directive';
import { SlideshowDirective } from './directives/slideshow.directive';
import { ArfilterPipe } from './pipes/arfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    ThemeDirective,
    TestDirective,
    SlideshowDirective,
    ArfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
