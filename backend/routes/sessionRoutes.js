import express from "express";
import { v4 as uuidv4 } from "uuid";
import Session from "../models/Session.js";

const router = express.Router();

// ✅ POST route: /api/sessions/start
router.post("/start", async (req, res) => {
  try {
    const uniqueId = uuidv4();
    const userUrl = `http://localhost:3000/session/${uniqueId}`;

    const newSession = new Session({
      type: "admin",
      unique_id: uniqueId,
      userurl: userUrl,
    });

    await newSession.save();

    res.json({ success: true, uniqueId, userUrl });
  } catch (error) {
    console.error("❌ Error creating session:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ GET route: /api/sessions/:id
router.get("/:id", async (req, res) => {
  try {
    const session = await Session.findOne({ unique_id: req.params.id });
    if (!session) {
      return res.status(404).json({ success: false, message: "Session not found" });
    }
    res.json({ success: true, session });
  } catch (error) {
    console.error("❌ Error fetching session:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router; // ✅ Make sure you're exporting like this
