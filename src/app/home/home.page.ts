import { Component } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  image = "";
  selectedFilter = "";
  result: HTMLElement;
  filterOptions = [
    { name: "Normal", value: "" },
    { name: "Sepia", value: "sepia" },
    { name: "Blue Monotone", value: "blue_monotone" },
    { name: "Violent Tomato", value: "violent_tomato" },
    { name: "Grey", value: "greyscale" },
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

  imageLoaded(e) {
    console.log("loaded: ", e);
    this.result = e.detail.result;
  }

  filter(index) {
    this.selectedFilter = this.filterOptions[index].value;
  }

  async selectImage() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    this.image = image.dataUrl;
  }

  saveImage() {
    let base64 = "";
    if (this.selectedFilter) {
      // Use the original image
      base64 = this.image;
    } else {
      let canvas = this.result as HTMLCanvasElement;
      // export as dataUrl or Blob!
      base64 = canvas.toDataURL("image/jpeg", 1.0);
    }

    // Do something with the result
    this.downloadBase64File(base64);
  }

  downloadBase64File(contentBase64) {
    const linkSource = `${contentBase64}`;
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    downloadLink.href = linkSource;
    downloadLink.target = "_self";
    downloadLink.download = "test.png";
    downloadLink.click();
  }
}
