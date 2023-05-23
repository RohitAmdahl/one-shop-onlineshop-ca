import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="font-pins container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold">404</h1>
        <div>
          <p className="text-red-400 font-bold">You come to this page!</p>
          <p className=" font-bold text-2xl">how do you mage to come here?</p>
        </div>
      </div>
      <div className="container mx-auto text-center m-12">
        <Link
          to="/"
          className="bg-primary px-5 py-2 text-pink hover:bg-blue-600 hover:rounded-r-lg hover:text-white shadow-md"
        >
          Click Here To Home Page!
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
