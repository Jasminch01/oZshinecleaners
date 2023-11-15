import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TiStarFullOutline } from "react-icons/ti";

const Form = () => {
  const [services, setServices] = useState([]);
  const [roomes, setRooms] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
  //phone validation

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }
  };

  const isSubmitDisabled = !name || !email || !phone;

  //set class when show error message for stop breaking style
  const getInputClasses = (error) => {
    return error
      ? "mb-4 w-full input input-bordered rounded-lg overflow-y-scroll "
      : ` w-full input input-bordered rounded-lg overflow-y-scroll`;
  };

  //loaded services form server api
  useEffect(() => {
    axios
      .get(`https://shine-home-server.vercel.app/services`)
      .then((res) => setServices(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //loded roomesdata form server api
  useEffect(() => {
    axios
      .get(`https://shine-home-server.vercel.app/bedrooms`)
      .then((res) => setRooms(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //form submited
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceRequried = form.serviceRequried.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const postCode = form.postCode.value;
    const quoteInfo = {
      name,
      email,
      phone,
      serviceRequried,
      bedroom,
      bathroom,
      postCode,
    };
    console.log(quoteInfo);

    axios
      .post(`https://shine-home-server.vercel.app/quoteInfo`, quoteInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully submited request");
        }
      });

    form.reset();
  };

  return (
    <div className="relative z-20">
      <div className="p-10 bg-white rounded-lg mb-20 -mt-20 z-20 shadow-lg">
        <form action="" onSubmit={handleSubmit}>
          <p className="text-center font-bold text-3xl mb-6">
            Get a Free Quote
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex justify-center items-center gap-1">
                    Name <span className="text-red-500 text-[18px]">*</span>
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                  className="input rounded-lg input-bordered w-full"
                  required
                />
                <span className="text-red-500 mt-2 text-xs">{nameError}</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-lg flex justify-center items-center gap-1">
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
                  <span className="label-text font-lg  flex justify-center items-center gap-1">
                    Phone Number{" "}
                    <span className="text-red-500 text-[18px] ">*</span>
                  </span>
                </label>
                <input
                  name="phoneNumber"
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={validatePhone}
                  className=" input rounded-lg input-bordered w-full"
                  required
                />
                <span className="text-red-500 mt-2 text-xs">{phoneError}</span>
              </div>
            </div>
            <div className="">
              <div>
                <label className="label">
                  <span className="label-text font-lg flex justify-center items-center gap-1">
                    Service Requried
                  </span>
                </label>
                <select
                  name="serviceRequried"
                  id=""
                  className={getInputClasses(!!nameError)}
                >
                  {services.map((service) => (
                    <option key={service._id}>{service.name}</option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="label-text font-lg  flex justify-center items-center gap-1">
                    Bedroom
                  </span>
                </label>
                <select
                  name="bedroom"
                  id=""
                  className={getInputClasses(!!emailError)}
                >
                  {" "}
                  {roomes.map((room) => (
                    <option key={room._id}>{room.value}</option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="label-text font-lg ">Bathroom</span>
                </label>
                <select
                  name="bathroom"
                  id=""
                  placeholder="select"
                  className={getInputClasses(!!phoneError)}
                >
                  {roomes.map((room) => (
                    <option className="p-5" key={room._id}>
                      {room.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`px-4 py-2 mt-5 uppercase ${
                isSubmitDisabled ? `bg-lime-400` : "bg-primary-c"
              } bg-primary-c text-white rounded`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
          <div className="md:flex space-y-5 md:space-y-0 items-center justify-center gap-10 mt-5">
            <div className="flex gap-1 items-center justify-center">
              <img src="../../../public/verify.svg" alt="" />
              <p>Trusted Cleaners</p>
            </div>
            <div className="">
              <p className="text-center">5 Star Rated Service</p>
              <div className="flex justify-center md:hidden">
                <div className="flex items-center">
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                  <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <img src="../../../public/verify.svg" alt="" />
              <p>Full Satisfaction</p>
            </div>
          </div>
          <div className="md:flex justify-center items-center hidden">
            <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
            <TiStarFullOutline className="text-amber-500"></TiStarFullOutline>
          </div>
          <Toaster></Toaster>
        </form>
      </div>
    </div>
  );
};

export default Form;
