"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Swiper2() {

  const reviews = [
    {
      text: "I’ve been using Spendable for a few months, and it’s been a game changer for managing my budget.",
      name: "Gifty",
    },
    {
      text: "Amazing app! Very easy to manage expenses and track savings.",
      name: "Rahul",
    },
    {
      text: "Very clean UI and smooth experience. Highly recommended!",
      name: "Priya",
    },
    {
      text: "Best budgeting app I’ve used so far. Super helpful features!",
      name: "Amit",
    },
  ];

  return (
    <section className="customer-section">
      <div className="cs-container">

        {/* Heading */}
        <div className="cs-heading">
          <h2>
            Our <span>user’s words</span> say it all!
          </h2>

          <div className="cs-img flex">
            <img src="/images/user1.png" alt="" />
            <img src="/images/user2.png" alt="" />
          </div>
        </div>

        {/* Rating */}
        <div className="cs-rating">
          <span>4.7 ★★★★★ Ratings</span>
        </div>

        {/* Custom Arrows */}
        <div className="cs-arrows">
          <div className="prev-btn"><FaArrowLeft /></div>
          <div className="next-btn"><FaArrowRight /></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="our_user_Swiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cs-card">
                <p>“ {item.text} ”</p>
                <h4>– {item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
@import "tailwindcss";

@layer components {

  .customer-section {
    @apply py-[60px] bg-[#f7f7f7];
  }

  .cs-container {
    @apply max-w-[1100px] mx-auto px-[15px];
  }

  .cs-heading {
    @apply flex justify-between items-center flex-wrap gap-4;
  }

  .cs-heading h2 {
    @apply text-[40px] font-bold;
  }

  .cs-heading span {
    @apply text-[#6c4cff];
  }

  .cs-img img {
    @apply w-[45px] h-[45px] rounded-full ml-[10px];
  }

  .cs-rating {
    @apply my-[15px] mb-[20px] font-semibold;
  }

  .cs-card {
    @apply p-[40px] rounded-[20px];
    background: linear-gradient(135deg, #8fd3a9, #7fd1c6);
  }

  .cs-card p {
    @apply text-[18px] leading-[1.6];
  }

  .cs-card h4 {
    @apply text-right mt-[20px];
  }

  /* 🔥 Custom arrows */
  .cs-arrows {
    @apply flex justify-between items-center mb-[20px];
  }

  .prev-btn,
  .next-btn {
    @apply w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white shadow cursor-pointer transition;
  }

  .prev-btn:hover,
  .next-btn:hover {
    @apply bg-[#6c4cff] text-white;
  }

  /* 📱 Responsive */
  @media (max-width: 768px) {

    .cs-heading {
      @apply flex-col items-start;
    }

    .cs-heading h2 {
      @apply text-[26px];
    }

    .cs-card {
      @apply p-[25px];
    }

    .cs-card p {
      @apply text-[14px];
    }

    .cs-arrows {
      @apply justify-between;
    }
  }

}
////////////////////////////////////
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Navigation } from "swiper/modules";

/* ✅ arrow images import */
import leftArrow from "@/assets/images/left.png";
import rightArrow from "@/assets/images/right.png";

export default function AppSlider() {
  return (
    <section className="app-section">
      <div className="cs-container">

        {/* Heading */}
        <h2 className="app-heading">
          Download the <span>FREE</span> App Now 🚀
        </h2>

        {/* Custom Arrows */}
        <div className="app-arrows">
          <img src={leftArrow.src} className="prev-btn" />
          <img src={rightArrow.src} className="next-btn" />
        </div>

        {/* Slider */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[EffectCoverflow, Navigation]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="app-swiper"
        >
          <SwiperSlide>
            <img src="/images/app1.png" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/app2.png" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/app3.png" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/app1.png" />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
}
@import "tailwindcss";

@layer components {

  .app-section {
    @apply py-[80px] bg-white text-center;
  }

  .cs-container {
    @apply max-w-[1100px] mx-auto px-[15px];
  }

  .app-heading {
    @apply text-[42px] font-bold mb-[40px];
  }

  .app-heading span {
    @apply text-red-500;
  }

  /* 🔥 arrows */
  .app-arrows {
    @apply flex justify-between items-center mb-[20px];
  }

  .app-arrows img {
    @apply w-[30px] cursor-pointer;
  }

  /* slider */
  .app-swiper {
    @apply w-full;
  }

  .app-swiper img {
    @apply w-[260px] mx-auto transition duration-300;
  }

  /* active center zoom */
  .swiper-slide-active img {
    @apply scale-110;
  }

  /* 📱 tablet */
  @media (max-width: 1024px) {
    .app-heading {
      @apply text-[32px];
    }

    .app-swiper img {
      @apply w-[220px];
    }
  }

  /* 📱 mobile */
  @media (max-width: 768px) {

    .app-heading {
      @apply text-[24px];
    }

    .app-arrows {
      @apply px-[20px];
    }

    .app-swiper img {
      @apply w-[180px];
    }
  }

}
/////////////////////////
"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 19000;
    const duration = 2000; // 2 sec
    const incrementTime = 20;

    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats-section">
      <div className="cs-container text-center">

        {/* Counter */}
        <h2 className="stats-number">
          {count.toLocaleString()}+
        </h2>

        <p className="stats-text">
          <strong>19K+</strong>{" "}
          <span>People daily use</span> Spendable <br />
          with more joining everyday!
        </p>

        <p className="stats-available">Available on</p>

        <div className="stats-buttons">
          <img src="/images/google-play.png" />
          <img src="/images/app-store.png" />
        </div>

      </div>
    </section>
  );
}
@import "tailwindcss";

@layer components {

  .stats-section {
    @apply py-[80px] bg-[#f7f7f7];
  }

  .cs-container {
    @apply max-w-[900px] mx-auto px-[15px] text-center;
  }

  /* 🔥 BIG NUMBER (gradient) */
  .stats-number {
    @apply text-[80px] font-bold leading-none;
    background: linear-gradient(90deg, #5b2eff, #00c896);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stats-number span {
    @apply text-[#00c896];
  }

  /* ✍️ TEXT */
  .stats-text {
    @apply text-[20px] mt-[20px] leading-[1.6] text-gray-800;
  }

  .stats-text span {
    @apply text-[#5b2eff] font-semibold;
  }

  /* 📦 Available text */
  .stats-available {
    @apply mt-[30px] text-gray-500;
  }

  /* 🛒 Store buttons */
  .stats-buttons {
    @apply flex justify-center gap-[20px] mt-[20px] flex-wrap;
  }

  .stats-buttons img {
    @apply w-[160px] cursor-pointer transition duration-300;
  }

  .stats-buttons img:hover {
    @apply scale-105;
  }

  /* 📱 Responsive */
  @media (max-width: 768px) {
    .stats-number {
      @apply text-[50px];
    }

    .stats-text {
      @apply text-[16px];
    }

    .stats-buttons img {
      @apply w-[130px];
    }
  }

}
//////////////////////////
"use client";

import { useEffect, useState } from "react";

/* ✅ images import */
import f1 from "@/assets/images/f1.png";
import f2 from "@/assets/images/f2.png";
import f3 from "@/assets/images/f3.png";
import f4 from "@/assets/images/f4.png";
import f5 from "@/assets/images/f5.png";
import f6 from "@/assets/images/f6.png";

export default function FeatureStats() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 2;

      setCount1(Math.min(i, 100));
      setCount2(Math.min(i, 100));
      setCount3(Math.min(i / 10, 10));

      if (i >= 100) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feature-section">
      <div className="cs-container text-center">

        <h2 className="feature-heading">
          Available for iOS & Android with amazing personalization features
        </h2>

        <p className="feature-sub">
          Spendable is an engaging and efficient solution for users to manage their finances across platforms.
        </p>

        {/* Counters */}
        <div className="feature-counter">
          <div>
            <h3>{count1}%</h3>
            <p>Safe & Secure</p>
          </div>

          <div>
            <h3>{count2}+</h3>
            <p>Currency Support</p>
          </div>

          <div>
            <h3>{count3}+</h3>
            <p>Languages Support</p>
          </div>
        </div>

        {/* 🔥 Images Grid */}
        <div className="feature-grid">

          <img src={f1.src} className="img-1" />
          <img src={f2.src} className="img-2" />
          <img src={f3.src} className="img-3" />
          <img src={f4.src} className="img-4" />
          <img src={f5.src} className="img-5" />
          <img src={f6.src} className="img-6" />

        </div>

      </div>
    </section>
  );
}@import "tailwindcss";

@layer components {

  .feature-section {
    @apply py-[100px] text-white relative overflow-hidden;
    background: linear-gradient(135deg, #5b2eff, #8b2cff);
  }

  .cs-container {
    @apply max-w-[1100px] mx-auto px-[15px];
  }

  /* Heading */
  .feature-heading {
    @apply text-[32px] font-bold leading-tight;
  }

  .feature-sub {
    @apply text-[14px] mt-[10px] opacity-80 max-w-[600px] mx-auto;
  }

  /* Counters */
  .feature-counter {
    @apply flex justify-center gap-[60px] mt-[40px] flex-wrap;
  }

  .feature-counter h3 {
    @apply text-[40px] font-bold;
  }

  .feature-counter p {
    @apply text-[14px] opacity-80;
  }

  /* 🔥 GRID (DESKTOP default) */
  .feature-grid {
    @apply grid grid-cols-3 gap-[20px] mt-[60px];
  }

  .feature-grid img {
    @apply w-full rounded-[16px] transition duration-300;
  }

  /* 🎯 uneven layout (desktop feel) */
  .img-1 { @apply col-span-2; }
  .img-2 { @apply col-span-1; }
  .img-3 { @apply col-span-1; }
  .img-4 { @apply col-span-1; }
  .img-5 { @apply col-span-1; }
  .img-6 { @apply col-span-2; }

  /* hover */
  .feature-grid img:hover {
    @apply scale-105;
  }

  /* 🔥 Background shapes */
  .feature-section::before {
    content: "";
    @apply absolute w-[300px] h-[300px] bg-white/10 rounded-full top-[-50px] left-[-50px];
  }

  .feature-section::after {
    content: "";
    @apply absolute w-[250px] h-[250px] bg-white/10 rounded-full bottom-[-50px] right-[-50px];
  }

  /* 📱 TABLET */
  @media (max-width: 1024px) {
    .feature-heading {
      @apply text-[26px];
    }

    .feature-counter {
      @apply gap-[30px];
    }

    .feature-counter h3 {
      @apply text-[30px];
    }

    .feature-grid {
      @apply grid-cols-2;
    }

    .img-1,
    .img-2,
    .img-3,
    .img-4,
    .img-5,
    .img-6 {
      @apply col-span-1;
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    .feature-section {
      @apply py-[60px];
    }

    .feature-heading {
      @apply text-[20px];
    }

    .feature-sub {
      @apply text-[13px];
    }

    .feature-counter {
      @apply flex-col items-center gap-[20px];
    }

    .feature-counter h3 {
      @apply text-[26px];
    }

    .feature-grid {
      @apply grid-cols-1;
    }

    .feature-grid img {
      @apply w-full;
    }
  }

}
