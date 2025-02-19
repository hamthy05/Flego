const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

app.post("/api/contact", upload.single("file"), async (req, res) => {
  const startTime = Date.now();
  const { name, email, subject, message } = req.body;
  const file = req.file;

  console.log("Received request:", { name, email, subject, message, file });

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "hamthy05@gmail.com", // replace with your email
      pass: "xfef svmi rgcy ykgd", // replace with your app password
    },
  });

  // Setup email data
  let mailOptions = {
    from: email, // sender address
    to: "hamthy05@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: `Name: ${name}\n\nMessage:\n${message}`, // plain text body
    attachments: file ? [{ path: file.path }] : [],
  };

  console.log("Sending email...");

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    const endTime = Date.now();
    const duration = endTime - startTime;

    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        error: "Failed to send message",
        details: error.message,
        duration,
      });
    }

    console.log("Message sent: %s", info.messageId);

    // Remove the file after sending the email
    if (file) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.error("Error removing file:", err);
        } else {
          console.log("File removed:", file.path);
        }
      });
    }

    res.status(200).json({ message: "Message sent successfully", duration });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
