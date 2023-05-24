import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="spinner"></div>
      <p className="text-white">Loading...</p>
    </div>
  );
};

export default Loading;