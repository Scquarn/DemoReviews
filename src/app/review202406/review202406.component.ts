import { Component, inject } from "@angular/core";
import { PaddingService } from "../services/PaddingService";

@Component({
  selector: "app-review202406",
  standalone: true,
  imports: [],
  templateUrl: "./review202406.component.html",
  styleUrl: "./review202406.component.scss",
})
export class Review202406Component {
  protected readonly paddingService = inject(PaddingService);

  openLink(url: string) {
    window.open(url, "_blank");
  }
}
