import AOS from "aos";
import "aos/dist/aos.css";
let customerReview = [
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "Has been my go-to zone for logistics and i have never been disappointed. Thank's!!!",
    name: "Zinny's outfit",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "Love the fact that i have access to numerous offers and can negotiate. Thank's!!!",
    name: "Mrs Eki",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "Don't worry, i'm stuck here and never leaving it's no more thant's to your",
    name: "Esthy Collections",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "Happy about the speed of delivery and support team availability. But do more .",
    name: "Mr Oluwatobi",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "One of the most functional and detailed website I have seen in a while.",
    name: "Ademola Ajala",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "This will really save a lot of us small business owners from Logistics people wahala !!!.",
    name: "Zoe Fashion Hub",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    info: "This is fantastic, Thanks for the simplicity and the ease of use. we love it.",
    name: "Ifeoluwa",
  },
];
const Card = () => {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
  return (
    <div
      className="overflow-x-scroll flex gap-4"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      {customerReview.map((review, index) => (
        <div
          key={index}
          className="scroll-item inline-block scroll-snap-start mx-5 "
        >
          <div className="w-[500px] max-w-sm bg-white shadow-lg rounded-lg  my-20">
            <div className="flex justify-center">
              <img
                src={review.img}
                alt=""
                className="w-20 h-20 rounded-full mt-6"
                data-aos="zoom-in"
                data-aos-duration="2000"
              />
            </div>
            <div className="px-6 py-4">
              <p className="text-xl font-semibold text-center">{review.info}</p>
              <p className="text-gray-700 text-base text-center">
                {review.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
