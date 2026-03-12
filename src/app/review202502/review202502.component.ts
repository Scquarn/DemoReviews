import { Component, inject } from "@angular/core";
import { PaddingService } from "../services/PaddingService";

@Component({
  selector: "app-review202502",
  standalone: true,
  imports: [],
  templateUrl: "./review202502.component.html",
  styleUrl: "./review202502.component.scss",
})
export class Review202502Component {
  protected readonly paddingService = inject(PaddingService);
}
