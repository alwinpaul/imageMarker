import {
  Component,
  OnInit
} from "@angular/core";

import { ImagemapServiceService } from "./../services/imagemap-service.service";

@Component({
  selector: "app-layout-pointer",
  templateUrl: "./layout-pointer.component.html",
  styleUrls: ["./layout-pointer.component.css"]
})
export class LayoutPointerComponent implements OnInit {
  foods = [];
  selectedFood = "";

  constructor(
    public imageService: ImagemapServiceService
  ) {}

  ngOnInit() {
    this.foods = [
      { value: "steak-0", viewValue: "Steak" },
      { value: "pizza-1", viewValue: "Pizza" },
      { value: "tacos-2", viewValue: "Tacos" }
    ];
  }
}
