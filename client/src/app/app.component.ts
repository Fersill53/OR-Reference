/*import { Component } from "@angular/core";

import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    template: `<router-outlet></router-outlet>`
})

export class AppComponent {} */

import { Component } from '@angular/core';
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
