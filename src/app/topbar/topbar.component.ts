import { Component, inject, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { PaddingService } from "../services/PaddingService";

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
  paddingSliderClicked = output<number>();
  value = 30;

  private readonly paddingService = inject(PaddingService);

  constructor() {
    this.paddingService.padding = this.value;
  }

  protected changePadding(value: number) {
    this.paddingService.padding = value;
  }
}
