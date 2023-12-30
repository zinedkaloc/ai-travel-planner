import React from "react";

const GenerateButton = ({ loading, onClick }) => {
  const buttonStyle = {
    padding: "0.5rem 1rem",
    width: "100%",
    border: "none",
    fontSize: "1rem",
    backgroundColor: "#0080ff",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "0.4rem",
    transition: "background-color 0.3s ease-in-out",
  };

  const hoverStyle = {
    backgroundColor: "#00bf2f",
  };

  const loadingStyle = {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  };

  return (
    <button
      style={{
        ...buttonStyle,
        ...(loading ? loadingStyle : {}),
        ...(loading ? {} : { ":hover": hoverStyle }),
      }}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Please wait..." : "Generate"}
    </button>
  );
};

export default GenerateButton;
