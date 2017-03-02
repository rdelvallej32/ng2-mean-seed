import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes';
import { MenuType } from './navbar.model';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    public menuItems: any[];
    public brandMenu: any;
    public isCollapsed: Boolean = true;

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    }

    toggle() {
        if (this.isCollapsed) {
            this.isCollapsed = false;
        } else {
            this.isCollapsed = true;
        }
    }

}
