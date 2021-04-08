import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IshaEvent } from '@src/app/core/models/ishaEvent';

@Injectable({
  providedIn: 'root'
})
export class IshaEventService {

  baseUrl = '/api/';

  constructor(private http: HttpClient) { }

  getIshaEvents(limit = -1) {
    if (limit === -1) {
      return this.http.get<IshaEvent[]>(this.baseUrl);
    }
    return this.http.get<IshaEvent[]>(this.baseUrl, {
      params: {limit: limit.toString()}
    });
  }
}
