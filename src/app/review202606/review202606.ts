import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { PaddingService } from "../services/PaddingService";
import { Router, RouterModule, UrlTree } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SnowService } from "./Services/Snowservice";
import { FireService } from "./Services/Fireservice";

@Component({
  selector: "app-review202606",
  standalone: true,
  imports: [MatIcon, MatButtonModule, RouterModule],
  templateUrl: "./review202606.html",
  styleUrl: "./review202606.scss",
})
export class Review202606 implements AfterViewInit, OnDestroy {
  protected readonly paddingService = inject(PaddingService);
  private readonly router = inject(Router);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected readonly snowService = inject(SnowService);
  protected readonly fireService = inject(FireService);
  protected doSnow = true;
  protected doFire = false;
  @ViewChild("triggerSnow") triggerSnow!: ElementRef;
  @ViewChild("triggerFire") triggerFire!: ElementRef;

  ngAfterViewInit() {
    const observerSnow = new IntersectionObserver(([entry]) => {
      this.setSnow(entry.isIntersecting);
    });

    const observerFire = new IntersectionObserver(([entry]) => {
      this.setFire(entry.isIntersecting);
    });

    observerSnow.observe(this.triggerSnow.nativeElement);
    observerFire.observe(this.triggerFire.nativeElement);
  }

  ngOnDestroy(): void {
    this.snowService.stop();
    this.fireService.stop();

    clearTimeout(this.snowFadeTimeout);
    clearTimeout(this.fireFadeTimeout);
  }

  protected showFire = false;
  protected showSnow = false;
  private fireFadeTimeout?: ReturnType<typeof setTimeout>;
  private snowFadeTimeout?: ReturnType<typeof setTimeout>;
  private fireFadeId = 0;
  private snowFadeId = 0;

  setFire(enabled: boolean): void {
    if (enabled) {
      this.fireFadeId++;

      clearTimeout(this.fireFadeTimeout);

      this.showFire = true;
      this.fireService.startFire();

      requestAnimationFrame(() => {
        this.doFire = true;
      });

      return;
    }

    this.doFire = false;

    clearTimeout(this.fireFadeTimeout);

    const fadeId = ++this.fireFadeId;

    this.fireFadeTimeout = setTimeout(() => {
      if (fadeId !== this.fireFadeId) {
        return;
      }

      this.showFire = false;
      this.fireService.stop();
    }, 3000);
  }

  setSnow(enabled: boolean): void {
    if (enabled) {
      this.snowFadeId++;

      clearTimeout(this.snowFadeTimeout);

      this.showSnow = true;
      this.snowService.startSnowfall();

      requestAnimationFrame(() => {
        this.doSnow = true;
      });

      return;
    }

    this.doSnow = false;

    clearTimeout(this.snowFadeTimeout);

    const fadeId = ++this.snowFadeId;

    this.snowFadeTimeout = setTimeout(() => {
      if (fadeId !== this.snowFadeId) {
        return;
      }

      this.showSnow = false;
      this.snowService.stop();
    }, 3000);
  }

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
