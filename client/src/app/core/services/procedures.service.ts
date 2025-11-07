/*import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Procedure } from '../models/procedure.model';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProceduresService {
    constructor(private http: HttpClient) {}

    get All(): Observable<Procedure[]> {
        return this.http.get<Procedure[]>('/assets/procedures.json');
    }

    getById(id: string): Observable<Procedure | undefined> {
        return this.getAll().pipe(map((list: Procedure[]) => list.find((p: Procedure) => p.id === id))
    );
    }
} */

// src/app/core/services/procedures.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Procedure } from '../models/procedure.model';

@Injectable({ providedIn: 'root' })
export class ProceduresService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>('/assets/procedures.json');
  }

  getById(id: string): Observable<Procedure | undefined> {
    return this.getAll().pipe(
      map((list: Procedure[]) => list.find((p: Procedure) => p.id === id))
    );
  }
}
