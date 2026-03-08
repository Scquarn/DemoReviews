import { Component, inject } from "@angular/core";
import { MarginService } from "../services/MarginService";

@Component({
  selector: "app-review202506",
  standalone: true,
  imports: [],
  templateUrl: "./review202506.component.html",
  styleUrl: "./review202506.component.scss",
})
export class Review202506Component {
  protected readonly marginService = inject(MarginService);
}
