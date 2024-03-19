Login view: 
![projektilogin](https://github.com/Jerekk/Openesim/assets/122282549/0b9cd4f0-5786-4ce1-bc6b-fb482c862923)

Home page:
![projektientries](https://github.com/Jerekk/Openesim/assets/122282549/1894358c-3139-4e62-84fc-0308011f485a)



Web application functionalities: 
- Login
- Registereation
After Login:
- Get all users
- Get spesific users Entries
- Info function that shows users information (Username, Password and email)
- Change Username, Password or email (PUT)

Does not work but was planned:
- Creating new diaryentries

Bugs:
- Had trouble with Posting the new entries to the database, problem was in my entry router but could not make it work, the farest i got was an alert messae popt up when i sent the now entrie but then console was saying
  error 404 with the url, so there was backend proplem that i could not fix.

----------------------------------------------------------------------------------------------------------------

Database Description
The "HealthDiary" database consists of four main tables: "Users", "DiaryEntries", "Nutrition" and "Fitness" which store user information, diary entries, Nutrition details and Fitness details for a health diary.

Users:

This table stores basic user information, such as username, password, email, and creation timestamp.
user_id: Unique identifier for each user.
username: User's username, cannot be empty and has a maximum length of 50 characters.
password: User's password, cannot be empty and has a maximum length of 255 characters.
email: User's email address, cannot be empty and is unique for each user.
created_at: Timestamp indicating when the user account was created.
user_level: User's level, defaulting to 'regular'.

DiaryEntries:

This table stores diary entries made by users, including date, mood, weight, sleep duration, and notes.
entry_id: Unique identifier for each entry.
user_id: Reference to the user identifier in the "Users" table.
entry_date: Date of the entry, cannot be empty.
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


















