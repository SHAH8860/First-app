import { Component, OnInit } from '@angular/core';
import { ShowHideMenuService } from '../services/show-hide-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private ShowMenu:boolean=true;
  text:string="Hide Menu"


  constructor(private _menuservice:ShowHideMenuService) { }

  ngOnInit(): void {
  }
  toogleMenu(e:Event):void{
    e.stopPropagation();
    this.ShowMenu=!this.ShowMenu;
    if (this.ShowMenu){
      this.text="Hide Menu"
    }else{
      this.text="Show Menu"
    }
    this._menuservice.setMenuToggle(this.ShowMenu);

  }

}
