import { MenuType, RouteInfo } from './navbar.model';

export const ROUTES: RouteInfo[] = [
    { path: '', title: 'App Brand Here', menuType: MenuType.BRAND },
    { path: '', title: 'One Route', menuType: MenuType.LEFT },
    { path: '', title: 'Two Route', menuType: MenuType.LEFT },
    { path: '', title: 'Three Route', menuType: MenuType.LEFT }
]
