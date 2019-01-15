import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CosmicService {
  constructor(private http: HttpClient) {}

  getPage(slug: string) {
    const url = `${environment.URL + environment.bucket_slug}/object/${slug}`;
    return this.http.get(url).pipe(
      map(_ => {
        return _['object'];
      })
    );
  }
}
