import { useState } from "react";
import { SendHorizonal, Sparkles } from "lucide-react";

const PromptBar = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    onGenerate(prompt); 
    setPrompt("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 px-4 py-2.5 bg-gray-900 border-b border-gray-700"
    >
      <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want to build..."
        className="flex-1 bg-gray-800 text-white text-sm placeholder-gray-400 px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={!prompt.trim()}
        className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <SendHorizonal className="w-4 h-4" />
        Generate
      </button>
    </form>
  );
};

export default PromptBar;