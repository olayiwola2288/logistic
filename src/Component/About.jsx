// import style from "../Component/About";
import image1 from "../assets/image12.jpg";
import image2 from "../assets/image13.jpg";
import image3 from "../assets/image15.jpeg";
import image4 from "../assets/image16.jpeg";
import image5 from "../assets/image10.jpeg";
import image6 from "../assets/image17.webp";
import image7 from "../assets/image18.jpeg";
// import image8 from "../assets/image19.jpeg";
import image9 from "../assets/image20.jpg";
import image10 from "../assets/image22.avif";
import image11 from "../assets/image23.jpeg";
import image12 from "../assets/image25.jpeg";
import image13 from "../assets/image 24.jpeg";
import { useState, useEffect } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual data loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 500); // 2000 milliseconds (2 seconds) for demonstration purposes
  }, []);

  return (
    <div className="mt-40">
      {loading ? (
        <div>
          <div className="flex items-center justify-center h-screen" disabled>
            <div className="animate-spin h-40 w-40 border-t-4 border-green-900 rounded-full"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-10 mx-2 p-5 min-h-70 mt-32">
            <div className="w-full sm:w-1/2 my-5 ">
              <img src={image1} style={{ width: "550px", marginTop: "15%" }} />
            </div>
            <div className="w-full sm:w-1/2 pr-5 ">
              <h1
                className=" p-4 text-green-800 "
                style={{ fontSize: "3.5rem", fontWeight: "bolder" }}
              >
                We're here because of you.
              </h1>
              <p className="text-center text-xs p-4">
                serenity is changing the narrative of efficient logistics in
                Africa by offering ease of access to multiple logistics agents
                anywhere and at any time. The African logistics scene is riddled
                with infrastructure gaps, high operating costs and overly
                fragmented activities.
              </p>
              <p className="text-center text-xs p-4">
                serenity express platform serves as a reliable clilaboration
                toli for various logistics agents across multiple locations
                leveraging on technliogy tolis and a smart operations framework.
              </p>
              <p className="text-center text-xs p-4">
                Our commitment is to facilitate movement of packages and cargo
                from point of origin to the destination desired by the user. We
                are creating Africa's largest logistics marketplace and
                clilaboration toli across multiple-modal channels.
              </p>
              <p className="text-center text-xs p-4">
                In ensuring that we keep to our promise of safely moving your
                goods from one point to another, we go the extra mile in
                providing end-to-end logistics efficiency by practically closing
                the infrastructure gaps that limit the deployment of our
                technliogy tolis. Our Key Stakehliders: Logistics Agents,
                Infrastructure partners and various courier organizations.
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-lg  bg-green-800  md:flex-row flex-row py-5 px-5 my-5 mx-8">
            <img src={image7} alt="" />
            <div className="p-6 bg-green-800">
              <h5 className="mb-2 text-xl font-medium leading-tight  text-white text-center my-5 ">
                Our Services
              </h5>
              <p className="mb-4  text-white px-5">
                We facilitate movement of packages and cargo from point of
                origin to the destination desired by the user. We do this by
                leveraging on active logistics agents operating different
                mobility assets like Motorcycles (dispatch), Vehicles or
                Mini-buses and 1-10tons trucks. We employ multiple
                modal-channels in ensuring end to end logistics process
                efficiency.
              </p>
            </div>
          </div>
          <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 mx-8">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={image2} alt="image" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Exclusive Express delivery
                        </a>
                      </h3>
                      <p className="text-body-color text-base">
                        Using our app, users can order for vehicles or
                        motorcycles for exclusive pick-up and delivery of
                        courier packages with no stop overs from pick point to
                        destination.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={image3} alt="image" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Scheduled Delivery
                        </a>
                      </h3>
                      <p className="text-body-color text-base">
                        This is for same day pick up and deliveries (where
                        scheduling must be done between 6am to 9:59am same day)
                        and next-day only pick-up and delivery. Users can choose
                        their preferred pick up time and choice of vehicle for
                        this affordable delivery option.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={image4} alt="image" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Inter-state Delivery
                        </a>
                      </h3>
                      <p className="text-body-color text-base">
                        This is a scheduled service where users can book for
                        pickup of goods for onward door-step delivery to
                        intended recipient in another city.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={image5} alt="image" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Inter-Country delivery
                        </a>
                      </h3>
                      <p className="text-body-color text-base">
                        This affordable delivery option is a special service for
                        movement of goods from one country to the intended
                        recipient in another country.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={image4} alt="image" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Inter-state Delivery
                        </a>
                      </h3>
                      <p className="text-body-color text-base">
                        This is a scheduled service where users can book for
                        pickup of goods for onward door-step delivery to
                        intended recipient in another city.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={image5} alt="image" className="w-full" />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Inter-Country delivery
                        </a>
                      </h3>
                      <p className="text-body-color text-base">
                        This affordable delivery option is a special service for
                        movement of goods from one country to the intended
                        recipient in another country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className=" px-5 bg-green-900 text-white py-5 mx-8">
            <a href="#" className="block group  p-4 border-b">
              <p className="font-bold text-lg mb-1 text-white text-center ">
                Benefits our Logistics Agent Enjoy
              </p>
            </a>
            <ul className="list-disc text-sm mx-5 my-5">
              <li>
                Serenity provides improved market access to a large pool of
                prospective customers.
              </li>
              <li>
                For fleet operators, Serenity increases sales prospects and
                overall operational efficiency with access to customized tools.
              </li>
              <li>
                Prospective Logistics Agents are required to select mobility
                asset type (motorbike, vehicle or truck), year of production,
                plate number and uploads of documents (driver license, vehicle
                registration document and complete )
              </li>
              <li>
                Our Quality Assessment Agent will verify/screen your application
                after which you become verified on the Serenity express
                platform; which means you can start receiving requests.
              </li>
              <li>
                For complete information about required documents, click here
                for checklist.
              </li>
              <li>
                For more information kindly send an email to:
                support@Serenity.com.ng
              </li>
            </ul>
          </div>

          <div className="flex flex-col rounded-lg bg-green shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-green-800  md:flex-row py-5 px-5 my-5 mx-8">
            <img src={image6} alt="" width={500} className="mx-2" />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-white">
                Become A Logistics Agent
              </h5>
              <p className="mb-4 text-base  text-white">
                You can truly become your own boss as a serenity express
                logistics agent whether as an owner of a motorcycle, vehicle or
                a fleet of mobility assets. serenity is a clilaborative toli
                that depends on logistics agents and logistics infrastructure
                partners. As our logistics agent you can earn by fulfilling
                logistics requests in any of the cities we operate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5 mx-8">
            <div>
              <img
                style={{ width: "95%" }}
                className="h-auto max-w-full rounded-lg"
                src={image11}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "150%" }}
                className="h-auto max-w-full rounded-lg"
                src={image12}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "150%" }}
                className="h-auto max-w-full rounded-lg"
                src={image7}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "95%" }}
                className="h-auto max-w-full rounded-lg "
                src={image13}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={image9}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg "
                src={image10}
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
