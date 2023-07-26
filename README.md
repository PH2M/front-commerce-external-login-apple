Front-Commerce external login Apple
-------
Implement the external login with Apple your Front-Commerce project using [passport-apple](https://link-url-here.org)https://www.npmjs.com/package/passport-apple and following [Front-Commerce documentation](https://developers.front-commerce.com/docs/2.x/advanced/features/external-logins/advanced#creating-your-own-provider)

![Latest version](https://img.shields.io/badge/latest-v1.0.0-green.svg)

Supported Version
------------
✅ Front-Commerce = 2.13+ 

Installation & Configuration
------------
1. Install the latest stable version for the module
```
npm install ph2m/front-commerce-external-login-apple#1.0.0
```
2. Generate your Apple credential for Apple auth feature: https://github.com/ananay/apple-auth/blob/master/SETUP.md#configuring-the-library
3. Add your own configuration on the `.env` file
```
[Required] FRONT_COMMERCE_APPLE_CLIENT_ID
[Required] FRONT_COMMERCE_APPLE_CLIENT_TEAM_ID
[Required] FRONT_COMMERCE_APPLE_KEY_ID
[Optional] FRONT_COMMERCE_APPLE_DEFAULT_FIRSTNAME => set default firstname to user who create account with external auth Apple
[Optional] FRONT_COMMERCE_APPLE_DEFAULT_LASTNAME => set default firstname to user who create account with external auth Apple
```
4. Create `.externalLoginAppleAuthKey.p8` file in your project root directory and past inside content of your `AuthKey.p8`
5. Load the module on `.front-commerce.js` file
```
 modules: [
    ...
    "./node_modules/front-commerce-external-login-apple",
  ],
  serverModules: [
    ...
    {
      name: "ExternalLoginApple",
      path: "./node_modules/front-commerce-external-login-apple/server/modules/auth-external-login",
    },
  ],
  webModules: [
    ...
    {
      name: "FrontCommerceConversionsApi",
      path: "./node_modules/front-commerce-external-login-apple/web",
    },
  ],
```
6. Include Apple login button by the including following components
```
+ import AppleSignIn from "theme/components/atoms/SignInButton/AppleSignIn";
+ <AppleSignIn />
```
Licence
-------
[GNU General Public License, version 3 (GPLv3)](http://opensource.org/licenses/gpl-3.0)