// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { useRef } from "react";
// import { FreeMode, Pagination, Autoplay } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Facebook, Twitter, Linkedin } from "lucide-react";

// const teamData = [
//   {
//     id: 1,
//     name: "Swapnil Ahammed Shishir",
//     occupation: "CEO & Founder",
//     // img: "https://randomuser.me/api/portraits/men/1.jpg",
//     bio: "4+ years of experience in Software development & project management",
//     socialIcons: [
//       { id: 1, icon: Facebook, link: "#" },
//       { id: 2, icon: Linkedin, link: "#" },
//       { id: 3, icon: Twitter, link: "#" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Shamima Akter",
//     occupation: "CTO",
//     // img: "https://randomuser.me/api/portraits/women/2.jpg",
//     bio: "Cloud infrastructure & scalable systems expert",
//     socialIcons: [
//       { id: 1, icon: Facebook, link: "#" },
//       { id: 2, icon: Linkedin, link: "#" },
//       { id: 3, icon: Twitter, link: "#" },
//     ],
//   },
// ];

// const Team = () => {
//   const swiperRef = useRef(null);

//   return (
//     <div className="bg-white py-16 md:py-24" id="team">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Meet Our <span className="text-[#1090af]">Team</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Passionate experts dedicated to delivering excellence
//           </p>
//           <div className="w-20 h-0.5 bg-[#1090af] mx-auto mt-4"></div>
//         </div>

//         {/* Navigation Buttons - Desktop */}
//         <div className="hidden md:flex justify-end gap-3 mb-6">
//           <button
//             className="bg-[#1090af] cursor-pointer rounded-full p-3 hover:bg-[#0e6b9e] transition-colors duration-300 shadow-md hover:shadow-lg"
//             onClick={() => swiperRef.current?.swiper.slidePrev()}
//           >
//             <FaArrowLeft className="text-white w-4 h-4" />
//           </button>
//           <button
//             className="bg-[#1090af] cursor-pointer rounded-full p-3 hover:bg-[#0e6b9e] transition-colors duration-300 shadow-md hover:shadow-lg"
//             onClick={() => swiperRef.current?.swiper.slideNext()}
//           >
//             <FaArrowRight className="text-white w-4 h-4" />
//           </button>
//         </div>

//         {/* Swiper Carousel */}
//         <Swiper
//           ref={swiperRef}
//           breakpoints={{
//             320: { slidesPerView: 1, spaceBetween: 20 },
//             640: { slidesPerView: 2, spaceBetween: 25 },
//             1024: { slidesPerView: 3, spaceBetween: 30 },
//             1280: { slidesPerView: 4, spaceBetween: 30 },
//           }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           freeMode={true}
//           pagination={{ clickable: true, dynamicBullets: true }}
//           modules={[FreeMode, Pagination, Autoplay]}
//           className="pb-12"
//           loop={true}
//         >
//           {teamData.map((member) => (
//             <SwiperSlide key={member.id}>
//               <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 text-center">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-[#1090af] font-medium mb-2">
//                     {member.occupation}
//                   </p>
//                   <p className="text-sm text-gray-500 mb-4">{member.bio}</p>

//                   {/* Social Icons */}
//                   <div className="flex items-center justify-center gap-3">
//                     {member.socialIcons.map((social) => {
//                       const Icon = social.icon;
//                       return (
//                         <a
//                           key={social.id}
//                           href={social.link}
//                           target={social.link !== "#" ? "_blank" : "_self"}
//                           rel={social.link !== "#" ? "noreferrer" : undefined}
//                           className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1090af] transition-all duration-300 group/link"
//                         >
//                           <Icon className="w-4 h-4 text-gray-600 group-hover/link:text-white" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Mobile Navigation Buttons */}
//         <div className="flex md:hidden justify-center gap-3 mt-4">
//           <button
//             className="bg-[#1090af] cursor-pointer rounded-full p-3 hover:bg-[#0e6b9e] transition-colors duration-300 shadow-md"
//             onClick={() => swiperRef.current?.swiper.slidePrev()}
//           >
//             <FaArrowLeft className="text-white w-4 h-4" />
//           </button>
//           <button
//             className="bg-[#1090af] cursor-pointer rounded-full p-3 hover:bg-[#0e6b9e] transition-colors duration-300 shadow-md"
//             onClick={() => swiperRef.current?.swiper.slideNext()}
//           >
//             <FaArrowRight className="text-white w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
