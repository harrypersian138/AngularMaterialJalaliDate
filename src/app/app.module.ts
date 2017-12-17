import { AdapterChekerComponent } from './adapter-cheker/adapter-cheker.component';
import { MatCoreModule } from './mat-core/mat-core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AdapterChekerComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
