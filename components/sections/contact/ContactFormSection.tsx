"use client";
import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  subject: string;
  message: string;
}

const ContactFormSection: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API route call)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-cover bg-center bg-no-repeat flex items-center min-h-screen lg:h-[100vh]"
      style={{ backgroundImage: "url('/contact/contacts.webp')" }}
    >
      <div className="w-full fix grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-6 flex flex-col justify-between text-white h-full space-y-12 lg:space-y-16">
          <div>
            <h2 className="text-[30px] sm:text-[40px] leading-[110%] font-bold tracking-tight mb-10 md:mb-12">
              Reach us
            </h2>

            {/* Quick Contact Info Row */}
            <div className="flex flex-col lg:mt-25 sm:flex-row sm:items-center gap-6 sm:gap-8 mb-6 text-sm sm:text-base">
              <a
                href="mailto:contact@webuildspace.in"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <FiMail className="text-lg flex-shrink-0" />
                <span className="text-[18px]">contact@webuildspace.in</span>
              </a>
              <a
                href="tel:+919167020020"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <FiPhone className="text-lg flex-shrink-0" />
                <span className="text-[18px]">91670 20020</span>
              </a>
            </div>

            {/* Address Row */}
            <div className="flex items-center gap-2 text-xs sm:text-sm max-w-xl text-white/90 leading-relaxed">
              <FiMapPin className="text-lg mt-0.5 flex-shrink-0" />
              <p className="text-[16px]">
                Buildspace Development Management Pvt Ltd - 1007, 10th Floor,
                Mayuresh Square, Sector 17, CBD Belapur, Navi Mumbai,
                Maharashtra 400614, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="lg:text-[30px] text-[20px] leading-[130%] tracking-wide">
              Follow us on
            </h3>
            <div className="flex items-center gap-6 gap-x-15 text-xl sm:text-2xl">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform text-white/90 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform text-white/90 hover:text-white"
              >
                <SlSocialYoutube />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="hover:scale-110 transition-transform text-white/90 hover:text-white"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-xl bg-white rounded-xl  p-6 sm:p-8 md:p-[50px]">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)]  px-4 py-3 text-sm focus:outline-none focus:border-red-400 text-gray-800 placeholder-gray-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)]  px-4 py-3 text-sm focus:outline-none focus:border-red-400 text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)]  px-4 py-3 text-sm focus:outline-none focus:border-red-400 text-gray-800 placeholder-gray-400 transition-colors"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)]  px-4 py-3 text-sm focus:outline-none focus:border-red-400 text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Row 3: Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)]  px-4 py-3 text-sm focus:outline-none focus:border-red-400 text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)]  px-4 py-3 text-sm focus:outline-none focus:border-red-400 text-gray-800 placeholder-gray-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button Container */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-[linear-gradient(90deg,#BF584F_0%,#F6736A_100%)] hover:bg-[#b84d46] text-white font-medium text-sm ps-6 pr-4 py-[15px]  shadow transition-all duration-200 group"
                >
                  <span>Submit</span>
                  <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
