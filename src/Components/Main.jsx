import ResponseData from "./ResponseData";
import React from "react";

const Main = ({ loading, response }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-500 my-4">⭐️ Travel Planner ⭐️</h1>
      {!response && (
        <p className="text-sm text-gray-700 mb-8">Fill the form to generate your itinerary</p>
      )}

      <div className="mt-8">
        {loading ? (
          <p className="text-lg text-blue-500">Loading...</p>
        ) : (
          response && <ResponseData response={response} />
        )}
      </div>
    </div>
  );
};

export default Main;
