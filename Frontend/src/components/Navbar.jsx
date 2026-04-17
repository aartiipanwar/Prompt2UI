import { Code2, Play, Settings } from "lucide-react";

const Navbar = ({ onRun }) => {
  return (
    <nav className="flex items-center justify-between h-12 px-4 bg-gray-900 border-b border-gray-700">
      
      {/* Left - Branding */}
      <div className="flex items-center gap-2">
        <Code2 className="w-5 h-5 text-blue-400" />
        <span className="font-semibold text-sm text-white tracking-tight">
          Prompt2UI
        </span>
        <span className="text-xs text-gray-400 font-mono ml-2">v1.0</span>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-2">
        
        {/* Run Button */}
        <button
          onClick={onRun}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <Play className="w-3.5 h-3.5" />
          Generate
        </button>

        {/* Settings */}
        <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;