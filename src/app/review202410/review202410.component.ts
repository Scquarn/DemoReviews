import { Component, inject } from "@angular/core";
import { MarginService } from "../services/MarginService";

@Component({
  selector: "app-review202410",
  standalone: true,
  imports: [],
  templateUrl: "./review202410.component.html",
  styleUrl: "./review202410.component.scss",
})
export class Review202410Component {
  protected readonly marginService = inject(MarginService);
}
