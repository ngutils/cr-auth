# cr-auth
* Bower dependencies [![Dependency Status](https://www.versioneye.com/user/projects/54194f14918598e8bd000089/badge.svg?style=flat)](https://www.versioneye.com/user/projects/54194f14918598e8bd000089)
* NPM dependencies  [![Dependency Status](https://www.versioneye.com/user/projects/5419541791859833fd00007c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5419541791859833fd00007c)
* Travis [![Build Status](https://travis-ci.org/ngutils/cr-auth.svg?branch=master)](https://travis-ci.org/ngutils/cr-auth)

CrAuth is an Authentication service it help you to manage authorization it in your application.
It can manage your identity session and sign of your request.

## Install
``` shell
$. bower install
```

## Basic configuration
Now this service support only Base Auth (`crAuthBasic`), in this example I use [LocalStorageModule](https://github.com/grevory/angular-local-storage)
to manage session.
```javascript
angular.module(
        'ngPolecats',
        [
            'cr.auth',
            'LocalStorageModule'
        ]
)
.config(function myAppConfig(localStorageServiceProvider) {
    localStorageServiceProvider.setStorageType('sessionStorage');
})
.run(function run(crAuth, localStorageService, crAuthBasic) {
    crAuth.setAuthHandler(crAuthBasic);
    crAuth.setSessionHandler(localStorageService);
})
.controller('AppCtrl', function AppCtrl($scope, $state, $rootScope) {
});
```

## Session Handlers
You can use different session handlers but there are some considerations:
* `crAuth.getIdentity()` calls `this.getAuthSession().get("cr-user")` to set identity, your Object **require** `Object.get("key")`
* `crAuth.setIdentity(user)` calls `this.getAuthSession().set("cr-user", identity)` to set identity, your Object **require** `Object.set("key", value)`

## Auth Handlers
Work in progress
* Cognito
