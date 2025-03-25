export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { name, email, phone, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      const emailjs = require("@emailjs/nodejs"); // Use EmailJS for Node.js
  
      const response = await emailjs.send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          name,
          email,
          phone,
          message,
        },
        {
          publicKey: process.env.PUBLIC_KEY,
        }
      );
  
      return res.status(200).json({ success: true, response });
    } catch (error) {
      return res.status(500).json({ error: "Email sending failed", details: error });
    }
  }
  