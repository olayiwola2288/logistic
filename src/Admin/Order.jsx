const Order = ({ order }) => {
  return (
    <div className="shadow border w-full min-w-max">
      <div className="w-full grid grid-cols-4 h-10 bg-gray-100 hover:bg-gray-200 justify-between">
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.receiverName}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.pickUpItem}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.received && order.delivered ? "confirmed" : "pending"}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full ">
          {order.receiverPhone}
        </p>
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full justify-evenly"></p>
      </div>
    </div>
  );
};

export default Order;
