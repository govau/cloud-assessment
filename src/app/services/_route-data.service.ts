// import { Injectable } from '@angular/core';
// import { ROUTE_DATA } from '../data/RouteData';

// @Injectable()
// export class RouteDataService {

//     static getCurrentRouteDataByPath(path: string) {
//         const safePath = path
//             .replace(/^\//i, '')
//             .toLowerCase();

//         if (ROUTE_DATA.hasOwnProperty(safePath)) {
//             return ROUTE_DATA[safePath];
//         } else {
//             throw new Error('path not found');
//         }
//     }

//     constructor() { }

//     public getCurrentRouteData() {
//         const pathWithoutSlash = location.pathname.substring(1);
//         return ROUTE_DATA[pathWithoutSlash];
//     }
// }
