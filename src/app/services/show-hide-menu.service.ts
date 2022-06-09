import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowHideMenuService {
  private _toggleMenu=new BehaviorSubject<boolean>(true);
  checkToggle=this._toggleMenu.asObservable();
  setMenuToggle(toggle:boolean):void{
    this._toggleMenu.next(toggle);
  }

  constructor() { }
}
