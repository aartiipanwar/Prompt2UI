const { generateCode } = require("../services/geminiService");

exports.generateUI = async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Incoming prompt:", prompt);

    const code = await generateCode(prompt);

    console.log("Generated code:", code);

    res.json({ code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};