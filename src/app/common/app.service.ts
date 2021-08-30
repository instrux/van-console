import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { resource } from '@common/data';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  /**
   * 获取资源数据
   */
  resources(): Observable<any> {
    return of(resource).pipe(
      map(result => {
        const navs: Record<string, any>[] = [];
        const data: Record<string, any> = {};
        const dict: Record<string, string> = {};
        for (const x of result.data) {
          data[x.id] = x;
          if (!x.nav) {
            continue;
          }
          if (x.parent === 0) {
            x.url = [x.fragment];
            navs.push(x);
          } else {
            if (data.hasOwnProperty(x.parent)) {
              if (!x.hasOwnProperty('url')) {
                x.url = [...data[x.parent].url];
              }
              x.url.push(x.fragment);
              if (!data[x.parent].hasOwnProperty('children')) {
                data[x.parent].children = [];
              }
              data[x.parent].children.push(x);
            }
          }
          dict[x.url.join('/')] = x.id;
        }
        return {
          navs,
          data,
          dict
        };
      })
    );
    // return this.http.post(`${this.config.baseUrl}resource`, {}).pipe(
    //   map((result: any) => {

    // );
  }
}
