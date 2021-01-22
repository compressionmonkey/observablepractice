import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

export class AppComponent{
  date: any[] = [];
  constructor(private http: HttpClient) { 
    this.getProducts()
    .subscribe(
      (res: any) => {
        this.date = res;
        console.log('ya',this.date);
      }, err => {
        console.log('error',err)
      }
    )
  }
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error('pop',error);
      return of(result as T);
    };
  }

  getProducts(): Observable<any[]> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get<any[]>(apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
}
