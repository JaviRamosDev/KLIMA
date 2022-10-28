import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatInputModule} from '@angular/material/input';

//import { MatAutocompleteModule } from '@angular/material/autocomplete';
//import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatSelectModule } from '@angular/material/select';
//import {AutocompleteLibModule} from 'angular-ng-autocomplete';
//import { Ng2CompleterModule } from 'ng2-completer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    CommonModule,
    
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule, 
    
    //NgbTypeaheadModule,
    //MatAutocompleteModule,
    // MatSelectModule,
    //AutocompleteLibModule,
    //Ng2CompleterModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }