import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  image = "assets/img/test.jpg";

  filterOptions = [
    { name: "Normal", value: "" },
    { name: "Sepia", value: "sepia" },
    { name: "Blue Monotone", value: "blue_monotone" },
    { name: "Violent Tomato", value: "violent_tomato" },
    { name: "Grey", value: "grey" },
    { name: "Brightness", value: "brightness" },
    { name: "Saturation", value: "saturation" },
  ];

  slideOpts = {
    slidesPerView: 3.5,
    spaceBetween: 5,
    slidesOffsetBefore: 20,
    freeMode: true,
  };
  constructor() {}

  filter(index) {}
}
