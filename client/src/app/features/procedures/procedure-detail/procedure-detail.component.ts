/*
import { Component } from "@angular/core";

import { CommonModule } from "@angular/common";

import { RouterModule, ActivatedRoute } from "@angular/router";

import { ProceduresService } from "../../../core/services/procedures.service";

import { Procedure } from "../../../core/models/procedure.model";

import { switchMap } from "rxjs/operators";

import { Observable } from "rxjs";

@Component({
    selector: 'app-procedure-detail',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './procedure-detail.component.html',
    styleUrls: ['./procedure-detail.component.scss']
})

export class ProcedureDetailComponent {
    readonly procedure$!: Observable<Procedure | undefined> 

    constructor(private route: ActivatedRoute, private svc: ProceduresService) {
        this.procedure$ = this.route.paramMap.pipe(
            switchMap(params => this.svc.getById(params.get('id')!))
        );
    }
}
    */

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { ProceduresService } from "../../../core/services/procedures.service";
import { Procedure } from "../../../core/models/procedure.model";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-procedure-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './procedure-detail.component.html',
  styleUrls: ['./procedure-detail.component.scss']
})
export class ProcedureDetailComponent {
  readonly procedure$!: Observable<Procedure | undefined>;

  constructor(private route: ActivatedRoute, private svc: ProceduresService) {
    this.procedure$ = this.route.paramMap.pipe(
      switchMap(params => this.svc.getById(params.get('id')!))
    );
  }
}
