import { Component } from "@angular/core";
import { min } from "rxjs";
import { FlowerComponent } from "../flower/flower.component";

@Component({
  selector: "app-review202510",
  standalone: true,
  imports: [FlowerComponent],
  templateUrl: "./review202510.component.html",
  styleUrl: "./review202510.component.scss",
})
export class Review202510Component {
  protected readonly dialogLines = ["Oh hello."];
}
