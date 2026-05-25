const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Custom Logger Middleware
const logger = (req, res, next) => {
  const time = new Date().toLocaleTimeString();

  console.log(`[${req.method}] ${req.url} - ${time}`);

  next();
};

app.use(logger);

// In-Memory Database
let blogPosts = [];

// =========================
// LOGIN ROUTE
// =========================

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Login successful",
    token: "mock-jwt-token-123456789",
  });
});

// =========================
// GET ALL POSTS
// =========================

app.get("/posts", (req, res) => {
  res.status(200).json({
    success: true,
    count: blogPosts.length,
    data: blogPosts,
  });
});

// =========================
// GET SINGLE POST
// =========================

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  res.status(200).json({
    success: true,
    data: post,
  });
});

// =========================
// CREATE POST
// =========================

app.post("/posts", (req, res) => {
  const { id, title, author, content } = req.body;

  if (!id || !title || !author) {
    return res.status(400).json({
      success: false,
      message: "id, title and author are required",
    });
  }

  const existingPost = blogPosts.find((post) => post.id === id);

  if (existingPost) {
    return res.status(400).json({
      success: false,
      message: "Post ID already exists",
    });
  }

  const newPost = {
    id,
    title,
    author,
    content: content || "",
  };

  blogPosts.push(newPost);

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: newPost,
  });
});

// =========================
// UPDATE POST
// =========================

app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = blogPosts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  blogPosts[index] = {
    ...blogPosts[index],
    ...req.body,
  };

  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: blogPosts[index],
  });
});

// =========================
// DELETE POST
// =========================

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const postExists = blogPosts.some((post) => post.id === id);

  if (!postExists) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  blogPosts = blogPosts.filter((post) => post.id !== id);

  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
  });
});

// =========================
// HOME ROUTE
// =========================

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Data Hub REST API 🚀",
  });
});

// =========================
// SERVER START
// =========================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});