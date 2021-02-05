# :notebook: login-sys

login-sys is a REST API which provides some tools for admin/common users profile management

## Install:

First of all, you'll need:
1. Docker
2. Docker compose
3. npm

#### As it is docker configured, simply run:
```bash
~$ docker-compose build
```

## Run:

#### Then just run:
```bash
~$ docker-compose up
```

and the server must be up and running at port 3000!

PS: Once you run it, the server will register an admin user with the following credentials:

username: admin

password:12345678

## Admin Routes

### 1. POST admin Login (/api/service/master/auth/login)

You must use the token it retrieves to make the other admin requests sending the header 'x-access-token'
 
 Example Body:
 ```bash
{
    "username": "teste",
    "password": "teste"
}
 ```
  Example Response:
 ```bash
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNTcxMWNjZjE2YTAwMjE4ZTRjM2MiLCJsb2dpbl90eXBlIjoiYWRtaW4iLCJpYXQiOjE2MTI1MzU1NzcsImV4cCI6MTYxMjUzNTg3N30.1ds1gFCAOkSxuSxtBGmnrYEfuMo9LYxV_YpLlx1dyfE"
}
 ```
 
### 2. GET admin profile (/api/service/master/profile/get)

Here the admin can get their information
 
Example Response:
 ```bash
{
    "_id": "601d5711ccf16a00218e4c3c",
    "name": "admin",
    "username": "admin",
    "password": "12345678",
    "login_type": "admin",
    "tokens": [
        {
            "_id": "601d5c67432e020021f3f8ae",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNTcxMWNjZjE2YTAwMjE4ZTRjM2MiLCJsb2dpbl90eXBlIjoiYWRtaW4iLCJpYXQiOjE2MTI1MzU1NzcsImV4cCI6MTYxMjUzNTg3N30.1ds1gFCAOkSxuSxtBGmnrYEfuMo9LYxV_YpLlx1dyfE"
        }
    ],
    "last_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNTcxMWNjZjE2YTAwMjE4ZTRjM2MiLCJsb2dpbl90eXBlIjoiYWRtaW4iLCJpYXQiOjE2MTI1MzY5MzUsImV4cCI6MTYxMjUzNzIzNX0.YbyAmQsLk1cAAuh8Bb_MpD6taSymr1AUn4HDrCGixEo"
}
```
 
### 3. PATCH admin password (/api/service/master/profile/update/:admin_id)

Here the admin can change their password
 
Example Body:
 ```bash
{
    "password": "teste"
}
 ```
 
 Example Response:
 ```bash
{
    "_id": "601d5711ccf16a00218e4c3c",
    "name": "admin",
    "username": "admin",
    "password": "teste",
    "login_type": "admin",
    "tokens": [
        {
            "_id": "601d5c67432e020021f3f8ae",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNTcxMWNjZjE2YTAwMjE4ZTRjM2MiLCJsb2dpbl90eXBlIjoiYWRtaW4iLCJpYXQiOjE2MTI1MzU1NzcsImV4cCI6MTYxMjUzNTg3N30.1ds1gFCAOkSxuSxtBGmnrYEfuMo9LYxV_YpLlx1dyfE"
        }
    ],
    "last_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNTcxMWNjZjE2YTAwMjE4ZTRjM2MiLCJsb2dpbl90eXBlIjoiYWRtaW4iLCJpYXQiOjE2MTI1Mzc0NjUsImV4cCI6MTYxMjUzNzc2NX0.iFHCytMX5fZwXU713eSYfpwwD0VLo89rG1clNzfqFeI"
}
 ```
 
### 4. POST create user (/api/service/master/user/create)

Here the admin can create a new user
 
  Example Body:
 ```bash
{
    "name": "teste",
    "username": "teste",
    "login_type": "common",
    "password": "testeteste",
    "tokens": []
}
 ```
 
  Example Response:
 ```bash
{
    "_id": "601d5ef7432e020021f3f8b0",
    "name": "teste",
    "username": "teste",
    "login_type": "common",
    "password": "testeteste",
    "tokens": []
}
 ```
 
