# cr-auth
* Bower dependencies [![Dependency Status](https://www.versioneye.com/user/projects/54194f14918598e8bd000089/badge.svg?style=flat)](https://www.versioneye.com/user/projects/54194f14918598e8bd000089)
* NPM dependencies  [![Dependency Status](https://www.versioneye.com/user/projects/5419541791859833fd00007c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5419541791859833fd00007c)
* Travis    [![Build Status](https://travis-ci.org/corley/cr-auth.svg)](https://travis-ci.org/corley/cr-auth)

``` shell
$. bower install
```

### base64 Auth
Inject in your project 'corley.auth' and use the providers in your configuration step:


``` javascript
//add base 64 auth handler to cr-remote-serivce
$crRemoteServiceProvider.setAuthHandler($crAuthBasic);

//then add base 64 auth handler to cr-user
$crUserProvider.setAuthHandler($crAuthBasic);

//to set auth when the user is authenticated (in services, controllers...)
crUser.setKey({username: "my-username", password: "my-password"});
```

The example above will add the header "Authorization: = Basic " + base64(username" + ":" + password)
