import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TiStarFullOutline } from "react-icons/ti";

const Form = () => {
  const [services, setServices] = useState([
    { name: "End of Lease Cleaning", id: 1 },
    { name: "Deep Cleaning", id: 2 },
    { name: "Carpet Cleaning", id: 3 },
  ]);
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
    const quoteInfo = {
      name,
      email,
      phone,
      serviceRequried,
      bedroom,
      bathroom,
    };

    axios
      .post(`https://shine-home-server.vercel.app/quoteInfo`, quoteInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Successfully submited request");
        }
      });

    form.reset();
  };

  return (
    <div id="form" className="relative z-20 mb-20 px-5 lg:px-0">
      <div className="p-10 bg-white rounded-lg mb-20 -mt-20 z-20 shadow-lg max-w-4xl mx-auto">
        <form action="" className="" onSubmit={handleSubmit}>
          <p className="text-center font-bold lg:text-4xl text-3xl mb-6">
            Get a Free Quote
          </p>
          <p className="text-center text-sm mb-6  text-gray-500">
            Let us craft a tailored quote, providing you
            with an estimated cost that aligns perfectly with your needs.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
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
                  <span className="label-text font-bold flex justify-center items-center gap-1">
                    Service Requried
                  </span>
                </label>
                <select
                  name="serviceRequried"
                  id=""
                  className={getInputClasses(!!nameError)}
                >
                  {services.map((service) => (
                    <option key={service.id}>{service.name}</option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="label-text font-bold  flex justify-center items-center gap-1">
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
                  <span className="label-text font-bold ">Bathroom</span>
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
              className={`px-8 py-2 font-semibold cursor-pointer hover:bg-lime-600 transition-all mt-8 uppercase ${
                isSubmitDisabled ? `bg-lime-400` : "bg-primary-c"
              } bg-primary-c text-white rounded`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
