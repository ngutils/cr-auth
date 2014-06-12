## cr-auth

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