# Paycom Summer Engagement Program -Session Planner

##### This is a web application that was created as part of the Paycom Summer Engagement Program. <br> This is the first time I have really dived into PHP, SQL, or React so go easy on me :)

### To view a more Back End oriented look at the application and to see the API specific codebase, please visit the write-up over on the [Back End Repo](https://github.com/Jackschwarz58/ProgramPlannerBackend-Paycom2020)

---

#### For a video overview and demo, click the video below:
[![Video Overview](https://i.imgur.com/v6ltiJI.jpg)](https://www.youtube.com/watch?v=Z091szPwp2Q)

## About

This is a web application that is designed to help users sign up for, view information about, and edit information regarding sessions in the Paycom Summer Engagement Program. 

![Login Screen](https://i.imgur.com/cL0TB6m.png)
![Dashboard](https://i.imgur.com/xUnAq7j.png)

The application is written in Javascript, HTML, CSS, SQL, and PHP with help from external frameworks such as Bootstrap, ReactJS, and Webpack.


## Functionality

### Login/Logout

In order for the applciation to be used, a user must have an account. User information is stored on a database for quick access and to keep track of individual user's session information.

![Register](https://i.imgur.com/pLBoRZ3.png)

When logging in, the users login status is remembered for the length of the browser session or, if the user checks 'remember me', a month. At any point a user can logout and this will overwritten

![Login](https://i.imgur.com/2TMcsM2.png)

### Dashboard

The main view of the application is the 'Dashboard.' This is where a list of sessions with a relationship with the user are shown. Here a user can view the sessions they are signed up for, add a new session, join an existing session, edit a sessions information (date, time, description, or title), unenroll from a session, or logout. 

![Join Session](https://i.imgur.com/3TEjOBt.png)
![Edit Date](https://i.imgur.com/HeEhmym.png)
![Edit Description](https://i.imgur.com/8c0bZug.png)

All of this information is stored in an SQL database and is interfaced with through various PHP scripts. 

For a better explanation of how the application interfaces with the databse using PHP, I have a writeup over on the [Back End GitHubRepo](https://github.com/Jackschwarz58/ProgramPlannerBackend-Paycom2020)

## Setup Instructions

#### Prerequisites

This setup requires a few things to work correctly:
1. A local XAMPP instance
2. An appropriately setup SQL server on said XAMPP instance

#### Step-By-Step Instructions
1. Pull the GitHub repo and extract it on your computer.
2. Get [XAMPP up and running](https://www.ionos.com/digitalguide/server/tools/xampp-tutorial-create-your-own-local-test-server/) and navigate to the `htdocs/` folder. Make sure the `Apache` and `MySQL` services are running.
3. Copy the contents of the `XAMPP/` folder found in the repo into the root of `htdocs/`. <br> At this point your `htdocs/` folder should look like this. 

```
htdocs    
│
└──paycomProject
   │   assets/
   │   api/
   │   index.html
   │   README.md
   │   paycom-project-db.sql
   └───app
       │   build/
```
3. Make sure XAMPP is running the open up phpMyAdmin by going to `http://localhost/phpmyadmin` in your browser
4. Create a new database named `paycom_project_db` and navigate to the **_import_** tab.
5. Under this tab, drag the file `paycom-project-db.sql` into the browser window. This will populate your database with the correct tables and columns as well as add some sample data. (1)
6. With XAMPP running, find the IP Address shown in application's main view (should look something like 192.168.xx.x) 
7. Navigate to `http://{ip address from previous step}/paycomProject/index`
8. You should be up and running!

##### Notes
(1) For simplicity sake, there is no sql username or password set by default. If you have set one up, you will need to navigate to `htdocs/paycomProject/api/dbh.php` and change the $dB fields. 

#### If there are any issues getting this setup, please let me know by sending me an email at <Jackschwarz58@gmail.com>.




