 // slider//
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/images/people-sec-1.png";
import img2 from "../../assets/images/people-sec-2.png";
import img3 from "../../assets/images/people-sec-3.png";
import img4 from "../../assets/images/people-sec-4.png";
import img5 from "../../assets/images/people-sec-5.png";
import img6 from "../../assets/images/people-sec-6.png";

import PrevIcon from "../../assets/images/prev-arrow.png";
import NextIcon from "../../assets/images/next.png";

export default function PeopleSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const data = [
    { img: img1, title: "Save time from manual tracking", desc: "By tracking in seconds" },
    { img: img2, title: "Add transactions on the go", desc: "With easy-to-use features" },
    { img: img3, title: "All your finances in one place", desc: "One-stop view of cash flow" },
    { img: img4, title: "Track expenses easily", desc: "Stay on top of spending" },
    { img: img5, title: "Smart budget insights", desc: "Make better decisions" },
    { img: img6, title: "Secure & reliable", desc: "Your data is safe" },
  ];

  return (
    <section className="section-slider py-16 md:py-20 bg-[#f5f5f5] overflow-hidden">

      {/* TITLE */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="lg:text-6xl md:text-3xl font-extrabold mb-8 md:mb-12">
          Why people <span className="text-purple-600">loved it?</span>
        </h2>
      </div>

      {/* SLIDER FULL WIDTH (IMPORTANT) */}
      <div className="w-full overflow-visible">

        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={false}
          speed={600}
          grabCursor={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="overflow-visible"
        >
          {data.map((item, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] sm:!w-[320px] md:!w-[450px] lg:!w-[520px]"
            >
              <div className="relative w-full h-[487px] rounded-[24px] overflow-hidden">

                <Image
                  src={item.img}
                  alt="card"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-6 left-6 bg-white px-6 py-5 rounded-[16px] shadow border border-purple-500 w-[85%]">

                  <h4 className="text-[18px] font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.desc}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS (center align container) */}
        <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-10 px-4 md:px-6">

          <button ref={prevRef}>
            <Image src={PrevIcon} alt="prev" width={40} height={40} />
          </button>

          <button ref={nextRef}>
            <Image src={NextIcon} alt="next" width={40} height={40} />
          </button>

        </div>

      </div>
    </section>
  );
}
// action//
"use client";

import { useState } from "react";
import Image from "next/image";

import ActionImage from "../../assets/images/service-head.png";
import PlayIcon from "../../assets/images/play-icon.png";

export default function ActionSection() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);

  const handleClick = () => {
    setPulse(true);
    setOpen(true);

    setTimeout(() => {
      setPulse(false);
    }, 400); // ring duration
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">

      {/* TITLE */}
      <div className="max-w-[1200px] mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Spendable <span className="text-purple-600">in action</span>
        </h2>
        <p className="text-gray-500 mt-2">How it works for you:</p>
      </div>

      {/* IMAGE */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative rounded-[24px] overflow-hidden">

          {/* IMAGE */}
          <Image
            src={ActionImage}
            alt="action"
            className="w-full h-auto object-cover"
            priority
          />

          {/* PLAY BUTTON */}
      <button
  onClick={() => setOpen(true)}
  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
>
  {/* PULSE RING */}
  <span className="absolute w-[140px] h-[140px] rounded-full bg-purple-500/30 scale-0 group-hover:scale-100 transition duration-300"></span>

  {/* PLAY BUTTON */}
  <div className="relative bg-white rounded-full p-6 shadow-xl">
    <Image src={PlayIcon} alt="play" width={80} height={80} />
  </div>
</button>

        </div>
      </div>

      {/* POPUP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] md:w-[800px] bg-black rounded-xl overflow-hidden"
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 bg-white w-9 h-9 flex items-center justify-center"
            >
              
            </button>

            {/* VIDEO */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6bA3NmFsxEs?autoplay=1"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
//action ke nich vala section//
"use client";

import Image from "next/image";

const AskAISection = () => {
  return (
    <section className="w-full bg-[#140A3C] py-[120px]">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* HEADING */}
        <h2 className="text-[42px] md:text-[60px] font-extrabold leading-[1.1] text-white">
          <span className="text-[#FFD54A]">Ask AI</span>{" "}
          to add expenses!
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[18px] font-medium text-[#CFCFE8] max-w-[650px] leading-[28px]">
          AI-driven voice tracking for enhanced convenience and accessibility,
          particularly beneficial for individuals with disabilities.
        </p>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-[520px_1fr] gap-[80px] items-start">
          
          {/* LEFT */}
          <div className="text-white max-w-[520px]">
            
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <Image
                  src="/assets/icons/right-tick.png"
                  alt="tick"
                  width={22}
                  height={22}
                  className="mt-[5px]"
                />
                <p className="text-[18px] font-semibold leading-[28px] text-[#E6E6F0]">
                  Simply ‘Tap and Speak’ and let AI calculate and add your expenses.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/assets/icons/right-tick.png"
                  alt="tick"
                  width={22}
                  height={22}
                  className="mt-[5px]"
                />
                <p className="text-[18px] font-semibold leading-[28px] text-[#E6E6F0]">
                  Speak in your native tongue; our app supports multiple languages for voice tracking.
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <a
              href="#"
              className="mt-12 relative w-[260px] h-[64px] flex items-center justify-center rounded-[16px] overflow-hidden"
            >
              <Image
                src="/assets/images/as-back.png"
                alt="bg"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2A1E5C]/80"></div>

              <span className="relative text-white text-[16px] font-medium">
                Watch Video
              </span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative">
            
            {/* Stars */}
            <div className="absolute top-[0px] right-[60px] text-white text-xl">✦</div>
            <div className="absolute top-[60px] left-[20px] text-white text-sm">✦</div>
            <div className="absolute bottom-[60px] right-[20px] text-white text-sm">✦</div>

            {/* YELLOW CARD */}
            <div className="bg-[#F4C542] pb-30 rounded-[20px] px-12 pt-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] relative z-10 w-[320px]">
              <p className="text-[#0B0B0B] text-[25px] font-bold leading-[34px]">
                Yesterday I bought <br />
                5 chocolates <br />
                for $2.5 each
              </p>
            </div>

            {/* MIC ANIMATION */}
            {/* MIC ANIMATION (FINAL CLEAN VERSION) */}
<div className="absolute top-[140px] w-full flex justify-center bg-white">
  
  <div className="relative flex items-center justify-center z-20 !bg-white rounded-full" >
    {/* Outer Glow Ring */}
    <span className="absolute !bg-white w-[150px] h-[150px] rounded-full bg-white/10 animate-pulse-slow"></span>

    {/* Inner Glow Ring */}
    <span className="absolute !bg-white w-[120px] h-[120px] rounded-full bg-white/20 animate-pulse-delay"></span>

    {/* Solid White Circle (MAIN BG) */}
    <div className="w-[90px] h-[90px] !bg-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.25)]">

      {/* Your Mic Image */}
      <Image
        src="/assets/images/as-mike.png"   // ✅ YOUR IMAGE
        alt="mic"
        width={36}
        height={36}
        className="object-contain"
      />

    </div>

  </div>
</div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AskAISection;
// 

/* ✅ Animation utility */

.avatar-animate {
    animation: floatPulse ease-in-out infinite;
    will-change: transform;
}

@keyframes pulseRing {
    0% {
        transform: scale(0.8);
        opacity: 0.6;
    }
    70% {
        transform: scale(1.5);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

.animate-pulse-slow {
    animation: pulseRing 2s infinite;
}

.animate-pulse-delay {
    animation: pulseRing 2s infinite;
    animation-delay: 0.6s;
}
//
