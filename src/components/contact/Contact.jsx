import React from "react";
import ValidForm from "../form/ValidForm";
const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.2682099722358!2d10.74988247714471!3d59.911095974901244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8a1c253d39%3A0x6d69efbe96e850d2!2sOslo%20Sentralstasjon!5e0!3m2!1sno!2sno!4v1684880755876!5m2!1sno!2sno";
const Contact = () => {
  return (
    <>
      <iframe
        title="map"
        className="w-full h-60 max-w-xl mx-auto py-5"
        src={map}
      ></iframe>
      <div className="container mx-auto max-w-lg">
        <ValidForm />
      </div>
    </>
  );
};

export default Contact;
