# 🏥 Doctor Scheduling API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

## 📋 Description

This API manages doctor schedules by creating schedules based on a date range. It provides two primary methods:

- **POST**: To create doctor schedules based on user input.
- **GET**: To retrieve the created schedules.

The system also includes a User table for managing authentication via JWT.

## 📊 Database Structure

### 1. User Table (Users)

| Column | Data Type | Description
|-----|-----|-----
| id | INT (Primary Key) | Auto Increment
| name | STRING | User's name
| email | STRING | User's email (unique)
| password | STRING | User's hashed password
| createdAt | TIMESTAMP | Time record created
| updatedAt | TIMESTAMP | Time record updated


### 2. Doctor Table (Doctors)

| Column | Data Type | Description
|-----|-----|-----
| id | INT (Primary Key) | Auto Increment
| name | VARCHAR | Doctor's name
| createdAt | TIMESTAMP | Time record created
| updatedAt | TIMESTAMP | Time record updated


### 3. Schedule Table (Schedules)

| Column | Data Type | Description
|-----|-----|-----
| id | INT (Primary Key) | Auto Increment
| doctorId | INT (Foreign Key) | Linked to the doctor table
| day | VARCHAR | Day of the schedule
| time_start | TIME | Start time
| time_finish | TIME | End time
| quota | INT | Number of patient slots
| status | BOOLEAN | Schedule status
| date | DATE | Schedule date
| createdAt | TIMESTAMP | Time record created
| updatedAt | TIMESTAMP | Time record updated


## 🛠 Installation

1. Clone this repository:

```shellscript
git clone https://github.com/Fiorezarn/BE-DII
cd <BE_DII>
```


2. Install dependencies:

```shellscript
npm install
```


3. Create a `.env` file for database and JWT configuration:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schedule_db
JWT_SECRET=your_secret
```


4. Run database migrations:

```shellscript
npx sequelize-cli db:migrate
```


5. Run database seeders (optional):

```shellscript
npx sequelize-cli db:seed:all
```


6. Start the server:

```shellscript
npm start
```

## 👨‍💻 Author

Your Name - [Your GitHub Profile](https://github.com/Fiorezarn)


