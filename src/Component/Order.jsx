import { useState, useEffect } from "react";

const Order = () => {
  let OrderList = [
    {
        PickUpAddress: "Lekki Pearl Estate, Alpha Mead Crescent, After Sunshine Garden, Sangotedo.",
        DropOffAddress: "Ocean Palm, Lagos, Nigeria",
        DeliveryMode: "Car" ,
        Item: "Sim"
    },
    {
        PickUpAddress: "NO 2 Ebu Street,Upper Sokponba Road",
        DropOffAddress: "2 Ebu Street,Upper Sokponba Road",
        DeliveryMode: "bike" ,
        Item: "Rice"
    },
    {
        PickUpAddress: "1, Tunji Akin-Ojo Street, Valley View Estate, Aboru, Lagos",
        DropOffAddress: "Block 14, Flat 3, Ijaiye Medium Housing Estate, Ogba",
        DeliveryMode: "bike ",
        Item: "Meat"
    },
    {
        PickUpAddress: "Lekki Pearl Estate, Alpha Mead Crescent, After Sunshine Garden, Sangotedo.",
        DropOffAddress: "Ocean Palm, Lagos, Nigeria",
        DeliveryMode: "bike ",
        Item: "cap"
    },
    {
        PickUpAddress: "Gigl Ogunfayo Bus Stop Before Eputu",
        DropOffAddress: "Bamako Estate, Opposite Omole Phase 1, Lagos",
        DeliveryMode: "bike ",
        Item: "Cloth"
    },
    {
        PickUpAddress: "Bamako Estate, Opposite Omole Phase 1, Lagos",
        DropOffAddress: "Ocean Palm, Lagos, Nigeria",
        DeliveryMode: "bike ",
        Item: "Hair"
    },
    {
        PickUpAddress: "Lekki Pearl Estate, Alpha Mead Crescent, After Sunshine Garden, Sangotedo.",
        DropOffAddress: "14a SS Mini Court, Chevron Alternative Route",
        DeliveryMode: "bike ",
        Item: "Herbal Product"
    },
    {
        PickUpAddress: "Mokola Road, Ibadan, Nigeria",
        DropOffAddress: "Ojoo Bus Terminal, Ibadan, Nigeria",
        DeliveryMode: "truk ",
        Item: "Custard"
    },
    {
        PickUpAddress: "Under G Road, Ogbomosho, Nigeria",
        DropOffAddress: "Ojota, Lagos, Nigeria",
        DeliveryMode: "bike",
        Item: "Handout"
    },
    {
        PickUpAddress: "Maza Maza Bus Stop, Old Ojo Road, Lagos, Nigeria",
        DropOffAddress: "Rumuokoro Flyover, Airport Road, Port Harcourt, Nigeria",
        DeliveryMode: "truk",
        Item: "MeaCandy"
    },
    
    ]
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
        <table className=" w-[80%] table mt-40 mx-auto">
          <thead className="bg-green-800 text-white py-4 mb-5 rounded">
            <tr>
              <th className="px-4">Pick Up Address</th>
              <th className="px-4">Drop Off Address</th>
              <th className="px-4">Delivery Mode</th>
              <th className="px-4">Item</th>
            </tr>
          </thead>
          <tbody>
          {OrderList.map((item, index) =>(
              <tr key={index} className=" shadow">
              <td className="px-4">{item.PickUpAddress}</td>
              <td className="px-4">{item.DropOffAddress}</td>
              <td className="px-4">{item.DeliveryMode}</td>
              <td className="px-4">{item.Item}</td>
            </tr>
          ))}
            </tbody>
        </table>
      )}
    </div>
  );
};

export default Order; 