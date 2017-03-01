import { Component, OnInit } from '@angular/core';
import { ROUTES } from './header-routes';
import { MenuType } from './header.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public menuItems: any[];
    public brandMenu: any;

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
        console.log(this.menuItems);
    }

}
