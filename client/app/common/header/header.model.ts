export enum MenuType {
    BRAND,
    LEFT,
    CENTER,
    RIGHT
}

export interface RouteInfo {
    path: string,
    title: string,
    menuType: MenuType
}
