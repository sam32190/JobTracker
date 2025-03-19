Job Application Tracker

-> A Full-Stack Web Application using React, Redux, and ASP.NET Core Web API

📌 Project Overview

This is a Job Application Tracker that allows users to:

    -> Apply for jobs, update job application status.

    -> View all available jobs and job details.

    -> Bookmark jobs for later.

    -> Receive  job notifications using ContextAPI.

    -> Search, filter, jobs by various parameters.


----------------------------------------------------------------------------------------

🚀 Tech Stack

-> Frontend: React.js, Redux, Bootstrap, React Router, Toast Notifications

-> Backend: ASP.NET Core Web API, Entity Framework Core, SQL Server Tools

-> Database: Microsoft SQL Server

-> Authentication: JWT (JSON Web Token)

-> Deployment: GitHub 

---------------------------------------------------------------------------------------------------

⚙️ Prerequisites

Make sure you have the following installed:

    Node.js (for React frontend)

    .NET 8.0 SDK (for ASP.NET Core backend)

    SQL Server (for the database)

    Postman, Swagger (optional, for testing API endpoints)

------------------------------------------------------------------------------------------------------

1️⃣ Clone the Repository

    -> git clone https://github.com/sam32190/JobApplicationTracker.git
    -> cd JobApplicationTracker

2️⃣ Setup & Run Backend (ASP.NET Core)

    -> cd Server
    -> dotnet restore  # Restore dependencies
    -> dotnet ef database update  # Apply migrations
    -> dotnet run  # Start backend server

The backend will run on: https://localhost:7279


3️⃣ Setup & Run Frontend (React)

    -> cd client
    -> npm install  # Install all dependencies from package.json
    -> npm run dev    # Start frontend server

    * The frontend will run on: http://localhost:5173

------------------------------------------------------------------------------------------------------    

🐞 Common Errors & Fixes

1. React Fetch API Not Working (500 Error)

    -> Check if backend is running (click on 'https' button in Visual Studio)

    -> Make sure CORS is enabled in Program.cs:


    -> builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", policy =>
            policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
    });

    -> Apply CORS policy:


    -> app.UseCors("AllowAll");

2. SQL Server Migration Issues

Run:

    -> Add-Migration InitialCreate (in Package Manager Console)

    -> Update-Database

-----------------------------------------------------------------------------------------------------------------------

📝 Features Implemented

✅ User Authentication (JWT)
✅ Apply for Jobs
✅ Search & Filter Jobs
✅ Interview Notifications (Context API)
✅ Bookmark Jobs

-------------------------------------------------------------------------------------------------------------------------------

👨‍💻 Author

Sameer Saurav

Email: sameersaurav321@gmail.com


