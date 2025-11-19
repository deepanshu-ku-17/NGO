import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Check if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in the .env file");
  process.exit(1);
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("Blockaid", userSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  objective: { type: String, required: true },
  message: { type: String, required: true },
});
const Contact = mongoose.model("Contact", contactSchema);

// 🆕 Transaction Schema
const transactionSchema = new mongoose.Schema({
  donorAddress: { type: String, required: true },
  ngoAddress: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});
const Transaction = mongoose.model("Transaction", transactionSchema);

// 🚀 Signup Route
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "Email or Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 🔐 Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✉️ Contact Route
app.post("/contact", async (req, res) => {
  const { name, email, objective, message } = req.body;
  try {
    if (!name || !email || !objective || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newContact = new Contact({ name, email, objective, message });
    await newContact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error("Contact Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 💸 🆕 Transaction Logging Route
app.post("/transaction", async (req, res) => {
  const { donorAddress, ngoAddress, amount } = req.body;
  try {
    if (!donorAddress || !ngoAddress || !amount) {
      return res.status(400).json({ message: "All transaction fields are required" });
    }

    const newTx = new Transaction({ donorAddress, ngoAddress, amount });
    await newTx.save();
    res.status(201).json({ message: "Transaction stored successfully!" });
  } catch (err) {
    console.error("Transaction Error:", err);
    res.status(500).json({ message: "Failed to store transaction", error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
