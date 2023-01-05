
# Student Management System

This is a Student Management System web application. It performs CRUD (Create-Read-Update-Delete) operations with the data given by a student.


## Manage Storage (MySQL)

```bash
  create database if not exists sms_5jan23;
```
```bash
  use sms_5jan23;
```
```bash
  create table if not exists student(
  rno int unsigned primary key not null,
  name varchar(30) not null,
  marks tinyint unsigned
  );
```


## Deployment

To deploy this project run

```bash
  npm start
```

## Enable the server
node se.js

