import React, { FC } from "react";

const MapSection: FC = () => {
  // Safe URL-encoded query matching the exact pinned location in your image
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1d72.9529738!2d19.1950472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9ad1ac8c6f5%3A0x43ff058ee01f0fd9!2sCentrum%20Business%20Square!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section className="w-full py-8 fix">
      {/* Decorative Container Header (Optional, matching typical layouts) */}
      {/* <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          Our Location
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Find us at Wagle Estate near The Thane Club
        </p>
      </div> */}

      {/* Responsive Aspect Ratio Wrapper */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 aspect-[16/10] sm:aspect-[16/9] md:h-[450px] lg:h-[500px]">
        <iframe
          src={mapEmbedUrl}
          title="Centrum Business Square Map Location"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default MapSection;
