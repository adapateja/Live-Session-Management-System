### ***I've completed all three steps of the Round 1 task. Here's how each requirement is implemented:***



##### Step 1: Database table



I created the `live\_sessions` table in MongoDB with all required fields. The schema is defined in `backend/models/Session.js`, which includes:

* \- `type` field for admin/student
* \- `unique\_id` field with unique constraint
* \- `userurl` field for session URLs
* \- MongoDB automatically provides the `\_id` as the primary key





##### Step 2: START SESSION button



**I implemented the START SESSION button in `frontend/src/components/AdminPage.js`. When clicked:**

* \- It calls the backend API to create a session
* \- The backend (`backend/routes/sessionRoutes.js`) generates a unique UUID, saves type as 'admin', and stores everything in the database
* \- After creation, the video player automatically appears with full controls (Play, Pause, Volume, Fullscreen, Settings)







##### **Step 3: Student access**

**I set up routing so when a student opens the session URL:**

* \- The same `VideoPlayer` component loads (in `frontend/src/components/VideoPlayer.js`)
* \- It fetches the session from the database using the `unique\_id` from the URL
* \- The student gets the same video player with full controls
* \- The session remains active using the same `unique\_id`



##### **Summary** 



All requirements are fulfilled. The system creates sessions, saves them to the database, displays a video player with full controls for both admin and students, and maintains session state using unique IDs.



