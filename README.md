# Customer Voice - Feedback Management System

A web application for collecting and managing customer feedback with secure admin access.

## Setup & Run
1. Install dependencies:
```npm install```

2. Configure MongoDB:
- Create .env file with:

MONGO_URI=mongodb://localhost/customerFeedbackDB


3. Start server:
```npm start``` or ```node server.js```
- Server runs at http://localhost:3000

## Admin Access
- Email: admin@admin.com
- Password: pass

## Features
- Admin view shows all customer feedback
- Regular users submit/view own feedback
- Admin table: email, name, preferences, comments

## Pages
- index.ejs: Login
- signup.ejs: Registration
- feedback.ejs: Submit feedback
- view-feedback.ejs: Admin view
- congratulations.ejs: Signup success
- thankyou.ejs: Submission confirmation

## Flow
1. Register with info/preferences
2. Login with email/password
3. Submit feedback
4. Admin access all submissions
