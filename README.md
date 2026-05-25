# 🚀 Data Hub REST API

A RESTful API server built using **Node.js** and **Express.js** that performs CRUD operations on blog posts using an in-memory database. This project demonstrates backend fundamentals including REST architecture, middleware, request handling, and mock authentication.

---

## 📌 Project Overview

The Data Hub REST API acts as a backend service for managing blog posts.

Features include:

- Create Blog Posts
- Read All Posts
- Read Single Post by ID
- Update Existing Posts
- Delete Posts
- Custom Logger Middleware
- Mock Login Authentication
- JSON Request Handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API
- Thunder Client / Postman

---

## 📂 Project Structure

```bash
data-hub/
│
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <your-repository-url>
```

### Navigate to Project

```bash
cd data-hub
```

### Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Server

### Start Server

```bash
node server.js
```

Server will run on:

```bash
http://localhost:5000
```

### Using Nodemon (Optional)

Install nodemon:

```bash
npm install -D nodemon
```

Run:

```bash
npx nodemon server.js
```

---

## 📦 API Endpoints

### Home Route

| Method | Endpoint |
|----------|----------|
| GET | / |

---

### Blog Routes

| Method | Endpoint | Description |
|----------|----------|----------|
| GET | /posts | Get all posts |
| GET | /posts/:id | Get post by ID |
| POST | /posts | Create a new post |
| PUT | /posts/:id | Update a post |
| DELETE | /posts/:id | Delete a post |

---

### Authentication Route

| Method | Endpoint |
|----------|----------|
| POST | /login |

---

## 🧪 Sample Requests

### Create Post

**POST** `/posts`

```json
{
  "id": 1,
  "title": "Introduction to Node.js",
  "author": "Aryan",
  "content": "Node.js is a JavaScript runtime environment."
}
```

---

### Update Post

**PUT** `/posts/1`

```json
{
  "title": "Advanced Node.js"
}
```

---

### Login Request

**POST** `/login`

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

### Login Response

```json
{
  "success": true,
  "message": "Login successful",
  "token": "mock-jwt-token-123456789"
}
```

---

## 🔄 CRUD Workflow

1. Create a post using POST request.
2. Retrieve all posts using GET request.
3. Retrieve a single post using ID.
4. Update existing post using PUT request.
5. Delete post using DELETE request.

---

## 📋 Middleware

Custom logger middleware logs:

- HTTP Method
- Requested URL
- Current Timestamp

Example:

```bash
[GET] /posts - 10:05:32 AM
[POST] /posts - 10:06:10 AM
[DELETE] /posts/1 - 10:07:45 AM
```

---

## 📷 API Testing

The API can be tested using:

- Thunder Client (VS Code)
- Postman

---

## 🎯 Learning Outcomes

Through this project, I learned:

- Express Server Setup
- REST API Design
- CRUD Operations
- Route Parameters
- Middleware Creation
- Request & Response Handling
- Authentication Basics
- API Testing

---

## 🚧 Future Improvements

- MongoDB Database Integration
- JWT Authentication
- Password Hashing
- User Registration
- Data Validation
- Error Handling Middleware
- Environment Variables

---

## 👨‍💻 Author

**Aryan**

Full Stack Developer Trainee

---

## 📜 License

This project is created for educational and learning purposes.
