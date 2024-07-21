import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    MatSidenavModule,
    MatNavList,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-review';
  showMenu = false;
  protected readonly router = inject(Router);

  showEntry(route: string) {
    this.router.navigate([route]);
    this.showMenu = false;
  }
}
