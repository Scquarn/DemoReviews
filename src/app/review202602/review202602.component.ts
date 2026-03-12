import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
} from "@angular/core";
import { PaddingService } from "../services/PaddingService";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule, UrlTree } from "@angular/router";

@Component({
  selector: "app-review202602",
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: "./review202602.component.html",
  styleUrl: "./review202602.component.scss",
})
export class Review202602Component {
  protected readonly paddingService = inject(PaddingService);
  private readonly router = inject(Router);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @HostListener("window:resize")
  onResize() {
    this.changeDetectorRef.detectChanges();
  }

  goToAnchor(id: string) {
    const urlTree: UrlTree = this.router.createUrlTree(["2026_february"], {
      fragment: id,
    });
    this.router.navigateByUrl(urlTree);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
