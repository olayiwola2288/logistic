// import React from 'react'
import { useState, useEffect } from "react";

const Faqs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="mt-40">
      {loading ? (
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="mt-60 text-center text-green-500 mb-10">
          <div className="text-center text-green-600 shadow">
            welcome to FAQ what are your questions?
          </div>
        </div>
      )}
    </div>
  );
};

export default Faqs;


