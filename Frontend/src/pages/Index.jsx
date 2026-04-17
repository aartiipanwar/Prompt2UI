import { useState } from "react";
import Navbar from "@/components/Navbar";
import PromptBar from "@/components/PromptBar";
import CodeEditor from "@/components/CodeEditor";
import PreviewPane from "@/components/PreviewPane";
import { generateUI } from "@/services/api";

const Index = () => {
  const [code, setCode] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async (inputPrompt) => {
    const finalPrompt = inputPrompt || prompt;

    if (!finalPrompt) return;

    const result = await generateUI(finalPrompt);
    setCode(result);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      
      {/* Navbar */}
      <Navbar onRun={() => handleGenerate()} />

      {/* Prompt */}
      <PromptBar 
        onGenerate={(p) => {
          setPrompt(p);
          handleGenerate(p);
        }} 
      />

      {/* Main Layout */}
      <div className="flex flex-1 min-h-0">

        {/* Code Editor */}
        <div className="w-1/2 border-r border-gray-700">
          <CodeEditor code={code} setCode={setCode} />
        </div>

        {/* Preview */}
        <div className="w-1/2">
          <PreviewPane code={code} />
        </div>

      </div>
    </div>
  );
};

export default Index;