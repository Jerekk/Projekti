Login view: 
![projektilogin](https://github.com/Jerekk/Openesim/assets/122282549/0b9cd4f0-5786-4ce1-bc6b-fb482c862923)

Home page:
![projektientries](https://github.com/Jerekk/Openesim/assets/122282549/1894358c-3139-4e62-84fc-0308011f485a)



Web Application Functionalities:

- Login
- Registration
- After Login:
- Get all users
- Get specific users' entries
- Info function that shows user information (Username, Password, and Email)
- Change Username, Password, or Email (PUT)
- Planned but Not Implemented:

Creating new diary entries
Bugs:

Encountered difficulties with posting new entries to the database. The problem was in the entry router, but I couldn't resolve it. The farthest I got was receiving an alert message when attempting to send the new entry, but the console displayed a 404 error with the URL. Thus, there was a backend problem that I couldn't fix.
Database Description:

The "HealthDiary" database consists of four main tables: "Users," "DiaryEntries," "Nutrition," and "Fitness," which store user information, diary entries, nutrition details, and fitness details for a health diary.

Users:

This table stores basic user information, such as username, password, email, and creation timestamp.

user_id: Unique identifier for each user.
username: User's username, which cannot be empty and has a maximum length of 50 characters.
password: User's password, which cannot be empty and has a maximum length of 255 characters.
email: User's email address, which cannot be empty and is unique for each user.
created_at: Timestamp indicating when the user account was created.
user_level: User's level, defaulting to 'regular.'
DiaryEntries:

This table stores diary entries made by users, including date, mood, weight, sleep duration, and notes.

entry_id: Unique identifier for each entry.
user_id: Reference to the user identifier in the "Users" table.
entry_date: Date of the entry, which cannot be empty.
mood: User's mood on the entry date.
weight: User's weight on the entry date.
sleep_hours: Number of hours slept by the user on the entry date.
notes: Free-form notes.
created_at: Timestamp indicating when the entry was created.
Nutrition:

This table stores information about users' daily nutrition intake.

entry_id: Unique identifier for each nutrition entry.
user_id: Reference to the user identifier in the "Users" table.
entry_date: Date of the nutrition entry.
number_of_meals: Total number of meals consumed by the user on the entry date.
description: Description of the meals consumed, including meal types.
created_at: Timestamp indicating when the nutrition entry was created.
Fitness:

This table stores information about fitness activities performed by users.

entry_id: Unique identifier for each fitness entry.
user_id: Reference to the user identifier in the "Users" table.
entry_date: Date of the fitness entry.
description: Description of the fitness activity.
duration: Duration of the fitness activity (in minutes).
notes: Additional notes related to the fitness activity.
created_at: Timestamp indicating when the fitness entry was created.














