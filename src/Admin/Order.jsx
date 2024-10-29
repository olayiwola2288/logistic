const Order = ({ order }) => {
  return (
    <div className="shadow border w-full min-w-max">
      <div className="w-full grid grid-cols-6 h-10 bg-gray-100 hover:bg-gray-200 justify-between">
        <p className="px-2 flex items-center border-r text-green-900 text-center h-full truncate whitespace-nowrap w-40">
          {order.senderName}
        </p>

        <p className="px-2 flex items-center border-r text-green-900 text-center h-full truncate whitespace-nowrap w-40">
          {order.senderPhone}
        </p>

        <p className="px-2 flex items-center border-r text-green-900 text-center h-full truncate whitespace-nowrap w-40">
          {order.pickUpItem}
        </p>

        <p className="px-2 flex items-center border-r text-green-900 text-center h-full truncate whitespace-nowrap w40-">
          {order.receiverName}
        </p>

        <p className="px-2 flex items-center border-r text-green-900 text-center h-full truncate whitespace-nowrap w-40">
          {order.receiverPhone}
        </p>

        <p className="px-2 flex items-center text-green-900 text-center h-full truncate whitespace-nowrap w-40">
          {order.received && order.delivered ? "confirmed" : "pending"}
        </p>
      </div>
    </div>
  );
};

export default Order;
