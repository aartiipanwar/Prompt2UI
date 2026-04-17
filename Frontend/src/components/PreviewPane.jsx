import { Monitor, RefreshCw, ExternalLink } from "lucide-react";

const PreviewPane = ({ code }) => {
  const handleRefresh = () => {
    // force re-render (simple trick)
    document.getElementById("preview-frame").srcdoc = getHTML();
  };

  const handleOpenNewTab = () => {
    const newWindow = window.open();
    newWindow.document.write(getHTML());
    newWindow.document.close();
  };

  const getHTML = () => {
    return `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>${code}</body>
      </html>
    `;
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      
      {/* Toolbar */}
      <div className="flex items-center justify-between h-9 px-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Monitor className="w-3.5 h-3.5" />
          <span>Preview</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleRefresh}
            className="p-1 rounded text-gray-400 hover:text-white"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleOpenNewTab}
            className="p-1 rounded text-gray-400 hover:text-white"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Live Preview */}
      <iframe
        id="preview-frame"
        title="preview"
        className="flex-1 bg-white"
        srcDoc={getHTML()}
      />
    </div>
  );
};

export default PreviewPane;