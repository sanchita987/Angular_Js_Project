import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../my-service.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, FormsModule
  ],
  providers:[DataService]
})
export class SharedModuleModule { }
