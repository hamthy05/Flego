import React from "react";

const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe
        title="Google Map" // Added title attribute
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112374282!2d144.9630579153168!3d-37.8141079797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1a3e4b0b1b!2s123%20Innovation%20Street%2C%20Tech%20City%2C%20TC%2012345!5e0!3m2!1sen!2sus!4v1614761234567!5m2!1sen!2sus"
        // width="500"
        // height="450"
        style={{ border: 0 }}
        allowFullScreen="" // Corrected property
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Corrected property
        className="w-full h-[700px]"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
