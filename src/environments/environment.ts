// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  smartContracts: {
    provider: 'ws://127.0.0.1:8545',
    defaultAccount: '0x732225352A2339e83343f5C7581C69cd5Ba0dED6',
    address: '0x327C40BFF941971A61E0728f7e32f99B0da8eFdC'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
