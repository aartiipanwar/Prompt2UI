import { FileCode, Copy, Check } from "lucide-react";
import { useState } from "react";

const CodeEditor = ({ code, setCode }) => {
  const [copied, setCopied] = useState(false);

  const lines = code.split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      
      {/* Tab bar */}
      <div className="flex items-center justify-between h-9 px-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-900 rounded text-white border-b-2 border-blue-500">
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            output.html
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="p-1 rounded text-gray-400 hover:text-white"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Code area */}
      <div className="flex flex-1 overflow-auto">
        
        {/* Line numbers */}
        <div className="flex flex-col items-end py-3 px-3 select-none font-mono text-xs text-gray-500 bg-gray-900 border-r border-gray-700">
          {lines.map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Editor */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="flex-1 p-3 font-mono text-sm leading-6 text-white bg-gray-900 resize-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CodeEditor;