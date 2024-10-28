import axiosInstance from "../../axiosInstance";
import { useState } from "react";

const Order = ({ order }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    console.log(order._id);
    try {
      const result = await axiosInstance.put(`/orders/${order._id}`, {
        received: true,
      });
      console.log(result);
      alert("Order confirmed successfully");
    } catch (err) {
      console.log(err);
      alert("Failed to confirm order");
      window.location.href = "/user/dashboard";
    } finally {
      setIsConfirming(false);
    }
  };

  const handleDelete = async () => {
    setIsDelete(true);
    console.log(order._id);
    try {
      const result = await axiosInstance.delete(`/orders/${order._id}`);
      console.log(result);
      alert("Order deleted successfully");
    } catch (err) {
      console.log(err);
      alert("Failed to delete order");
    } finally {
      setIsDelete(false); // Reset isDelete after operation completes
    }
  };

  return (
    <div className="shadow border w-full min-w-max">
      <div className="w-full grid grid-cols-5 h-10 bg-gray-100 hover:bg-gray-200 justify-between">
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.receiverName}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.pickUpItem}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.confirmed ? "confirmed" : "pending"}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.receiverPhone}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full justify-evenly">
          <button
            disabled={order.received || isConfirming}
            onClick={handleConfirm}
            className={`p-1 rounded text-slate-100 ${
              isConfirming || order.received
                ? "bg-green-200 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            }`}
          >
            {isConfirming ? "Confirming..." : "Confirm"}
          </button>
          <button
            onClick={handleDelete}
            disabled={isDelete}
            className={`p-1 rounded text-slate-100 ${
              isDelete
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            }`}
          >
            {isDelete ? "Deleting..." : "Delete"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Order;
