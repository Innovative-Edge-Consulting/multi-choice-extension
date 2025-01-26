const express = require("express");
const app = express();
app.use(express.json());

// Define the extension handler
app.post("/", (req, res) => {
  const { type, payload } = req.body;

  if (type === "request" && payload.name === "multi-choice") {
    return res.json({
      type: "choice",
      payload: {
        isMultiChoice: true,
        title: "Please select all the conditions that apply to you:",
        buttons: [
          { name: "Celiac Disease", value: "celiac" },
          { name: "Hypothyroidism", value: "hypothyroidism" },
          { name: "IBS", value: "ibs" },
          { name: "H. pylori infection", value: "h_pylori" },
          { name: "IBD", value: "ibd" },
          { name: "Rosacea", value: "rosacea" },
          { name: "Diabetes", value: "diabetes" },
          { name: "Scleroderma", value: "scleroderma" },
          { name: "Chronic Fatigue Syndrome", value: "chronic_fatigue" },
          { name: "Restless Leg Syndrome", value: "restless_leg" },
          { name: "Liver Cirrhosis", value: "liver_cirrhosis" },
        ],
      },
    });
  }

  res.json({ success: true });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Extension running on port ${PORT}`));
