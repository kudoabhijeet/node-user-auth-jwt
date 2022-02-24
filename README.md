# Node Starter 

User authentication with JWT. 

## Stack 

- Framework : Express
- Database : PostgreSQL
- ORM : Sequelize

## Project Setup
1. Node and npm
    ```bash
    node -v
    ```
2. Install Dependencies
    ```bash
    npm i 
    ```
    `OR`

    ```bash
    yarn install
    ```
3. Database setup (Postgres)
    ```bash
    create db test;
    create user test with encrypted password 'test';
    grant all privileges on test to test;
    ```
## Routes
1. User Signup
    
    `POST 'api/auth/signup'`

    Request
    ```json
    {
        "username": "username_01",
        "email": "user@gmail.com",
        "password" : "user_pass"
    }   
    ```
    Response(200)
    ```json
    {
        "id": "0ef9sQAyFZgvNFQ_uubBH",
        "username": "username_01",
        "email": "user@gmail.com",
        "password": "$2b$10$3lyt4sFXRc3aw9IUvbvm6.9eWjnOsDoYw1FAoAgY1pZDPekRlK7JO",
        "createdAt": "2022-02-22T14:48:42.656Z",
        "updatedAt": "2022-02-22T14:48:42.656Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlZjlzUUF5Rlpndk5GUV91dWJCSCIsInVzZXJuYW1lIjoidXNlcm5hbWVfMDEiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkM2x5dDRzRlhSYzNhdzlJVXZidm02LjllV2puT3NEb1l3MUZBb0FnWTFwWkRQZWtSbEs3Sk8iLCJjcmVhdGVkQXQiOiIyMDIyLTAyLTIyVDE0OjQ4OjQyLjY1NloiLCJ1cGRhdGVkQXQiOiIyMDIyLTAyLTIyVDE0OjQ4OjQyLjY1NloiLCJpYXQiOjE2NDU1NDEzMjJ9.01mfdDGcVi2OrtUKP7u4b-_owBkNAI6nO7MaD_m7CaM"
    }
    ```

2. User Login

    `POST 'api/auth/login'`

    Request 
    ```json
    {
        "email": "salt@test.com",
        "password" : "salt_pass"
    }
    ```
    Response(200)
    ```json
    {
        "username": "salt",
        "email": "salt@test.com",
        "password": "$2b$10$HEXHsGtFrQDGw1UNulVEZTkhx5AKfK4kidw9C3ySLABMnGz.",
        "createdAt": "2022-02-16T13:03:23.405Z",
        "updatedAt": "2022-02-16T13:03:23.405Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

3. Authenticated User

    `POST 'api/user'`

    Request

    ```json
    Authorization:Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ldyIsImVtYWlsIjoibmV3QHRlc3QuY29tIiwicGFzc3dvcmQiOiJrdWRvMTIzIiwiY3JlYXRlZEF0IjoiMjAyMi0wMi0xM1QwODoyNDoxNC43NTJaIiwidXBkYXRlZEF0IjoiMjAyMi0wMi0xM1QwODoyNDoxNC43NTJaIiwiaWF0IjoxNjQ1MDEyODY5fQ.dG8SUezN07dHkBnaU1SW3eN9FyzrguhTl6Ej7fDHAcw
    ```

    Response(200)
    ```json
    {
        "username": "new",
        "email": "new@test.com",
        "password": "$HEXHsGtFrQDGw1UNulVEZTkhx5AKfK4kidw9C3yS",
        "createdAt": "2022-02-13T08:24:14.752Z",
        "updatedAt": "2022-02-13T08:24:14.752Z",
        "iat": 1645012869
    }
    ```

4. User Details

   ` GET '/api/auth/:id' `

   Response(200)

   ```json
    {
        "id": "QJWRShsA3oSfYAYtdiqEE",
        "username": "username",
        "email": "user@test.com"
    }
   ```
## Sample ```.env``` 
```
PORT=8080
JWT_SECRET=`abhijeet`
DB_DB=`test`
DB_USER=`test`
DB_PASS=`test`
DB_PORT = 5432

```

**[Postman Collection](https://www.getpostman.com/collections/95848b5da310765a7f79)** 
