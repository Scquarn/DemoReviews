import { Injectable, signal, computed } from "@angular/core";
import { interval, Subscription } from "rxjs";

export interface FireSpark {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
}

@Injectable({
  providedIn: "root",
})
export class FireService {
  private readonly maxSparks = 100;
  private sparks = signal<FireSpark[]>([]);
  private subscription?: Subscription;
  public getSparks = computed(() => this.sparks());

  constructor() {
    this.initializeSparks();
  }

  private initializeSparks(): void {
    const initialSparks = Array.from({ length: this.maxSparks }, (_, i) =>
      this.createSpark(i)
    );

    this.sparks.set(initialSparks);
  }

  private createSpark(id: number): FireSpark {
    return {
      id,
      x: Math.random() * 100,
      y: Math.pow(Math.random(), 1.5) * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      drift: (Math.random() - 0.5) * 0.5,
    };
  }

  public startFire(): void {
    if (this.subscription) {
      return;
    }

    this.subscription = interval(50).subscribe(() => {
      this.sparks.update((sparks) =>
        sparks.map((spark) => {
          const newY = spark.y + spark.speed;
          const newOpacity = spark.opacity - 0.015;

          if (newY > 100 || newOpacity <= 0) {
            return this.createSpark(spark.id);
          }

          return {
            ...spark,
            y: newY,
            x: spark.x + spark.drift + Math.sin(spark.y / 10) * 0.15,
            opacity: newOpacity,
          };
        })
      );
    });
  }

  stop(): void {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }
}
