import { useState, useEffect } from "react"; // Import React, useState, and useEffect from 'react'


const Contact = () => {

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
            <div className='mt-60 text-center text-green-500 mb-10'>
            welcome to <span className="text-bolder hover:text-green-800">Contact page</span> were we have information about our service</div>
        )}
      </div>
    );
}

export default Contact