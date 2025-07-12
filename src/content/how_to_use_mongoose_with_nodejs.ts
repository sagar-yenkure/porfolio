const how_to_use_mongoose_with_nodejs = `

In this guide, you'll learn how to use **Mongoose**, a popular ODM (Object Data Modeling) library for MongoDB and Node.js. We'll cover how to connect to MongoDB, define schemas and models, and perform CRUD operations using **Express.js**.

---

## What is Mongoose?

**Mongoose** provides a straightforward way to model your application data in MongoDB. It brings:

- Schema validation
- Middleware hooks
- Built-in type casting
- Simple CRUD methods
- Relationship-like referencing

---

## Step 1: Setup Node.js + Express Project

Create a new project and install required packages:

\`\`\`bash
mkdir mongoose-express-api && cd mongoose-express-api
npm init -y
npm install express mongoose dotenv
\`\`\`

---

## Step 2: Connect to MongoDB

Set your database connection string in .env:

\`\`\`
// .env
MONGO_URI=mongodb://localhost:27017/blog
\`\`\`

Then create your DB connection:

\`\`\`js
// config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
};
\`\`\`

---

## Step 3: Define a Mongoose Model

\`\`\`js
// models/Post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: String,
  published: { type: Boolean, default: false },
}, { timestamps: true });

export const Post = mongoose.model("Post", postSchema);
\`\`\`

\`\`\`js
// models/User.js

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Pre-save middleware to hash password if changed
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

export const User = mongoose.model("User", userSchema);
\`\`\`

---

## Step 4: Create Express API Routes

\`\`\`js
// routes/post.js
import express from "express";
import { Post } from "../models/Post.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Update
router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
\`\`\`

---

## Step 5: Setup Express App

\`\`\`js
// index.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/post.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

---

## Step 6: Bonus Features

### Populate Relationships
Mongoose allows referencing other models:

\`\`\`js
// Example: populate user in posts
Post.find().populate("userId").exec();
\`\`\`

---

## Final Thoughts

Mongoose is a fantastic tool to structure, validate, and interact with your MongoDB data.

- Type safety  
- Middleware  
- CRUD utilities  
- Schema flexibility

Whether you're building REST APIs or a fullstack app, Mongoose is a reliable go-to for working with MongoDB in Node.js.

`;

export default how_to_use_mongoose_with_nodejs;
