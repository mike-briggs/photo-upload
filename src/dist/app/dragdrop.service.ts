import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DragdropService {

  constructor(private http: HttpClient) { }

  addFiles(images: File) {
    var arr = []
    var formData = new FormData();
    arr.push(images);

    arr[0].forEach((item, i) => {
      formData.append('avatar', arr[0][i]);
    })
    console.log(images)

    let skills = ["Leadership","Technical"];
    formData.append('id',localStorage.getItem('Id'))
    console.log(localStorage.getItem('Id'))
    let user_id = localStorage.getItem('Id')
    if(user_id){
    return this.http.put('https://ten-k-photos.herokuapp.com/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    )
    }

  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
