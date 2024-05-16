import  { useState, useEffect } from "react";
import FaqItem from "./FaqItem";

const Faqs = () => {
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
        <div className=" mt-40">
          <FaqItem
            question="What Is Serenity?"
            answer="Serenity express practically leverages on the domain strengths of various logistics agents and niche courier companies across Africa. With the simple convenience of a smartphone, we have smartly eliminated traditional logistics operations barriers that make movement of goods from one point to another in Africa seem like rocket science. Our operational model, harmonized with our deployed technology tools enables us to seamlessly address your logistics needs affordably, reliably and with utmost peace of mind."
          />
          <FaqItem
            question="How To Make A Delivery Order"
            answer="Simply download the serenity express app and register, then proceed to select type of transaction (city or intercity); then provide required details and available agents will be matched with your request in real time."
          />
          <FaqItem
            question="How Do I Make Payment?"
            answer="Payment is required on the app before you are matched with any logistics agent, however, this payment is captured in our escrow system and logistics agents only get paid after successful completion of your delivery. Our payment channels are secure and safe."
          />
          <FaqItem
            question="How Safe Are My Goods To Be Delivered?"
            answer="Serenity is fully committed to ensuring seamless and safe movement of goods from pickup to destination. Our platform ensures transparency of goods in-transit by prescreened logistics agents via our mapping systems and telematics framework. In addition to this, serenity ensures end-to-end operational efficiency in all our logistics transactions which are fully insured (by our NAICOM licensed provider) and smartly tracked."
          />
          <FaqItem
            question="How Can I Become A Logistics Agent"
            answer="You can begin the amazing journey of becoming your own boss by earning on the Serenity platform when you fulfill delivery requests as our logistics agent. All that is simply required are your personal details and details of your mobility asset. Follow the link and learn more about our criteria and on-boarding process."
          />
        </div>
      )}
    </div>
  );
};

export default Faqs;
