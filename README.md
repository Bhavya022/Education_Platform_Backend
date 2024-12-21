# **Education Platform Backend API**

This project provides the backend services for an educational platform, offering APIs to manage courses and quizzes. The application is built using **Node.js**, **Express.js**, and **MongoDB**, following a well-structured **MVC pattern**.

---

## **Features**  
- 🚀 **Manage Courses:** Add, update, retrieve, and delete course information.  
- 🧠 **Quiz Management:** Add and manage quizzes linked to specific courses.  
- 📚 **Pagination:** Handle large datasets efficiently with paginated API responses.  
- 📖 **Interactive Documentation:** API documented and available with Swagger UI.  
- 🛠️ **Scalable Architecture:** Built using modular MVC design principles.  

---

## **Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Documentation:** Swagger (OpenAPI 3.0)  
- **Utilities:** Body-parser, Mongoose, dotenv  
- **Tools:** Postman, Swagger UI  

---

## **Folder Structure**

```plaintext
Educational_Platform_Backend
├── config
│   ├── db.js                 # Database configuration
│   ├── swaggerConfig.js      # Swagger configuration
├── controllers
│   ├── courseController.js   # Course-related business logic
│   └── quizController.js     # Quiz-related business logic
├── models
│   ├── courseModel.js        # Mongoose schema for Course
│   └── quizModel.js          # Mongoose schema for Quiz
├── routes
│   ├── courseRoutes.js       # Course API routes
│   └── quizRoutes.js         # Quiz API routes
├── utils
│   └── pagination.js         # Pagination utility
├── server.js                 # Main entry point for the server
└── package.json              # Project dependencies and scripts
Installation
Step 1: Clone the repository
bash
Copy code
git clone https://github.com/your-username/Educational_Platform_Backend.git
Step 2: Navigate to the project directory
bash
Copy code
cd Educational_Platform_Backend
Step 3: Install dependencies
bash
Copy code
npm install
Step 4: Set up environment variables
Create a .env file in the root directory and add the following:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/educational_platform
PORT=3000
Step 5: Start the server
bash
Copy code
npm start
API Documentation
Access the Swagger documentation:
👉 http://localhost:3000/api-docs

API Endpoints
Course Endpoints
Method	Endpoint	Description
GET	/api/courses	Retrieve all courses
POST	/api/courses	Add a new course
GET	/api/courses/:id	Retrieve a specific course
PUT	/api/courses/:id	Update a specific course
DELETE	/api/courses/:id	Delete a specific course
Quiz Endpoints
Method	Endpoint	Description
GET	/api/courses/:courseId/quizzes	Retrieve all quizzes for a course
POST	/api/courses/:courseId/quizzes	Add a new quiz for a course
GET	/api/quizzes/:id	Retrieve a specific quiz
PUT	/api/quizzes/:id	Update a specific quiz
DELETE	/api/quizzes/:id	Delete a specific quiz
Utilities
Pagination Utility: Handles paginated responses for large datasets. Found in utils/pagination.js.
Development
Scripts
Start server:
bash
Copy code
npm start
Run server in development mode:
bash
Copy code
npm run dev
Linting
Ensure the code follows best practices using ESLint:

bash
Copy code
npm run lint
Future Improvements
🔒 Add authentication and user roles (e.g., admin, instructor, student).
🔍 Implement search functionality for courses and quizzes.
🧾 Extend quiz endpoints to support quiz submissions and scoring.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit changes:
bash
Copy code
git commit -m 'Add feature-name'
Push to the branch:
bash
Copy code
git push origin feature-name
Submit a pull request.
