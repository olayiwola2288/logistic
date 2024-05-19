import { useState, useEffect } from "react";

const Order = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
          </div>
        </div>
      ) : (
        <table className=" table mt-40 mx-auto">
          <thead className=" lg:pe-28 pe-2 grid grid-cols-1  justify-items-center bg-green-800 text-white py-4 mb-5 rounded">
            <tr>
              <th className=" lg:ps-28 ps-2">Pick Up Address</th>
              <th className=" lg:ps-28 ps-2">Drop Off Address</th>
              <th className=" lg:ps-28 ps-2">Delivery Mode</th>
              <th className=" lg:ps-28 ps-2">Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lekki Pearl Estate, Alpha Mead Crescent, After Sunshine Garden, Sangotedo.</td>
              <td>Ocean Palm, Lagos, Nigeria</td>
              <td>car</td>
              <td>sim</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Order;
