### app-by-profile

Allows to get Config and Database for base Maintstar node.js App by profile:

``` js
// ex: profile = 'default', app = 'permit', 
// getByConfig - function which returns database by DBConfig which is taken from Config->Db
getProfileDatabase(app, profile, getByConfig)
```

``` js
// ex: profile = 'default', app = 'permit'
// getByConfig - function which returns database by DBConfig which is taken from Config->Db
getProfileConfig(app, profile, getByConfig)
```

typical configuration structure is 

```
/config
  index.js              // base settings
  /profiles
    default.js          // connection to default app, default profile
    deafult_permit.js   // config for permit app db, default profile
    mainCity_permit.js  // config for permit app db, mainCity profile
    ...
```