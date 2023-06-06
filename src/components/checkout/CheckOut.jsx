import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { validEmail } from "../../helper/regex";
const CheckOut = () => {
  function onFormSubmit(event) {
    toast.success(
      "we are happy to have you our good customer, please buy more items"
    );
    // We must call the `event.preventDefault()` method otherwise our page
    // will reload and we usually don't want that with a SPA
    event.preventDefault();
    // We can now use our states as a payload in an API call
    const body = {
      firstName,
      address,
      email,
      creditCard,
      inputError,
      emailErr,
    };
    console.log(body);
  }
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [inputError, setInputError] = useState();
  const [emailErr, setEmailErr] = useState();
  // Function that gets called whenever a user tries to change
  // the input value
  function onNameChange(event) {
    setFirstName(event.target.value);
  }
  function onChangeAddress(event) {
    setAddress(event.target.value);
  }

  function onChangeEmail(event) {
    const validEmail =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    setEmail(event.target.value);
    if (validEmail.test(email)) {
      setEmailErr("Email is Valid");
    } else if (!validEmail.test(email) && email === "") {
      setEmailErr("Your email is invalid");
    } else {
      setEmailErr("");
    }
  }

  function onChangeCard(event) {
    const reGexNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    setCreditCard(event.target.value);
    if (reGexNumber.test(creditCard)) {
      setInputError("Input card is valid ");
    } else if (!reGexNumber.test(creditCard) && creditCard === "") {
      setInputError("Your card is invalid");
    } else {
      setInputError("");
    }
  }

  return (
    <div className=" container w-full mx-auto my-10 p-10 font-pins">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col max-w-md container mx-auto"
      >
        <input
          className="border border-primary p-2 m-2 rounded-md "
          value={firstName}
          placeholder="Your full name"
          required
          // Add our `onFirsNameChange` function to the `onChange` event
          onChange={onNameChange}
        />
        <input
          className="border border-primary p-2 m-2 rounded-md "
          value={address}
          placeholder="Your home address"
          onChange={onChangeAddress}
          required
        />
        <input
          className="border border-primary p-2 m-2 rounded-md "
          value={email}
          type="email"
          placeholder="Your valid email"
          onChange={onChangeEmail}
          required
        />
        {emailErr && <p className="text-blue-500"> {emailErr} </p>}

        <input
          className="border border-primary p-2 m-2 rounded-md "
          value={creditCard}
          placeholder="xxxx xxxx xxxx"
          onChange={onChangeCard}
          required
        />
        {inputError && <p className="text-blue-500">{inputError}</p>}

        <div className="border-b-2 my-5 py-5 w-full flex justify-center item-center ">
          <input
            type="submit"
            id="submit"
            className=" lg:text-md md:text-md block  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary my-3"
          />
        </div>
      </form>
      <ToastContainer theme="dark" />
      <div className=" container max-w-md mx-auto ">
        <Link
          to="/product"
          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
