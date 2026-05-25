# Prompt Documentation

## Project Title

Data Hub REST API

---

## Objective

Build a RESTful API server using Node.js and Express.js that performs CRUD operations on blog posts, implements custom middleware, and includes a mock authentication endpoint.

---

## Original Project Prompt

### Sprint Theme

Node.js, Express, REST Architecture, and API Testing

### Project

"The Data Hub" (RESTful API Server)

### Engineering Context

Frontend applications require robust backend services to manage and serve data. This sprint focuses on transitioning from API consumer to API provider by building a RESTful backend server capable of handling HTTP requests and returning JSON responses.

---

## Requirements

### Phase 1: Server Initialization & Route Scaffolding

- Initialize a Node.js project using npm.
- Install Express.js.
- Create a server running on Port 5000.
- Define REST routes:
  - GET /posts
  - GET /posts/:id
  - POST /posts
  - PUT /posts/:id
  - DELETE /posts/:id
- Return JSON responses.

---

### Phase 2: In-Memory Database & CRUD Logic

- Create an in-memory database using:

```javascript
let blogPosts = [];
```

- Implement CRUD functionality:
  - Create Posts
  - Read Posts
  - Update Posts
  - Delete Posts

- Test all routes using:
  - Postman
  - Thunder Client

---

### Phase 3: Middleware & Authentication

- Create custom logger middleware.
- Log:
  - HTTP Method
  - Request URL
  - Timestamp

Example:

```bash
[GET] /posts - 10:05 AM
```

- Create POST /login endpoint.
- Accept username and password.
- Return mock JWT token.

---

## AI Prompts Used During Development

### Prompt 1

```text
Create an Express server running on port 5000 with REST API routes for blog posts.
```

### Prompt 2

```text
Implement CRUD operations using an in-memory array instead of a database.
```

### Prompt 3

```text
Create a custom middleware that logs HTTP method, URL, and timestamp.
```

### Prompt 4

```text
Create a mock login endpoint that accepts credentials and returns a JWT token.
```

### Prompt 5

```text
Generate API test cases for Thunder Client and Postman.
```

### Prompt 6

```text
Create a professional README.md for the Data Hub REST API project.
```

### Prompt 7

```text
Generate a project demonstration script for explaining the API during a video presentation.
```

---

## Key Features Implemented

### Backend Features

- Express Server
- RESTful API Architecture
- CRUD Operations
- Route Parameters
- Request Body Parsing
- JSON Responses

### Middleware

- Request Logger Middleware

### Authentication

- Mock Login API
- JWT Token Simulation

### Testing

- Thunder Client
- Postman

---

## Learning Outcomes

This project helped in understanding:

- Node.js Fundamentals
- Express.js Framework
- REST API Design Principles
- Middleware Implementation
- CRUD Operations
- Route Parameters
- Request and Response Lifecycle
- API Testing Tools
- Backend Development Workflow

---

## Future Enhancements

- MongoDB Integration
- Mongoose ODM
- JWT Authentication
- User Registration System
- Password Hashing with bcrypt
- Environment Variables
- Error Handling Middleware
- Deployment on Render or Railway

---

## Author

Aryan

Full Stack Developer Trainee

---

## Project Status

Completed ✅
