import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate {
  canActivate(): Observable<any> {
    return of(true);
  }
}
