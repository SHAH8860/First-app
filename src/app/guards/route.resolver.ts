import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class RouteResolver implements Resolve<boolean> {
  [x: string]: any;
  constructor(public http: HttpClient,private val:BlogService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.val.getPost()
    
  }
}
