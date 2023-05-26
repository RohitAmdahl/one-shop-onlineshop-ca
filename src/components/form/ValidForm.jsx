import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../helper/Schema";
import submitForm from "../../helper/Schema";
const ValidForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className=" container max-w-lg mx-auto p-2">
      <div>
        <h1 className="text-2xl font-bold text-center py-3">Contact Us</h1>
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col justify-center"
      >
        <input
          className="border border-primary p-2 m-1 rounded-md "
          type="text"
          {...register("firstName")}
          placeholder="First Name..."
        />
        <p className=" text-red-400 font-pins font-medium ">
          {errors.firstName?.message}
        </p>
        <input
          className="border border-primary p-2 m-1 rounded-md "
          type="text"
          {...register("subject")}
          placeholder="Subject..."
        />
        <p className=" text-red-400 font-pins font-medium ">
          {errors.subject?.message}
        </p>
        <input
          className="border border-primary p-2 m-1 rounded-md "
          type="text"
          {...register("email")}
          placeholder="Email..."
        />
        <p className=" text-red-400 font-pins font-medium ">
          {errors.email?.message}
        </p>
        <textarea
          className="border border-primary p-2 m-1 mb-4 rounded-md "
          {...register("message")}
          placeholder="Write your message..."
          cols="30"
          rows="5"
        ></textarea>
        <p className=" text-red-400 font-pins font-medium ">
          {errors.message?.message}
        </p>
        <input
          type="submit"
          id="submit"
          className=" lg:text-md md:text-md block  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-primary my-3"
        />
      </form>
    </div>
  );
};

export default ValidForm;
