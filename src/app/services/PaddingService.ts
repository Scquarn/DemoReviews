import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PaddingService {
  padding = 10;

  getMargin() {
    if (window.innerWidth < 800) {
      return "24px 10px 50px 10px";
    } else {
      return "24px " + this.padding + "% 50px " + this.padding + "%";
    }
  }
}
