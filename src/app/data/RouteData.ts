import { ROUTE_PATH } from '../Routes';
// import { homeJumpIns } from './HomePage';
// import { claimsTiles, accountTiles } from './LandingPages';
// import HelpText from "../interfaces/HelpText";
// import StringValueObject from '../interfaces/StringValueObject';
// import { BREADCRUMB_LABEL } from './BreadCrumbLabel';

// const dateErrors = {
//   future: "Date cannot be in the future",
//   format: "Date must be formatted DD / MM / YYYY",
//   tooOld: "Date must not be more than a year old"
// };

// const homeOnlyBreadcrumbs = [ ROUTE_PATH.HOME ];
// const accountBreadcrumbs = [ ROUTE_PATH.HOME, ROUTE_PATH.ACCOUNT ];
// const claimsBreadcrumbs = [ ROUTE_PATH.HOME, ROUTE_PATH.CLAIMS ];

// interface BreadCrumbsData {
//   parents?: string[];
//   label?: string;
// }

// interface RouteData {
//   [routeKey: string]: {
//     // breadcrumbs?: BreadCrumbsData;
//     banner: {
//       // VSC isn't handling a alternative to any
//       // So we're using it for now.
//       title: string | any;
//       subtitle?: string | any;
//       successType?: boolean;
//     };
//     jumpIns?;
//     tiles?;
//     helpText?: HelpText;
//     errorText?: StringValueObject;
//     alertBoxText?: StringValueObject;
//     breakoutBoxText?: StringValueObject;
//     otherText?: StringValueObject;
//     flow?: string;
//     currentState?: string;
//   };
// }

//export const ROUTE_DATA: RouteData = {
export const ROUTE_DATA = {
    [ROUTE_PATH.DATA_SECURITY]: {
        category: 'Data security',
        description: 'description of data security...',
        question: 'What level of protection does your data require?',
        options: ['None', 'Protected', 'Confidential', 'Secret', 'Top securet'],
        helpText: `<a href='https://google.com.au'>More info</a>`,
        errorMessage: 'data security errorText!'
    },

};
