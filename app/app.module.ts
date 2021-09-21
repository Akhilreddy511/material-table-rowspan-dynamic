import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import { AppComponent } from './app.component';

// Material Modules
import {
  MatToolbarModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule 
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
