import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class TaskServiceProvider {

  private API_URL = 'https://jsonplaceholder.typicode.com/todos'

  constructor(public http: Http) {
    console.log('Hello TaskServiceProvider Provider');
  }

  getAll() {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}