### 5. PATCH update user (/api/service/master/user/update/:user_id)
 
 Here the admin can update user info based on user id
 
  Example Body:
 ```bash
{
    "name": "teste_atualizado",
    "username": "teste_atualizado",
    "login_type": "teste_atualizado",
    "password": "teste_atualizado",
}
 ```
 
  Example Response:
 ```bash
{
    "_id": "601d5ef7432e020021f3f8b0",
    "name": "teste_atualizado",
    "username": "teste_atualizado",
    "login_type": "common",
    "password": "teste_atualizado",
    "tokens": []
}
 ```
 
### 6. DELETE delete user (/api/service/master/user/delete/:user_id)
 
 Here the admin can delete a user based on user id
 
  Example Response:
 ```bash
{
    "_id": "601d5ef7432e020021f3f8b0",
    "name": "teste_atualizado",
    "username": "teste_atualizado",
    "login_type": "common",
    "password": "teste_atualizado",
    "tokens": []
}
 ```

### 7. GET list all users (/api/service/master/user/list)

Here the admin can get a list of all users
 
  Example Response:
 ```bash
[
    {
        "_id": "601d5711ccf16a00218e4c3c",
        "name": "admin",
        "username": "admin",
        "password": "pppppppppppp",
        "login_type": "admin",
        "tokens": [],
        "last_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNTcxMWNjZjE2YTAwMjE4ZTRjM2MiLCJsb2dpbl90eXBlIjoiYWRtaW4iLCJpYXQiOjE2MTI1Mzg2MjUsImV4cCI6MTYxMjUzODkyNX0.OALdjopXiuVD3X7R_UecCV08YnYRLw8kJqxQQaqzXTo"
    },
    {
        "_id": "601d630942f80b00212343f7",
        "name": "teste",
        "username": "teste",
        "login_type": "common",
        "password": "testeteste",
        "tokens": []
    },
    {
        "_id": "601d631942f80b00212343f8",
        "name": "joseph",
        "username": "jojo",
        "login_type": "common",
        "password": "passssssss",
        "tokens": []
    }
]
 ```
 
 ## Common Routes

### 8. POST common user login (/api/service/user/auth/login)
 
 You must use the token it retrieves to make the other common user requests sending the header 'x-access-token'
 
 Example Body:
 ```bash
{
    "username": "teste",
    "password": "testeteste"
}
```
 
  Example Response:
 ```bash
{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNjMwOTQyZjgwYjAwMjEyMzQzZjciLCJsb2dpbl90eXBlIjoiY29tbW9uIiwiaWF0IjoxNjEyNTM4OTE1LCJleHAiOjE2MTI1MzkyMTV9.KMHQcDKD4Hzqb2ytUu9kyZln5HGMzq7juijgxEW-D0U"
}
 ```
 
 ### 9. GET own common user info (/api/service/user/profile/get)
 
 Here the common user can get their own info
 
  Example Response:
 ```bash
{
    "_id": "601d630942f80b00212343f7",
    "name": "teste",
    "username": "teste",
    "login_type": "common",
    "password": "testeteste",
    "tokens": [],
    "last_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNjMwOTQyZjgwYjAwMjEyMzQzZjciLCJsb2dpbl90eXBlIjoiY29tbW9uIiwiaWF0IjoxNjEyNTM4OTE1LCJleHAiOjE2MTI1MzkyMTV9.KMHQcDKD4Hzqb2ytUu9kyZln5HGMzq7juijgxEW-D0U"
}
 ```
 
 
### 10. PATCH common user update (/api/service/user/profile/update/:user_id)

Here the common uer can update their own info
 
 Example Body:
 ```bash
{
    "name": "patched",
    "username": "patched",
    "password": "patchedddd"
}
```
 
  Example Response:
 ```bash
{
    "_id": "601d630942f80b00212343f7",
    "name": "patched",
    "username": "patched",
    "login_type": "common",
    "password": "patchedddd",
    "tokens": [],
    "last_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNjMwOTQyZjgwYjAwMjEyMzQzZjciLCJsb2dpbl90eXBlIjoiY29tbW9uIiwiaWF0IjoxNjEyNTM4OTE1LCJleHAiOjE2MTI1MzkyMTV9.KMHQcDKD4Hzqb2ytUu9kyZln5HGMzq7juijgxEW-D0U"
}
 ```
