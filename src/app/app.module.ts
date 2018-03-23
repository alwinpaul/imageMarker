import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { LayoutPointerComponent } from "./layout-pointer/layout-pointer.component";
import { MatSelectModule } from "@angular/material";
import { ImagemapServiceService } from './services/imagemap-service.service';

@NgModule({
  declarations: [AppComponent, LayoutPointerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatSelectModule],
  providers: [ImagemapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
