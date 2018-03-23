import { Injectable, Renderer2, RendererFactory2, ViewChild, ElementRef } from "@angular/core";

@Injectable()
export class ImagemapServiceService {
  dragListner: () => void;
  currentImage;
  imgCtr;
  imageProperty;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  addFood(selectedFood, imageId, containerId) {
    this.currentImage = document.getElementById(imageId);
    this.imageProperty = this.currentImage.getBoundingClientRect();
    const xCo = this.imageProperty.width / 2;
    const yCo = this.imageProperty.height / 2 - 35;
    const pointerColor = "#ff0000";
    this.placeMarker(pointerColor, xCo, yCo, containerId);
  }

  placeMarker(color, x, y, containerId) {
    this.imgCtr = document.getElementById(containerId);
    const img = this.renderer.createElement("i");
    const imgText = this.renderer.createText("local_pizza");
    this.renderer.appendChild(img, imgText);
    this.renderer.setAttribute(img, "class", "material-icons");
    this.setIconPosition(img, x, y);
    this.renderer.setStyle(img, "color", color);
    this.renderer.setStyle(img, "font-size", "36px");
    this.renderer.appendChild(this.imgCtr, img);

    this.renderer.listen(img, "mousedown", e => {
      this.dragMarker(img);
    });

    this.renderer.listen(document, "mouseup", e => {
      setTimeout(() => {
        this.dragListner();
        this.renderer.setStyle(img, "cursor", "pointer");
      }, 1);
    });
  }

  setIconPosition(img, x, y) {
    this.renderer.setStyle(img, "position", "absolute");
    this.renderer.setStyle(img, "left", x + "px");
    this.renderer.setStyle(img, "top", y + "px");
  }

  checkInBounds(x, y) {
    if (x < this.imageProperty.left || x > this.imageProperty.right) {
      return false;
    }
    if (y < this.imageProperty.top || y > this.imageProperty.bottom) {
      return false;
    }
    return true;
  }

  dragMarker(icon) {
    this.dragListner = this.renderer.listen(this.imgCtr, "mousemove", e => {
      this.renderer.setStyle(icon, "cursor", "move");
      const x = e.clientX - 36;
      const y = e.clientY - 36;
      if (!this.checkInBounds(x, y)) {
        return;
      }
      this.setIconPosition(icon, x, y);
    });
  }
}
