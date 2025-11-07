/*import { Component } from "@angular/core";
import { ProceduresService } from "../../../core/services/procedures.service";
import { Procedure } from "../../../core/models/procedure.model";
import { BehaviorSubject, combineLatest, map } from "rxjs";

@Component({
    selector: 'app-procedures-list',
    templateUrl: './procedures-list.component.html',
    styleUrls: ['./procedures-list.component.scss']
})

export class ProceduresListComponent {
    q = ' ';

    private query$ = new BehaviorSubject<string>(' ');

    readonly filtered$ = combineLatest([
        this.svc.getAll(),
        this.query$
    ]).pipe(
        map(([procedures, q]) => {
            const term = q.toLowerCase().trim();
            if (!term) return procedures;
            return procedures.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.service.toLowerCase().includes(term) ||
                (p.tags ?? []).some(t => t.toLowerCase().includes(term))
            );
        })
    );

    constructor(private svc: ProceduresService) {}

    onQuery(v: string) {
        this.q = v;
        this.query$.next(v);
    }
} */

/*import { Component } from "@angular/core";

import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { ProceduresService } from "../../../core/services/procedures.service";

import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";

import { Procedure } from "../../../core/models/procedure.model";

@Component({
    selector: 'app-procedures-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './procedures-list.component.html',
    styleUrls: ['./procedures-list.component.scss']
})
export class ProceduresListComponent {
    q = '';
    private query$ = new BehaviorSubject<string>('');

    readonly filtered$!: Observable<Procedure[]>; 

    constructor(private svc: ProceduresService) {
        this.filtered$ = combineLatest([
            this.svc.getAll(),
            this.query$
        ]).pipe(
            map(([procedures, query]) => {
                const term = (query ?? '').toLowerCase().trim();
                if (!term) return procedures;
                return procedures.filter((p: Procedure) => 
                    p.name.toLowerCase().includes(term) ||
                    p.service.toLowerCase().includes(term) ||
                    (p.tags ?? []).some(t => t.toLowerCase().includes(term))
                );
            })
        );
    }

    onQuery(v: string) {
        this.q = v;
        this.query$.next(v);
    }
} */

/*import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProceduresService } from "../../../core/services/procedures.service";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { Procedure } from "../../../core/models/procedure.model";

@Component({
  selector: 'app-procedures-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.scss']
})
export class ProceduresListComponent {
  q = '';
  private query$ = new BehaviorSubject<string>('');
  readonly filtered$!: Observable<Procedure[]>;

  constructor(private svc: ProceduresService) {
    this.filtered$ = combineLatest([
      this.svc.getAll(),
      this.query$
    ]).pipe(
      map(([procedures, query]) => {
        const term = (query ?? '').toLowerCase().trim(); // <-- () added
        if (!term) return procedures;
        return procedures.filter((p: Procedure) =>
          p.name.toLowerCase().includes(term) ||
          p.service.toLowerCase().includes(term) ||
          (p.tags ?? []).some(t => t.toLowerCase().includes(term))
        );
      })
    );
  }

  onQuery(v: string) {
    this.q = v;
    this.query$.next(v);
  }
} */

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProceduresService } from "../../../core/services/procedures.service";
import { BehaviorSubject, Observable, startWith, switchMap, map } from "rxjs";
import { Procedure } from "../../../core/models/procedure.model";

@Component({
  selector: 'app-procedures-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.scss']
})
export class ProceduresListComponent {
  q = '';
  private query$ = new BehaviorSubject<string>('');
  readonly filtered$!: Observable<Procedure[]>;

  constructor(private svc: ProceduresService) {
    this.filtered$ = this.query$.pipe(
      startWith(''),
      switchMap(query =>
        this.svc.getAll().pipe(
          map(list => {
            const term = (query ?? '').toLowerCase().trim();
            if (!term) return list;
            return list.filter((p: Procedure) =>
              p.name.toLowerCase().includes(term) ||
              p.service.toLowerCase().includes(term) ||
              (p.tags ?? []).some(t => t.toLowerCase().includes(term))
            );
          })
        )
      )
    );
  }

  onQuery(v: string) {
    this.q = v;
    this.query$.next(v);
  }
}

