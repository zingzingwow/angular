import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  baseUrl: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
    // mac dinh se la observe: response
  }

  //as request params but with ? & =
  getSumV1(numberOne: number, numberTwo: number): Observable<HttpResponse<number>> {

    return this.http
      .get<number>(`${this.baseUrl}/get-sum-v1?numberOne=${numberOne}&numberTwo=${numberTwo}`, {observe: 'response'})
  }

  //as path variable
  getSumV2(numberOne: number, numberTwo: number): Observable<HttpResponse<number>> {

    return this.http
      .get<number>(`${this.baseUrl}/get-sum-v2/${numberOne}/${numberTwo}`, {observe: 'response'})
  }

  // as request params
  getSumV3(numberPair : any): Observable<number> {

    return this.http.get<number>(`${this.baseUrl}/get-sum-v3`, {params: numberPair})
  }

  // as post with body
  getSumV4(body: any): Observable<HttpResponse<number>> {
    return this.http.post<number>(`${this.baseUrl}/get-sum-v4`, body, {observe: 'response'})
  }

}
