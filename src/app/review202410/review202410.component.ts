import { Component, inject } from "@angular/core";
import { PaddingService } from "../services/PaddingService";

@Component({
  selector: "app-review202410",
  standalone: true,
  imports: [],
  templateUrl: "./review202410.component.html",
  styleUrl: "./review202410.component.scss",
})
export class Review202410Component {
  protected readonly paddingService = inject(PaddingService);
}
