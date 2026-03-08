import { Component, inject } from "@angular/core";
import { MarginService } from "../services/MarginService";

@Component({
  selector: "app-review202502",
  standalone: true,
  imports: [],
  templateUrl: "./review202502.component.html",
  styleUrl: "./review202502.component.scss",
})
export class Review202502Component {
  protected readonly marginService = inject(MarginService);
}
