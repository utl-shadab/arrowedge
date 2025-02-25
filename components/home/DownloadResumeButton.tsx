import React from "react";
import { ArrowDownCircle } from "lucide-react";

const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/shadab.pdf"; 
    link.download = "shadab.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2 bg-red-600 text-white font-semibold px-2 py-3 rounded-l-lg shadow-lg flex items-center gap-2 hover:bg-red-700 transition-all"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      <ArrowDownCircle size={20} />
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
