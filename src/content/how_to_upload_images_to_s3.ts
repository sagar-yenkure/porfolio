const how_to_upload_images_to_s3 = `

Uploading images to **AWS S3** from a Node.js server is a common requirement in many web applications — whether it's profile pictures, product images, or documents.

In this guide, you'll learn how to use **Express**, **Multer**, and the **AWS SDK v3** to handle file uploads and store them directly into your **S3 bucket**.

---

## Step 1: Setup AWS S3 Bucket & IAM

1. Go to [AWS S3 Console](https://s3.console.aws.amazon.com/s3/home).
2. Create a new bucket (e.g. my-app-uploads) and make it **private**.
3. Go to IAM → Create a user with **Programmatic Access**.
4. Attach the policy AmazonS3FullAccess to that user.
5. Note the **Access Key ID** and **Secret Access Key**.

---

## Step 2: Create .env File

Now, add your AWS credentials and bucket details to a .env file:

\`\`\`
// .env
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_BUCKET_NAME=your-bucket-name
\`\`\`

---

## Step 3: Setup Project & Install Dependencies

\`\`\`bash
mkdir s3-uploader && cd s3-uploader
npm init -y

npm install express multer dotenv @aws-sdk/client-s3
npm install -D typescript ts-node @types/node @types/express
\`\`\`

---

## Step 4: Setup Express Server

\`\`\`ts
// index.ts
import express from "express";
import dotenv from "dotenv";
import uploadRoute from "./routes/upload";

dotenv.config();

const app = express();
app.use("/api", uploadRoute);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
});
\`\`\`

---

## Step 5: Configure Multer for File Uploads

To handle file uploads in Node.js, we use the multer middleware.

There are two strategies:

### ✅ DiskStorage – Best for large files

\`\`\`ts
// utils/multer.ts
import multer from "multer";
import { randomUUID } from "crypto";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./tmp", // or use os.tmpdir() for system temp directory
    filename: (req, file, cb) => {
      const uniqueName = \`\${Date.now()}-\${randomUUID()}-\${file.originalname}\`;
      cb(null, uniqueName);
    },
  }),
});

export default upload;
\`\`\`

### ⚠️ MemoryStorage – For small files (under 1MB)

\`\`\`ts
const upload = multer({ storage: multer.memoryStorage() });
\`\`\`

> ⚠️ Avoid using memory storage for large files — it will be stored in RAM and may crash the server.

---

## Step 6: Configure AWS SDK (S3 Client)

\`\`\`ts
// lib/s3.ts
import { S3Client } from "@aws-sdk/client-s3";


if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_REGION) 
    throw new Error("AWS keys are misssing");

export const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
\`\`\`

---

## Step 7: Create Upload Route

\`\`\`ts
// routes/upload.ts
import express from "express";
import fs from "fs";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import upload from "../utils/multer";
import { s3 } from "../lib/s3";

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: "No file uploaded" });

  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: \`uploads/\${file.filename}\`,
    Body: fileStream,
    ContentType: file.mimetype,
  };

  try {
    await s3.send(new PutObjectCommand(uploadParams));
    fs.unlinkSync(file.path); // Clean up local file
    res.status(200).json({ message: "Upload successful" });
  } catch (err) {
    fs.unlinkSync(file.path); // Clean up local file on error
    res.status(500).json({ error: "Upload failed", details: err });
  }
});

export default router;
\`\`\`

---

## Final Notes

- ✅ Always clean up your temp directory after uploading or if the upload fails.
- ✅ Your IAM user must have s3:PutObject permissions.
- ✅ Handle file size limits and allowed mimetypes for production.

---

You now have a complete and secure **Node.js file upload system** using:

- Express + Multer
- AWS SDK v3
- S3 as your file storage

Perfect for avatars, media uploads, document storage, and more.

`;

export default how_to_upload_images_to_s3;
