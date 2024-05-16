import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

const FaqItem = ({ question, answer }) => {
    const [show, setShow] = useState(false);
  
    const handleToggle = () => {
      setShow(!show);
    };
  
    return (
      <div className="px-10 shadow mb-5 w-[85%] mx-auto py-5 rounded">
        <div className="flex justify-between">
          <p className=" text-green-800 font-bold text-xl mb-2">{question}</p>
          <RiArrowDropDownLine onClick={handleToggle}  className=" font-bold text-green-800"/>
        </div>
        {show && <p className=" text-green-800 text-sm">{answer}</p>}
      </div>
    );
  };


export default FaqItem