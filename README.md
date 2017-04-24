# rvw-points-api

## Usage
```curl –data “{\”username\” : \”arvind@myapp.com\”, \”password\” : \”pass123\”}” -H “content-type:application/json” http://localhost:3000/login```

```curl -H “content-type:application/json” -H “x-access-token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0MTE5MjcyMDAzNjl9.cuUKFKsf2qhQJHToP-zBmObhMwi84rhnrhH03OdyzSA” -H “x-key:arvind@myapp.com” http://localhost:3000/api/v1/products```

## Env-Vars

JWT_SECRET: the secret to generate JWT tokens
PORT: The port to host the api server on
CONNECTION_STRING: The connection string for the db

# TODOs

1. Migrate to passportjs http://passportjs.org/docs/username-password
1. Support external providers
1. Add redirect logic 
1. Add real api instead of this fake one
1. Hook up mongoose
1. Make this app runable from heroku or some other cloud-provider