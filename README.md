# Ecommerce-Follow-Along

## Project Description
This project is an e-commerce application designed to provide users with a seamless online shopping experience. The application includes features such as product listings, user authentication, a shopping cart, and a secure checkout process. Our goal is to create a user-friendly and efficient platform for both buyers and sellers.

## Milestone 1: Project Overview
During this session, we covered the basics of setting up a project repository and initializing it with a README file. We also outlined the overall structure of our e-commerce application, including key features and the technologies we'll be using.

## Key Features
1. *User Authentication:* Secure registration and login functionality for users.
2. *Product Listings:* A catalog of products with search and filter options.
3. *Shopping Cart:* A feature allowing users to add, remove, and update products in their cart.
4. *Checkout Process:* A secure and user-friendly checkout process with payment integration.
5. *Order Management:* Order history and tracking for users and sellers.
6. *Admin Panel:* An admin interface for managing products, orders, and users.

## Milestone 2: Project Setup and Login Page

In this milestone, we have set up the project and implemented the Login Page. The following tasks were completed:
- Project setup and initialization
- Created the Login Page
- Implemented form validation
- Connected the Login Page to the backend API for user authentication
- completed setting for tailwind-css

## Milestone 3: Project Setup for Backend

### Achievements
In this milestone, we laid the foundation for the backend of the e-commerce application. Here are the key accomplishments:
- Backend Folder Structure: 
  - Created a structured folder hierarchy to organize routes, controllers, models, and middlewares.
  - Added placeholder files where necessary to establish a blueprint for future development.
- Node.js Server Setup:
  - Initialized and configured a Node.js server using Express.
  - Configured the server to listen on a designated port for API requests.
- Database Connection:
  - Integrated MongoDB into the project for efficient data storage.
  - Successfully established the connection between the server and the MongoDB database.
- Basic Error Handling:
  - Implemented a simple yet effective error-handling mechanism to provide clear error messages and ensure smooth server operation.

### Steps Completed
1. Set up dedicated folders for backend organization:
   - controllers/ for handling business logic.
   - models/ for defining the database schema.
   - middlewares/ for utilities like authentication (to be expanded in future milestones).
2. Installed necessary dependencies (express, mongoose, etc.) and created the entry file (index.js).
3. Configured and tested the database connection using MongoDB.
4. Added basic error-handling middleware for better debugging and user feedback.

## Milestone 4:  Creating User Model and Controller.
## Learning Goals 🎯
- User Model: Blueprint for user data.

- User Controller: Manage user actions.

- Multer Setup: File uploads.

- Update README: Document progress.

## Key Concepts
- Model: Defines user data.

- Controller: Manages data interactions.

- File Uploads: Using Multer.

### Milestone 5: Creating the Signup Page
- Developed the frontend for the signup page using React.
- Integrated form handling with state management.
- Connected the signup form with backend API for user registration.
- Implemented input validation and error handling.
- Styled the signup form to match the overall application design.
### Milestone 6: What was achieved in this milestone
- *User Authentication System:*
  - Implemented a user authentication system using JWT (JSON Web Token) for secure login and signup.
  - Developed API endpoints for user registration, login, and token verification.
  - Integrated JWT authentication with the frontend to manage user sessions securely.

- *Password Encryption:*
  - Added password encryption using bcrypt.js to ensure user passwords are stored securely in the database.

## Milestone 7: User Login & Authentication

### Overview
In Milestone 7, we focused on secure user login. This involved validating user credentials and verifying the encrypted password stored in the database to ensure safe and secure authentication.

### Why Encrypt Passwords?
- Protect User Data: Keeps passwords safe even if the database is compromised.
- Privacy: Prevents users' passwords from being stored or transmitted in plain text.
- Compliance: Meets security standards like GDPR and PCI-DSS.
- Security: Password hashing makes it infeasible for attackers to recover the original password.

### How Login Authentication Works
1. User Enters Credentials:  
   The login form collects the user's email/username and password.
2. Fetch User Data:  
   The backend retrieves the user record based on the provided identifier.  
   - If the user is not found, an error is returned: "User does not exist."
3. Compare Encrypted Passwords:  
   - The entered password is hashed using the same algorithm (e.g., bcrypt).
   - The resulting hash is compared with the stored hashed password.
   - If they match, the user is authenticated; otherwise, an error is returned.
   ## ** Milestone 8:Product Page in Frontend**
   -added the **Product page** in Fronted as a Homepage.