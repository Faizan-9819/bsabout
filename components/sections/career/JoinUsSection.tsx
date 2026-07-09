// "use client";
// import React, { useState, ChangeEvent, FormEvent, FC, useRef } from "react";
// import { FiArrowRight, FiUpload } from "react-icons/fi";

// interface JoinUsFormData {
//   name: string;
//   email: string;
//   phone: string;
//   companyName: string;
//   subject: string;
//   message: string;
// }

// const JoinUsSection: FC = () => {
//   const [formData, setFormData] = useState<JoinUsFormData>({
//     name: "",
//     email: "",
//     phone: "",
//     companyName: "",
//     subject: "",
//     message: "",
//   });
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedFile(e.target.files[0]);
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Complete payload orchestration goes here
//     console.log("Submission Payload:", { ...formData, cvFile: selectedFile });
//   };

//   return (
//     <section
//       className="relative w-full min-h-screen bg-cover relative bg-center bg-no-repeat flex items-center py-12 lg:py-0"
//       style={{ backgroundImage: "url('/career/joinusbg.jpg')" }}
//     >
//       {/* Container wrapper using flex layout exclusively */}
//       <div className="w-full fix flex flex-col-reverse lg:flex-row items-center lg:gap-8">
//         {/* Left Card: Dynamic Interactive Form Container */}
//         <div className="w-full lg:w-[52%] flex justify-start z-10">
//           <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
//             {/* Header Element */}
//             <div className="mb-6 md:mb-8">
//               <h2 className="text-3xl sm:text-4xl font-bold text-[#cc5a53] tracking-tight relative display-inline pb-2">
//                 Join Us
//                 <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-[#cc5a53]/30" />
//               </h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Row 1: Name and Email */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
//                 />
//               </div>

//               {/* Row 2: Phone and Company Name */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
//                 />
//                 <input
//                   type="text"
//                   name="companyName"
//                   placeholder="Company Name"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
//                 />
//               </div>

//               {/* Row 3: Subject */}
//               <div className="w-full">
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
//                 />
//               </div>

//               {/* Row 4: Message */}
//               <div className="w-full">
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors resize-none"
//                 />
//               </div>

//               {/* Row 5: Action Row featuring upload link alongside Submit button */}
//               <div className="flex items-center justify-between pt-4 gap-4">
//                 {/* Hidden File input structure */}
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleFileChange}
//                   className="hidden"
//                   accept=".pdf,.doc,.docx"
//                 />

//                 <button
//                   type="button"
//                   onClick={triggerFileInput}
//                   className="text-xs sm:text-sm font-semibold text-[#cc5a53] hover:opacity-80 transition-opacity flex items-center gap-1.5"
//                 >
//                   <FiUpload className="text-sm" />
//                   <span>
//                     {selectedFile
//                       ? `✓ ${selectedFile.name.substring(0, 12)}...`
//                       : "+ Attach CV"}
//                   </span>
//                 </button>

//                 <button
//                   type="submit"
//                   className="flex items-center gap-3 bg-[linear-gradient(90deg,#BF584F_0%,#F6736A_100%)] text-white font-medium text-sm px-6 py-3 rounded shadow-md transition-all duration-200 hover:brightness-105 group"
//                 >
//                   <span>Submit</span>
//                   <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="absolute top-80 left-[300%]">
//           <img
//             src="/career/joinus.png"
//             alt="Professional team welcoming corporate candidates"
//             className="w-full max-h-[400px] lg:max-h-[550px] object-contain object-bottom select-none pointer-events-none vertical-bottom block"
//           />
//         </div>

//         {/* Right Card: Transparent Cutout Character Profile Container */}
//         <div className="w-full lg:w-[48%] flex items-center lg:items-end justify-center lg:hidden lg:h-full self-end lg:self-stretch">
//           <div className="w-full max-w-md lg:max-w-full relative flex items-end justify-center aspect-[4/3] lg:aspect-auto lg:h-[550px]">
//             <img
//               src="/career/joinus.png"
//               alt="Professional team welcoming corporate candidates"
//               className="w-full max-h-[400px] lg:max-h-[550px] object-contain object-bottom select-none pointer-events-none vertical-bottom block"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinUsSection;

"use client";
import React, { useState, ChangeEvent, FormEvent, FC, useRef } from "react";
import { FiArrowRight, FiUpload } from "react-icons/fi";

interface JoinUsFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  subject: string;
  message: string;
}

const JoinUsSection: FC = () => {
  const [formData, setFormData] = useState<JoinUsFormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submission Payload:", { ...formData, cvFile: selectedFile });
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center py-12 lg:py-0 overflow-hidden"
      style={{ backgroundImage: "url('/career/joinusbg.jpg')" }}
    >
      {/* Container wrapper using flex layout exclusively */}
      <div className="fix flex flex-col-reverse lg:flex-row items-center lg:gap-8 relative min-h-screen lg:min-h-0 py-1 lg:py-24">
        {/* Left Card: Dynamic Interactive Form Container */}
        <div className="w-full lg:w-[55%] flex justify-start z-10">
          <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
            {/* Header Element */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl lg:text-[56px] font-semibold bg-[linear-gradient(90deg,#BF584F_0%,#F6736A_100%)] bg-clip-text text-transparent tracking-tight relative inline-block pb-2">
                Join Us
                <span className="absolute bottom-0 left-0 w-50 h-[2px] bg-[#cc5a53]/30" />
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name and Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Row 2: Phone and Company Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full lg:w-1/2 bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Row 3: Subject */}
              <div className="w-full">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Row 4: Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f8f9fa] border border-[rgba(226,114,68,0.36)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#BF584F] text-gray-800 placeholder-gray-400 transition-colors resize-none"
                />
              </div>

              {/* Row 5: Action Row featuring upload link alongside Submit button */}
              <div className="flex items-center justify-between pt-4 gap-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />

                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="text-xs sm:text-[15.5px] font-semibold text-[#F56E6A] hover:opacity-80 transition-opacity flex items-center gap-1.5"
                >
                  <FiUpload className="text-sm" />
                  <span>
                    {selectedFile
                      ? `✓ ${selectedFile.name.substring(0, 12)}...`
                      : "+ Attach CV"}
                  </span>
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-3 bg-[linear-gradient(90deg,#BF584F_0%,#F6736A_100%)] text-white font-medium text-sm p-3 lg:px-6 py-2 rounded shadow-md transition-all duration-200 hover:brightness-105 group"
                >
                  <span>Submit</span>
                  <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile View: Dynamic Render Layout */}
        <div className="w-full lg:hidden flex items-center justify-center mt-8">
          <div className="w-full max-w-md aspect-4/4">
            <img
              src="/career/joinus.webp"
              alt="Professional team welcoming corporate candidates"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>

        {/* Desktop View: Perfectly Positioned Absolute Bottom Element */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-[45%] h-[85%] max-h-[650px]">
          <img
            src="/career/joinus.webp"
            alt="Professional team welcoming corporate candidates"
            className="w-full h-full object-contain object-bottom select-none pointer-events-none block"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
