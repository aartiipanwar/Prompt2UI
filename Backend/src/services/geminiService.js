const genAI = require("../config/gemini");

const generateCode = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(`
  You are a UI generator.
  Return only clean HTML with Tailwind CSS.
  No explanation.

  Prompt: ${prompt}
  `);

  const response = await result.response;
  return response
    .text()
    .replace(/```html/g, "")
    .replace(/```/g, "")
    .trim();
};

module.exports = { generateCode };