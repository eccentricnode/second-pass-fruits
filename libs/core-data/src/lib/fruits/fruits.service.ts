import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-rpjdxzwbqn.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  model = `fruits`

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res)));
  }

  create(fruit) {
    return this.http.post(this.getUrl(), fruit);
  }

  update(fruit) {
    return this.http.patch(this.getUrlForId(fruit.id), fruit);
  }

  delete(fruitId) {
    return this.http.delete(this.getUrlForId(fruitId));
  }
}
