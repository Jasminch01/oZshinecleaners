import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
// import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";
import "../../form.css";
import moment from "moment";
const Form = () => {
  const [services, setServices] = useState([
    { name: "End of Lease Cleaning", id: 1 },
    { name: "Detailed House Cleaning", id: 2 },
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceRequried = form.serviceRequried.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const livingArea = form.livingArea.value;
    const laundryArea = form.laundryArea.value;
    const kitchenArea = form.KitchenArea.value;
    const steam = form.steam.value;
    const wetWipe = form.wetWipe.value;
    const spotWalls = form.spotWalls.value;
    const balcony = form.balcony.value;
    const garage = form.garage.value;
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
      steam,
      wetWipe,
      spotWalls,
      balcony,
      garage,
    };

    const perHour = 60;
    const bedRoomTimeHour = 2;
    const bathRoomTimeHour = 1;
    const livingAreaTimeHour = 1;
    const laundryAreaTimeHour = 0.2;
    const kitchenAreaTimeHour = 0.8;

    //
    const eachSteam = 40;
    const eachWipe = 15;
    const eachBalcony = 40;
    const eachGarage = 30;

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

    let steamPrice;
    if (parseFloat(steam) > 0) {
      steamPrice = parseFloat(steam * eachSteam);
    } else {
      steamPrice = parseFloat(steam);
    }

    let wetWipePrice;
    if (parseFloat(wetWipe) > 0) {
      wetWipePrice = parseFloat(wetWipe * eachWipe);
    } else {
      wetWipePrice = parseFloat(wetWipe);
    }
    let spotWallsPrice;
    if (parseFloat(wetWipe) > 0) {
      spotWallsPrice = parseFloat(spotWalls * perHour);
    } else {
      spotWallsPrice = parseFloat(spotWalls);
    }

    let balconyPrice;
    if (parseFloat(balcony) > 0) {
      balconyPrice = parseFloat(balcony * eachBalcony);
    } else {
      balconyPrice = parseFloat(balcony);
    }

    let garagePrice;
    if (parseFloat(garage) > 0) {
      garagePrice = parseFloat(garage * eachGarage);
    } else {
      garagePrice = parseFloat(garage);
    }

    let totalCostGst =
      kitchenAreaPrice +
      laundryAreaPrice +
      livingAreaPrice +
      bedRoomPrice +
      bathRoomPrice +
      steamPrice +
      wetWipePrice +
      spotWallsPrice +
      balconyPrice +
      garagePrice;
    if (totalCostGst === 0) {
      toast.error("You must select atleast one service.");
      return;
    }

    //GST calculation
    // const gst = (10 / 100) * totalCostGst;
    // const totalCost = totalCostGst - gst;

    //GST calculation
    // const gstRate = 0.1;
    // const excludedGst = totalCostGst / (1 + gstRate);
    // const totalWithoutGst = excludedGst.toFixed(2);

    const cost = {
      ...quoteInfo,
      bedRoomPrice,
      bathRoomPrice,
      livingAreaPrice,
      kitchenAreaPrice,
      laundryAreaPrice,
      steamPrice,
      wetWipePrice,
      spotWallsPrice,
      balconyPrice,
      garagePrice,
      totalCostGst,

      // totalCost,
      // totalWithoutGst,
    };

    setFormDetails({ quoteInfo, totalCostGst });

    const requestedDate = moment().format("LLLL");

    //send email tamplate params
    const templateParams = {
      serviceRequried: quoteInfo.serviceRequried,
      to_email: [cost.email, "ozshinecleaners@ozshinecleaners.com.au"],
      form_name: "ozshinecleaners",
      form_email: "ozshinecleaners@ozshinecleaners.com.au",
      to_name: cost.name,
      bedroom: cost.bedroom,
      bathroom: cost.bathroom,
      livingArea: cost.livingArea,
      kitchenArea: cost.kitchenArea,
      laundryArea: cost.laundryArea,
      steam: cost.steam,
      wetWipe: cost.wetWipe,
      spotWalls: cost.spotWalls,
      balcony: cost.balcony,
      garage: cost.garage,

      phone: quoteInfo.phone,
      requestedDate: requestedDate,
      subject: `Quote for "${quoteInfo.serviceRequried}" - oZshinecleaners`,
      bedRoomPrice,
      bathRoomPrice,
      livingAreaPrice,
      laundryAreaPrice,
      kitchenAreaPrice,
      steamPrice,
      wetWipePrice,
      spotWallsPrice,
      balconyPrice,
      garagePrice,
      totalCostGst,
      // totalCost,
      // totalWithoutGst,
    };

    modalRef.current.showModal();
    try {
      const response = await axios.post(
        // "https://o-zshinecleaners-server.vercel.app/quoteInfo",

        "http://localhost:5001/quoteInfo",
        templateParams,
        { withCredentials: true }
      );

      if (response.data.acknowledged) {
        toast.success("Successfully submitted request");
      }
    } catch (error) {
      // Handle errors here
      console.error("Error submitting request:", error);
    } finally {
      form.reset();
    }
  };

  const handleModalClose = () => {
    modalRef.current.close();
  };

  return (
    <div id="form" className="relative z-20 my-10 px-5 lg:px-0">
      <div className="p-10 bg-white rounded-lg mb-20 -mt-20 z-20 shadow-lg max-w-4xl mx-auto">
        <dialog
          ref={modalRef}
          className="rounded-lg modal md:w-[40rem] w-[20rem] xsm:w-[18rem] mx-auto my-auto h-[40rem]  bg-secendary-c border-2 border-sky-200 overflow-y-scroll"
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
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Bathroom
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.bathroom || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Living Area
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.livingArea || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-2 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Kitchen Area
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {formDeatails?.quoteInfo?.kitchenArea || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Laundry Area
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mb-5">
                      {formDeatails?.quoteInfo?.laundryArea || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Steam Clean
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mb-5">
                      {formDeatails?.quoteInfo?.steam || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Number Of Blinds
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mb-5">
                      {formDeatails?.quoteInfo?.wetWipe || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      Spot Walls
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mb-5">
                      {formDeatails?.quoteInfo?.spotWalls || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {` Balcony (Including Glasses) `}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mb-5">
                      {formDeatails?.quoteInfo?.balcony || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {` Garage (Sweep And Tidy) `}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mb-5">
                      {formDeatails?.quoteInfo?.garage || 0}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 hidden "></td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mt-[-1px]"></td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 mt-[-1px] hidden md:block text-sm font-semibold text-gray-700">
                      {/* Total Price: {formDeatails.totalWithoutGst} AUD <br /> */}
                      Including GST: {formDeatails.totalCostGst} AUD
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 font-bold mt-[-1px] md:hidden block">
                      Including GST: {formDeatails.totalCostGst} AUD
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-5 flex justify-center flex-col items-center gap-3">
                <a
                  className="md:px-6 px-2 py-2 bg-primary-c rounded-md text-sm font-semibold text-white"
                  href="tel:+61452679582"
                >
                  Call Us +61452679582
                </a>

                <p className="text-xs text-gray-500 text-center px-2 md:px-0">
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
                <span className="label-text font-bold ">Laudry Area</span>
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
            <div>
              <label className="label">
                <span className="label-text font-bold ">Steam</span>
              </label>
              <select
                name="steam"
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
                <span className="label-text font-bold ">Number Of Blinds</span>
              </label>
              <select
                name="wetWipe"
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
                <span className="label-text font-bold ">{`Spot Clean (Walls) `}</span>
              </label>
              <select
                name="spotWalls"
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
                <span className="label-text font-bold ">{`Balcony (Including Glasses) `}</span>
              </label>
              <select
                name="balcony"
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
                <span className="label-text font-bold ">{`Garage (Sweep And Tidy)`}</span>
              </label>
              <select
                name="garage"
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
              className={`md:px-8 md:py-2 px-4 py-2 text-sm md:text-lg font-semibold transition-all mt-8 xsm:text-sm xsm:px-3 uppercase ${
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
