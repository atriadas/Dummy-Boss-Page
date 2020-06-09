import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';//search field
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';





@NgModule({
  declarations: [
    
   StartComponent

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    CommonModule, //search Field
    ReactiveFormsModule, //search Field
    NgbModule
    
  ],

  providers: [],

  bootstrap: [StartComponent]

})
export class AppModule { }
