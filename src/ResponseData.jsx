import React from "react";
import ReactMarkdown from "react-markdown";

const ResponseData = ({ response }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        <span role="img" aria-label="emoji"></span> Your travel plan is ready 🎉
      </h2>
      <div className="mb-4">
        <ReactMarkdown>{response}</ReactMarkdown>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            const blob = new Blob([response], {
              type: "text/plain;charset=utf-8",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "travel-plan.txt");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            return false;
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ResponseData;
