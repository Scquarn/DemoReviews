import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
} from "@angular/core";
import { PaddingService } from "../services/PaddingService";
import { Router, RouterModule, UrlTree } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-review202606",
  standalone: true,
  imports: [MatIcon, MatButtonModule, RouterModule],
  templateUrl: "./review202606.html",
  styleUrl: "./review202606.scss",
})
export class Review202606 {
  protected readonly paddingService = inject(PaddingService);
  private readonly router = inject(Router);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @HostListener("window:resize")
  onResize() {
    this.changeDetectorRef.detectChanges();
  }

  goToAnchor(id: string) {
    const urlTree: UrlTree = this.router.createUrlTree(["2026_june"], {
      fragment: id,
    });
    this.router.navigateByUrl(urlTree);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
