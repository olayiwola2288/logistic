import { useState } from "react";

const Dashboard = () => {
  const [Number, setNumber] = useState(0);

  const increment = () => {
    setNumber(Number + 1);
    console.log(Number);
  };

  return (
    <div className=" mt-40">
      <h1 className="px-8 p-4 text-4*1 flex item-center justify-center py-4 rounded-md">
        {Number}
      </h1>
      <div className=" flex mx-3  item-center justify-center">
        <button
          className="rounded-md bg-yellow-300 p-3 mx-3"
          onClick={increment}
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
