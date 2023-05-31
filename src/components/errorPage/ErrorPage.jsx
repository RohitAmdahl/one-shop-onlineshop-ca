import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="font-pins container mx-auto text-center my-10 py-10">
        <h1 className="text-4xl font-bold">404</h1>
        <div>
          <p className="text-red-400 p-4 font-bold">
            You come to this page! how ?{" "}
          </p>
          <p className=" font-bold text-2xl">how do you mage to come here?</p>
        </div>
      </div>
      <div className=" container mx-auto max-w-xl border-t-2  m-12">
        <div className="flex justify-center py-10">
          <Link
            to="/"
            className="block w-64 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 hover:bg-yellow-300 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary m-3 shadow-lg "
          >
            Click Here To Home Page!
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
