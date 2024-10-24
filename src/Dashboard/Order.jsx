const Order = ({ order }) => {
    console.log(order)
  return (
    <div className=" flex justify-between mb-5 mx-10 px-5 py-3 rounded-lg shadow "> 
      <p className="px-2 text-green-900">Order ID: {order._id}</p>
      <p className="px-2 text-green-900">Name: {order.name}</p>
      <p className="px-2 text-green-900">Item: {order.item}</p>
      <p className="px-2 text-green-900">Status: {order.status}</p>
      <p className="px-2 text-green-900">Price: {order.price}</p>
      <p className="px-2 text-green-900">Quantity: {order.quantity}</p>

      {/* Add a button to update the order status */}
    </div>
  );
};

export default Order;
