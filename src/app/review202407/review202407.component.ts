import { Component, inject } from "@angular/core";
import { PaddingService } from "../services/PaddingService";

@Component({
  selector: "app-review202407",
  standalone: true,
  imports: [],
  templateUrl: "./review202407.component.html",
  styleUrl: "./review202407.component.scss",
})
export class Review202407Component {
  protected readonly paddingService = inject(PaddingService);
}
