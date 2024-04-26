import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  companyName = new BehaviorSubject(null);
  companyName$ = this.companyName.asObservable();
  productDetails = new BehaviorSubject(null);
  productDetails$ = this.companyName.asObservable();
  salutation = new BehaviorSubject(null);
  salutation$ = this.salutation.asObservable();

  constructor ( private http: HttpClient) { }

  addComments(payload: any): Observable<any> {
    return this.http.post(`${environment.getComment}`, payload, {
      // headers: new HttpHeaders({
      //   'Authorization': 'Basic ' + btoa(`${environment.apiPassword}:${environment.apiPassword}`)
      // })
    } );
  }

  addUsers(payload: any): Observable<any> {
    return this.http.post(`${environment.getUsers}`, payload, {
      // headers: new HttpHeaders({
      //   'Authorization': 'Basic ' + btoa(`${environment.apiPassword}:${environment.apiPassword}`)
      // })
    } );
  }
  
  getAllComments(): Observable<any> {
    return this.http.get(`${environment.getComment}`, {
      // headers: new HttpHeaders({
      //   'Authorization': 'Basic ' + btoa(`${environment.apiPassword}:${environment.apiPassword}`)
      // })
    } );
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.getUsers}`, {
      // headers: new HttpHeaders({
      //   'Authorization': 'Basic ' + btoa(`${environment.apiPassword}:${environment.apiPassword}`)
      // })
    } );
  }

}

