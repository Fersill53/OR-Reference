/*import { Component } from "@angular/core";

import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    template: `<router-outlet></router-outlet>`
})

export class AppComponent {} */

/*import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="padding:12px;border-bottom:1px solid #eee">
      <a routerLink="/procedures">Open Procedures</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
*/

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="site-header">
      <div class="container">
        <a class="brand" routerLink="/">OR Setup Reference</a>
        <nav>
          <a class="nav-link" routerLink="/procedures">Procedures</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <router-outlet></router-outlet>
    </main>

    <footer class="site-footer">
      <div class="container">Built for Surgical Tech learning • Demo</div>
    </footer>
  `,
  styles: [`
    :host { display:block; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color:#111; }
    .container { max-width:1100px; margin:0 auto; padding:0 16px; }
    .site-header { border-bottom:1px solid #eee; background:#fff; position:sticky; top:0; z-index:20; }
    .site-header .container { display:flex; align-items:center; justify-content:space-between; height:64px; }
    .brand { font-weight:700; text-decoration:none; color:inherit; }
    nav .nav-link { margin-left:12px; text-decoration:none; color:#374151; }
    .site-footer { margin-top:40px; padding:20px 0; color:#6b7280; text-align:center; border-top:1px solid #f3f4f6; }
    main.container { padding:24px 16px; min-height:60vh; }
  `]
})
export class AppComponent {}
