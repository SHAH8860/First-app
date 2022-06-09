import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowHideMenuService } from 'src/app/services/show-hide-menu.service';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.css']
})
export class PrivateLayoutComponent implements OnInit,OnDestroy {
  ShowMenu:boolean=true;
  subscription:Subscription|any;

  constructor(private _menuservice:ShowHideMenuService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  

  ngOnInit(): void {
   this.subscription=this._menuservice.checkToggle.subscribe((toggleState:boolean)=>{
     console.log(toggleState)
     this.ShowMenu=toggleState;
   })
  }
  

}
