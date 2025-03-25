export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { name, email, phone, message } = req.body;
  
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY, // Hides the key from frontend
          template_params: { name, email, phone, message },
        }),
      });
  
      if (!response.ok) throw new Error("Failed to send email");
  
      return res.status(200).json({ success: "Email sent!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  