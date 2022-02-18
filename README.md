# Node User Auth

User authentication with JWT. 

## Stack 

- Framework - Express
- Database - PostgreSQL
- ORM = Sequelize

## Project Setup
1. Node and npm
2. Dependencies
3. Database setup 

`OR`

## Routes
1. User Signup
    
    `POST 'api/users/signup`
    
    Response(200)
    ```json
    {
        "username": "test_user",
        "email": "test_user@gmail.com",
        "password": "$2b$10$9SKYPuru6AU3TOC2pbe9XD19LKlNX2aSMzCZsdtXda.amVdQlge",
        "createdAt": "2022-02-18T08:15:20.768Z",
        "updatedAt": "2022-02-18T08:15:20.768Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.."
    }
    ```

2. User Login

    `POST 'api/users/login`

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

3. User Auth

    `POST 'api/user`

    Response(200)

    ```json
    {
        "username": "new",
        "email": "new@test.com",
        "password": "kudo123",
        "createdAt": "2022-02-13T08:24:14.752Z",
        "updatedAt": "2022-02-13T08:24:14.752Z",
        "iat": 1645012869
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

**Postman Collection** 