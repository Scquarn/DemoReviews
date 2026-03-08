import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MarginService {
  margin = 10;

  getMargin() {
    if (window.innerWidth < 800) {
      return "24px 10px 50px 10px";
    } else {
      return "24px " + this.margin + "% 50px " + this.margin + "%";
    }
  }
}
