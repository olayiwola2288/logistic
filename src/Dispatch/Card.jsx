import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import Order from "./Order";

const Card = () => {
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/orders/")
      .then((response) => {
        console.log(response.data);
        // orders = [response.data]
        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setCompletedOrders(
      orders.filter(
        (order) => order.confirmedByUser === true && order.dispatched
      ).length
    );
  }, [orders]);

  // console.log(orders);
  return (
    <div>
      <div className=" mx-auto mt-20 flex gap-5">
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center ms-5 py-5">
          <h1 className=" text-[#E93BED] text-4xl font-bold">
            {orders?.length}
          </h1>
          <p className=" text-sm">Created Order</p>
        </div>
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center py-5">
          <h1 className=" text-[#0BCE83] text-4xl font-bold">0</h1>
          <p className=" text-sm">Accepted Order</p>
        </div>
        <div className=" shadow rounded w-40 lg:w-80 lg:h-32 h-28 text-center me-5 py-5 ">
          <h1 className=" text-[#001B87] text-4xl font-bold">
            {completedOrders}
          </h1>
          <p className=" text-sm">Completed Order</p>
        </div>
      </div>
      <h1 className="text-center my-5">Order Details</h1>
      <div className="md:w-[90%] border m-2  overflow-x-scroll">
        <div className="grid grid-cols-5">
          <p className="px-2 border font-semibold ">ReceiverName</p>
          <p className="px-2 border font-semibold ">Item</p>
          <p className="px-2 border font-semibold ">Status</p>
          <p className="px-2 border font-semibold ">ReceiverPhone</p>
          <p className="px-2 border font-semibold">Actions</p>
        </div>
        {orders.length > 0
          ? orders.map((order) => (
              <div key={order._id} className="space-y-4">
                <Order order={order} />
              </div>
            ))
          : "No Orders Available"}
      </div>
    </div>
  );
};

export default Card;
