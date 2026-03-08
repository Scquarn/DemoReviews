import { Component, inject, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MarginService } from "../services/MarginService";

@Component({
  selector: "app-topbar",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./topbar.component.html",
  styleUrl: "./topbar.component.scss",
})
export class TopbarComponent {
  menuButtonClicked = output();
  marginSliderClicked = output<number>();
  value = 30;

  private readonly marginService = inject(MarginService);

  constructor() {
    this.marginService.margin = this.value;
  }

  protected changeMargin(value: number) {
    this.marginService.margin = value;
  }
}
