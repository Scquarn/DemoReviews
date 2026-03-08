import { Component, inject } from "@angular/core";
import { MarginService } from "../services/MarginService";

@Component({
  selector: "app-review202407-2",
  standalone: true,
  imports: [],
  templateUrl: "./review202407_2.component.html",
  styleUrl: "./review202407_2.component.scss",
})
export class Review2024072Component {
  protected readonly marginService = inject(MarginService);
}
