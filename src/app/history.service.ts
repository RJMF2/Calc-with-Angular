import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/history.json');
  }
  postData(historyArr: any[]) {
    return this.http.post('assets/history.json', historyArr);
  }
}
