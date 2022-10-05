// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAQYFyuzvShqsLS0ZkVIS0x9pCDUadSyT0",
    authDomain: "sistatend-ae6a9.firebaseapp.com",
    databaseURL: "https://sistatend-ae6a9.firebaseio.com",
    projectId: "sistatend-ae6a9",
    storageBucket: "sistatend-ae6a9.appspot.com",
    messagingSenderId: "169324066077",
    appId: "1:169324066077:web:b84634b522455273"
  },
  googleApiKey: 'AIzaSyDyaiWYxbAOizjHJIV0jHW82iStHDWXK6g'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
