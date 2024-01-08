import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";
import "../../form.css";
const Form = () => {
  const [services, setServices] = useState([
    { name: "End of Lease Cleaning", id: 1 },
    { name: "Deep Cleaning", id: 2 },
    { name: "Carpet Cleaning", id: 3 },
  ]);
  const [roomes, setRooms] = useState([
    { num: 0 },
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formDeatails, setFormDetails] = useState({});

  //name validation
  const validateName = () => {
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  //email validation
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("please provide a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = () => {

    const phoneRegex = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;

    // (?:\+?61|0): Matches either an optional '+' followed by '61' or just '0'.
    // [2-478]: Matches the first digit of the area code, which should be 2, 3, 4, 7, or 8.
    // (?:[ -]?[0-9]){8}: Matches 8 digits, allowing for an optional space or hyphen after the first digit.

    if (!phone) {
      setPhoneError("Phone number is required");
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const isSubmitDisabled = !name || !email || !phone || phoneError;

  //set class when show error message for stop breaking style
  const getInputClasses = (error) => {
    return error
      ? "mb-4 w-full input input-bordered rounded-lg overflow-y-scroll "
      : ` w-full input input-bordered rounded-lg overflow-y-scroll`;
  };
  const modalRef = useRef();

  //form submited
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceRequried = form.serviceRequried.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const livingArea = form.livingArea.value;
    const laundryArea = form.laundryArea.value;
    const kitchenArea = form.KitchenArea.value;
    const quoteInfo = {
      name,
      email,
      phone,
      serviceRequried,
      bedroom,
      bathroom,
      livingArea,
      laundryArea,
      kitchenArea,
    };

    const perHour = 60;
    const bedRoomTimeHour = 2;
    const bathRoomTimeHour = 1;
    const livingAreaTimeHour = 1;
    const laundryAreaTimeHour = 0.2;
    const kitchenAreaTimeHour = 0.8;

    let kitchenAreaPrice;
    if (parseFloat(kitchenArea) > 0) {
      kitchenAreaPrice = parseFloat(
        kitchenArea * perHour * kitchenAreaTimeHour
      );
    } else {
      kitchenAreaPrice = parseFloat(kitchenArea);
    }

    let laundryAreaPrice;
    if (parseFloat(laundryArea) > 0) {
      laundryAreaPrice = parseFloat(
        laundryArea * perHour * laundryAreaTimeHour
      );
    } else {
      laundryAreaPrice = parseFloat(laundryArea);
    }

    let livingAreaPrice;
    if (parseFloat(livingArea) > 0) {
      livingAreaPrice = parseFloat(livingArea * perHour * livingAreaTimeHour);
    } else {
      livingAreaPrice = parseFloat(livingArea);
    }

    let bedRoomPrice;
    if (parseFloat(bedroom) > 0) {
      bedRoomPrice = parseFloat(bedroom * perHour * bedRoomTimeHour);
    } else {
      bedRoomPrice = parseFloat(bedroom);
    }

    let bathRoomPrice;
    if (parseFloat(bathroom) > 0) {
      bathRoomPrice = parseFloat(bathroom * perHour * bathRoomTimeHour);
    } else {
      bathRoomPrice = parseFloat(bathroom);
    }

    let totalCostGst =
      kitchenAreaPrice +
      laundryAreaPrice +
      livingAreaPrice +
      bedRoomPrice +
      bathRoomPrice;

    if (totalCostGst === 0) {
      toast.error("You must select atleast one service.");
      return;
    }

    const gst = (10 / 100) * totalCostGst;
    const totalCost = totalCostGst - gst;

    const cost = {
      ...quoteInfo,
      bedRoomPrice,
      bathRoomPrice,
      livingAreaPrice,
      laundryAreaPrice,
      kitchenAreaPrice,
      totalCostGst,
      totalCost,
    };

    setFormDetails({ quoteInfo, totalCost, totalCostGst });

    //send email tamplate params
    const templateParams = {
      to_email: [cost.email, "ozshinecleaners@gmail.com"],
      form_name: "ozshinecleaners",
      form_email: "ozshinecleaners.com.au",
      to_name: cost.name,
      bedroom: cost.bedroom,
      bathroom: cost.bathroom,
      livingArea: cost.livingArea,
      laundryArea: cost.laundryArea,
      kitchenArea: cost.kitchenArea,
      phone: quoteInfo.phone,
      subject: "Your Quote Information",
      bedRoomPrice,
      bathRoomPrice,
      livingAreaPrice,
      laundryAreaPrice,
      kitchenAreaPrice,
      totalCostGst,
      totalCost,
    };

    axios
      .post(`https://shine-home-server.vercel.app/quoteInfo`, templateParams)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Successfully submited request");

          emailjs
            .send(
              import.meta.env.VITE_SERVICE_ID,
              import.meta.env.VITE_TEMPLATE_ID,
              templateParams,
              import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
              (result) => {
                console.log("Email sent successfully:", result);
                modalRef.current.showModal();
              },
              (error) => {
                console.error("Error sending email:", error.text);
              }
            );
        }
      });
    form.reset();
  };

  const handleModalClose = () => {
    modalRef.current.close();
  };

  return (
    <div id="form" className="relative z-20 mb-20 px-5 lg:px-0">
      <div className="p-10 bg-white rounded-lg mb-20 -mt-20 z-20 shadow-lg max-w-4xl mx-auto">
        <dialog
          ref={modalRef}
          className="rounded-lg modal w-[40rem] mx-auto my-auto h-[33rem]  bg-secendary-c border-2 border-sky-200 "
        >
          <IoClose
            onClick={handleModalClose}
            className="modal-close-btn fill-gray-500 text-2xl absolute top-2 right-2 cursor-pointer"
          />
          <div>
            <div>
              <h2 className="text-2xl text-center font-semibold text-primary-c">
                Aprox. Cost
              </h2>
            </div>

            <div className="mt-4">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Service
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Quantity
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Bedroom
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.bedroom || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Bathroom
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.bathroom || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Living Area
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.livingArea || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Kitchen Area
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.kitchenArea || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Laundry Area
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.laundryArea || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                    <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">
                      Total Price: {formDeatails.totalCost} AUD <br />
                      Including GST: {formDeatails.totalCostGst} AUD
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-5 flex justify-center flex-col items-center gap-3">
                <a
                  className="px-6 py-2 bg-primary-c rounded-md text-sm font-semibold text-white"
                  href="tel:8882192787"
                >
                  Call Us 888-219-2787
                </a>

                <p className="text-xs text-gray-500">
                  Feel free to reach out to us to confirm your booking – we're
                  just a call away!
                </p>
              </div>
            </div>
          </div>
        </dialog>

        <form action="" className="" onSubmit={handleSubmit}>
          <p className="text-center font-bold lg:text-4xl text-3xl xsm:text-2xl mb-6">
            Get Your Personalized Quote
          </p>
          <p className="text-center text-sm mb-6  text-gray-500">
            Allow us to meticulously create a tailored quote, providing you with
            a detailed estimate perfectly aligned with your specific cleaning
            needs.
          </p>
          <div className="mb-5">
            <label className="label">
              <span className="label-text font-bold flex justify-center items-center gap-1">
                Service Requried
                <span className="text-red-500 text-[18px]">*</span>
              </span>
            </label>
            <select
              name="serviceRequried"
              id=""
              className={`w-full input input-bordered rounded-lg overflow-y-scroll`}
            >
              {services.map((service) => (
                <option key={service.id}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold flex justify-center items-center gap-1">
                  Name <span className="text-red-500 text-[18px]">*</span>
                </span>
              </label>
              <input
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                className="input bg-transparent focus:bg-transparent rounded-lg input-bordered w-full"
                required
              />
              <span className="text-red-500 mt-2 text-xs">{nameError}</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold flex justify-center items-center gap-1">
                  Email Address{" "}
                  <span className="text-red-500 text-[18px]">*</span>
                </span>
              </label>
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                className=" input rounded-lg input-bordered w-full"
                required
              />
              <span className="text-red-500 mt-2 text-xs">{emailError}</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold  flex justify-center items-center gap-1">
                  Phone Number{" "}
                  <span className="text-red-500 text-[18px] ">*</span>
                </span>
              </label>
              <input
                name="phoneNumber"
                type="number"
                inputMode="numeric"
                onChange={(e) => setPhone(e.target.value)}
                onBlur={validatePhone}
                className=" input rounded-lg input-bordered w-full"
                required
              />
              <span className="text-red-500 mt-2 text-xs">{phoneError}</span>
            </div>

            <div className="">
              <label className="label">
                <span className="label-text font-bold ">Kitchen Area</span>
              </label>
              <select
                name="KitchenArea"
                id=""
                placeholder="select"
                className={getInputClasses(!!phoneError)}
              >
                {roomes.map((room) => (
                  <option className="p-5" key={room.num}>
                    {room.num}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <label className="label">
                <span className="label-text font-bold  flex justify-center items-center gap-1">
                  Bedroom
                </span>
              </label>
              <select
                name="bedroom"
                id=""
                className={getInputClasses(!!nameError)}
              >
                {" "}
                {roomes.map((room) => (
                  <option key={room.num}>{room.num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold ">Bathroom</span>
              </label>
              <select
                name="bathroom"
                id=""
                placeholder="select"
                className={getInputClasses(!!emailError)}
              >
                {roomes.map((room) => (
                  <option className="p-5" key={room.num}>
                    {room.num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold ">Living Area</span>
              </label>
              <select
                name="livingArea"
                id=""
                placeholder="select"
                className={getInputClasses(!!phoneError)}
              >
                {roomes.map((room) => (
                  <option className="p-5" key={room.num}>
                    {room.num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold ">Laudry area</span>
              </label>
              <select
                name="laundryArea"
                id=""
                placeholder="select"
                className={getInputClasses(!!phoneError)}
              >
                {roomes.map((room) => (
                  <option className="p-5" key={room.num}>
                    {room.num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`px-8 py-2 font-semibold transition-all mt-8 xsm:text-sm xsm:px-3 uppercase ${
                isSubmitDisabled ? `bg-[#577c4a]` : "bg-primary-c"
              }  text-white rounded`}
              disabled={isSubmitDisabled}
            >
              Calculate Cost
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;