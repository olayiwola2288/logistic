import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { useFormik } from "formik";
import * as yup from "yup";
const ShowOrder = () => {
  const formik = useFormik({
    initialValues: {
      senderName: "",
      senderAddress: "",
      senderPhone: "",
      pickUpItem: "",
      itemWeight: "",
      deliveryMode: "",
      receiverName: "",
      receiverAddress: "",
      receiverPhone: "",
      deliveryType: "",
    },
    validationSchema: yup.object({
      senderName: yup.string().required("Full Name of the sender is required"),
      senderAddress: yup.string().required("Address of the sender is required"),
      senderPhone: yup
        .string()
        .required("Phone number of  the sender is required"),
      pickUpItem: yup.string().required(" Name item is required"),
      itemWeight: yup.string().required("Put the weight item "),
      deliveryMode: yup.string().required("Choose a delivery mode"),
      receiverName: yup.string().required("Name of the receiver is required"),
      receiverAddress: yup
        .string()
        .required("Address of the receiver is required"),
      receiverPhone: yup
        .string()
        .required("Phone number of  the receiver is required"),
      deliveryType: yup.string().required("Choose a delivery type"),
    }),

    onSubmit: async (value) => {
      console.log(value);
      // value.name = value.pickUpItem;
      const result = await axiosInstance.post("orders/", value);
      console.log(result);
    },
  });
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > null;

  return (
    <div className=" mt-10">
      <div className=" flex justify-end me-4">
        <Button
          onClick={() => setOpenModal(true)}
          className=" bg-green-800 hover:bg-red-800"
        >
          Make Order
        </Button>
      </div>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Create Order
              </h3>

              <div>
                <label htmlFor="senderName">
                  <small>Name of the person we are picking item from</small>
                </label>
                <TextInput
                  id="senderName"
                  placeholder="pick up full name"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.senderName}
                  name="senderName"
                />
              </div>

              <div>
                <label htmlFor="senderAddress">
                  <small>
                    Kindly give detailed address, please select from the
                    available dropdown landmark option that will appear as you
                    type
                  </small>
                </label>
                <TextInput
                  id="senderAddress"
                  placeholder="pick up address"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.senderAddress}
                  name="senderAddress"
                />
              </div>

              <div>
                <label htmlFor="senderPhone">
                  <small>Provide phone number and other line</small>
                </label>
                <TextInput
                  id="senderPhone"
                  placeholder="pick up phone number"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.senderPhone}
                  name="senderPhone"
                />
              </div>

              <div>
                <label htmlFor="pickUpItem">
                  <small>What item do you want to send.</small>
                </label>
                <TextInput
                  id="pickUpItem"
                  placeholder="pick up item"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.pickUpItem}
                  name="pickUpItem"
                />
              </div>

              <div>
                <label htmlFor="itemWeight">
                  <small>What is the weight of the item.</small>
                </label>
                <TextInput
                  id="itemWeight"
                  placeholder="Drop off wight in kg (optional)"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.itemWeight}
                  name="itemWeight"
                />
              </div>

              <div>
                <label htmlFor="deliveryMode">
                  How do you want your goods to be delivered
                </label>
              </div>
              <div className=" flex gap-4 justify-center">
                <div>
                  <input
                    type="radio"
                    id="Bicycle"
                    name="deliveryMode"
                    value="Bicycle"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="Bicycle">
                    <small> Bicycle </small>{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Bike"
                    name="deliveryMode"
                    value="Bike"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="Bike">
                    <small> Bike </small>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Car"
                    name="deliveryMode"
                    value="Car"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="Car">
                    <small> Car </small>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Truck"
                    name="deliveryMode"
                    value="Truck"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="Truck">
                    <small> Truck </small>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="receiverName">
                  <small>Receiver name</small>
                </label>
                <TextInput
                  id="receiverName"
                  placeholder="Drop off full name"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.receiverName}
                  name="receiverName"
                />
              </div>

              <div>
                <label htmlFor="receiverAddress">
                  <small>
                    Address of the receiver (where they will receive the item).
                  </small>
                </label>
                <TextInput
                  id="receiverAddress"
                  placeholder="Drop off Address"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.receiverAddress}
                  name="receiverAddress"
                />
              </div>

              <div>
                <label htmlFor="receiverPhone">
                  <small>Kindly provide main line and other line</small>
                </label>
                <TextInput
                  id="receiverPhone"
                  placeholder="Drop off phone number"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.receiverPhone}
                  name="receiverPhone"
                />
              </div>

              <div>
                <small>Delivery Type</small>
                <div>
                  <input
                    type="radio"
                    id="sameCity"
                    name="deliveryType"
                    value="sameCity"
                    title="sameCity"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="SameCity">
                    <small> City (delivery within same state or city) </small>
                  </label>

                  <div>
                    <input
                      type="radio"
                      id="interState"
                      name="deliveryType"
                      value="interState"
                      title="interState"
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="interState">
                      <small> Inter-State </small>
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="interCountry"
                      name="deliveryType"
                      value="interCountry"
                      title="interCountry"
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="interCountry">
                      <small> Inter-Country </small>
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex justify-end">
                <Button
                  type="submit"
                  className=" bg-green-800 "
                  
                >
                  
                </Button>
              </div>
              <div className=" flex justify-center">
                <Button className=" bg-green-800 py-1 px-6">Preview </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShowOrder;
