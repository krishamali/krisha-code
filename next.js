//hero.tsx//
"use client";

import Image from "next/image";
import BtnIcon1 from "../assets/images/btn-icon-1.png";
import BtnIcon2 from "../assets/images/btn-icon-2.png";
import HeroImg from "../assets/images/hero-image.png";
import Raring from "../assets/images/rating.png";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const typed = new Typed(textRef.current, {
      strings: ["savings!", "budget!", "clarity!"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="bg-gray-100 py-10 sm:py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h1 className="font-extrabold leading-tight
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl">

            <span className="block">Track money,</span>

            <span className="block">
              maximize{" "}
              <span className="text-purple-600 inline-block min-w-[120px] sm:min-w-[160px] md:min-w-[200px]">
                <span ref={textRef}></span>
              </span>
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg">
            <b>Track, budget, split money</b> on-the-go! <br />
            Everything you need, <strong>all in one app.</strong>
          </p>

          {/* Rating */}
          <div className="mt-4 inline-block border-2 border-purple-500 rounded-xl px-4 py-2 shadow">
            <p className="flex items-center justify-center md:justify-start gap-2">

              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-extrabold">
                4.7
              </span>

              <Image
                src={Raring}
                alt="star"
                width={80}
                height={16}
                className="w-[60px] sm:w-[70px] md:w-[80px]"
              />

              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-medium">
                (160 Reviews)
              </span>

            </p>
          </div>

          <p className="mt-4 text-sm sm:text-base md:text-lg">
            Download now.{" "}
            <span className="text-red-500 font-bold">It’s FREE!</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 mt-4">

            <Image
              src={BtnIcon1}
              alt="google play"
              width={170}
              height={61}
              className="w-[130px] sm:w-[150px] md:w-[170px] cursor-pointer hover:-translate-y-1 transition"
            />

            <Image
              src={BtnIcon2}
              alt="app store"
              width={170}
              height={61}
              className="w-[130px] sm:w-[150px] md:w-[170px] cursor-pointer hover:-translate-y-1 transition"
            />

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center h-[250px] sm:h-[350px] md:h-[500px]">
          <Image
            src={HeroImg}
            alt="hero"
            width={567}
            height={538}
            className="object-contain w-[220px] sm:w-[320px] md:w-[450px]"
          />
        </div>

      </div>
    </section>
  );
}

// faq//
"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I add unlimited expenses in Free app?",
    answer: "Yes, you can add unlimited income and expenses.",
  },
  {
    question: "What are the premium features of Spendable?",
    answer: "Check our Pricing page for details.",
  },
  {
    question: "I am from India, can I use Spendable for Free?",
    answer: "Yes, it's free worldwide.",
  },
  {
    question: "Is my data safe on Spendable?",
    answer: "Your data is 100% secure.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (openItems.includes(index)) {
      // close
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      // open
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-10">
          Frequently Asked Question
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <Item
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function Item({ item, isOpen, onClick }: any) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-300 pb-4">

      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-lg font-medium">{item.question}</p>

        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        ref={ref}
        style={{
          maxHeight: isOpen ? ref.current?.scrollHeight + "px" : "0px",
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="mt-3 text-gray-600 text-sm">
          {item.answer}
        </p>
      </div>

    </div>
  );
}

// //
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// IMAGES
import img1 from "../assets/images/people-sec-1.png";
import img2 from "../assets/images/people-sec-2.png";
import img3 from "../assets/images/people-sec-3.png";
import img4 from "../assets/images/people-sec-4.png";
import img5 from "../assets/images/people-sec-5.png";
import img6 from "../assets/images/people-sec-6.png";

import PrevIcon from "../assets/images/prev-arrow.png";
import NextIcon from "../assets/images/next.png";

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

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-16 md:py-20 bg-[#f5f5f5] overflow-hidden">

      {/* HEADING (centered container) */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
          Why people <span className="text-purple-600">loved it?</span>
        </h2>
      </div>

      {/* SLIDER FULL WIDTH */}
      <div className="pl-4 md:pl-10">

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="overflow-visible pr-10 md:pr-20"
        >
          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] sm:!w-[320px] md:!w-[450px] lg:!w-[520px]"
            >
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[487px] rounded-[20px] md:rounded-[24px] overflow-hidden">

                {/* IMAGE */}
                <Image
                  src={img}
                  alt="card"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 450px, 520px"
                  className="object-cover"
                />

                {/* TEXT BOX */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white px-4 md:px-6 py-3 md:py-5 rounded-[12px] md:rounded-[16px] shadow border border-purple-500 w-[85%]">

                  <h4 className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-snug">
                    Sample title
                  </h4>

                  <p className="text-[12px] md:text-sm text-gray-500 mt-1 md:mt-2">
                    Sample description
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS */}
        <div className="flex justify-between items-center mt-8 md:mt-10 px-4 md:px-10">

          <button ref={prevRef} className="cursor-pointer">
            <Image
              src={PrevIcon}
              alt="prev"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
          </button>

          <button ref={nextRef} className="cursor-pointer">
            <Image
              src={NextIcon}
              alt="next"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
          </button>

        </div>

      </div>
    </section>
  );
}
// userstastsbanner//
"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import avatar1 from "@/assets/images/avatar1.png";
import avatar2 from "@/assets/images/avatar2.png";
import avatar3 from "@/assets/images/avatar3.png";
import avatar4 from "@/assets/images/avatar4.png";
import avatar5 from "@/assets/images/avatar5.png";
import avatar6 from "@/assets/images/avatar6.png";

type Avatar = {
  id: number;
  src: StaticImageData;
  className: string;
};

const avatars: Avatar[] = [
  { id: 1, src: avatar1, className: "top-[140px] left-[60px]" },
  { id: 2, src: avatar2, className: "top-[60px] left-[200px]" },
  { id: 3, src: avatar3, className: "bottom-[60px] left-[300px]" },
  { id: 4, src: avatar4, className: "top-[80px] right-[300px]" },
  { id: 5, src: avatar5, className: "top-[180px] right-[180px]" },
  { id: 6, src: avatar6, className: "bottom-[80px] right-[60px]" },
];

const animationStyles = [
  { delay: "0s", duration: "3s" },
  { delay: "1.2s", duration: "3.6s" },
  { delay: "0.6s", duration: "2.8s" },
  { delay: "1.8s", duration: "3.2s" },
  { delay: "0.3s", duration: "3.8s" },
  { delay: "1.5s", duration: "2.9s" },
];

export default function UserStatsBanner() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = 10000;
    const duration = 1500;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <div
      ref={ref}
      className="relative isolate z-0 w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-[#5013ff] text-white"
    >
      {/* ✨ Sparkles */}
      <div className="absolute w-[6px] h-[22px] bg-yellow-400 rotate-45 top-[40px] left-1/2" />
      <div className="absolute w-[6px] h-[18px] bg-pink-400 rotate-12 top-[70px] right-[25%]" />
      <div className="absolute w-[6px] h-[18px] bg-green-400 rotate-75 bottom-[70px] left-[25%]" />
      <div className="absolute w-[6px] h-[22px] bg-blue-400 rotate-45 bottom-[40px] right-[25%]" />

      {/* 🎭 Avatars */}
      {avatars.map((avatar, index) => {
        const isSmall = avatar.id === 2 || avatar.id === 5;

        return (
          <div
            key={avatar.id}
            className={`absolute ${avatar.className} 
            ${isSmall ? "w-[45px] h-[45px]" : "w-[88px] h-[88px]"} 
            rounded-full overflow-hidden shadow-lg avatar-animate`}
            style={{
              animationDelay: animationStyles[index].delay,
              animationDuration: animationStyles[index].duration,
            }}
          >
            <Image
              src={avatar.src}
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {/* 📊 Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[100px] font-extrabold leading-none">
          {count.toLocaleString()}+
        </h1>

        <p className="mt-4 text-[25px] font-extrabold text-white/90 max-w-2xl mx-auto leading-relaxed">
          10,000+ People use Spendable daily,
          <br />
          with more joining every day!
        </p>
      </div>
    </div>
  );
}
// features//
"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Images
import phone from "@/assets/images/phone.png";

// Icons
import trackIcon from "@/assets/icons/track.png";
import chartIcon from "@/assets/icons/chart.png";
import walletIcon from "@/assets/icons/wallet.png";
import splitIcon from "@/assets/icons/split.png";
import dollarIcon from "@/assets/icons/dollar.png";

type Tab = {
  title: string;
  icon: StaticImageData;
  content: {
    title: string;
    desc: string;
  }[];
};

const tabs: Tab[] = [
  {
    title: "Track Expenses",
    icon: trackIcon,
    content: [
      { title: "Track All Your Transactions", desc: "Effortlessly track income, expenses, recurring payments, and shared finances." },
      { title: "Budget Insights", desc: "Stay informed about your available balance to prevent overspending." },
      { title: "All the Transactions at a Single Place", desc: "Gain insight into all transactions to review spending patterns." },
    ],
  },
  {
    title: "Categorization",
    icon: chartIcon,
    content: [
      { title: "Smart Categorization", desc: "Automatically categorize your expenses." },
      { title: "Better Insights", desc: "Understand your spending behavior." },
      { title: "Detailed Reports", desc: "Analyze data easily." },
    ],
  },
  {
    title: "Set Budget",
    icon: walletIcon,
    content: [
      { title: "Set Monthly Budget", desc: "Plan and control your expenses." },
      { title: "Alerts", desc: "Get notified when limits exceed." },
      { title: "Save More", desc: "Improve financial discipline." },
    ],
  },
  {
    title: "Split Money",
    icon: splitIcon,
    content: [
      { title: "Split Bills", desc: "Divide expenses easily." },
      { title: "Track Shared Expenses", desc: "Manage group spending." },
      { title: "Quick Settlements", desc: "Clear dues faster." },
    ],
  },
  {
    title: "Income Tracking",
    icon: dollarIcon,
    content: [
      { title: "Track Income", desc: "Keep record of all your earnings." },
      { title: "Multiple Sources", desc: "Track salary, business, and side income." },
      { title: "Growth Insights", desc: "Analyze how your income grows over time." },
    ],
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <section className="relative z-30 isolate w-full bg-[#f5f6fa] py-24 mt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-[44px] font-extrabold leading-tight text-black">
            All the{" "}
            <span className="text-[#5b2eff]">tracking features</span>
            <br />
            to spend wisely
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl text-[16px]">
            Single app for tracking every penny, maintaining precise expense records,
            and sticking to your budget
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-12 border-b border-gray-300 pb-3">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            const isHovered = hoveredTab === index;

            return (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative flex items-center gap-2 cursor-pointer pb-3"
              >
                <Image src={tab.icon} alt={tab.title} width={20} height={20} />

                <span className={`font-semibold text-[16px] ${isActive ? "text-[#5b2eff]" : "text-gray-700"}`}>
                  {tab.title}
                </span>

                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-[#5b2eff] transition-all duration-300
                  ${isActive ? "w-full" : isHovered ? "w-full" : "w-0"}`}
                />
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20 mt-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center relative">
            <div className="w-[260px] h-[520px] rounded-3xl overflow-hidden shadow-xl bg-black">
              <Image
                src={phone}
                alt="app preview"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="absolute top-[170px] left-[-40px] bg-white rounded-xl shadow-md px-5 py-3 border border-[#5b2eff] z-20">
              <div className="flex gap-6 text-sm font-semibold">
                <div>
                  <p className="text-gray-400">Income</p>
                  <p className="text-black">$5000</p>
                </div>
                <div>
                  <p className="text-gray-400">Expense</p>
                  <p className="text-black">$4200</p>
                </div>
                <div>
                  <p className="text-gray-400">Budget</p>
                  <p className="text-red-500">-$500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {tabs[activeTab].content.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1" />

                <div>
                  <h4 className="font-semibold text-[18px] text-black">{item.title}</h4>
                  <p className="text-gray-500 text-[15px] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}

            <button className="mt-4 bg-[#5b2eff] hover:bg-[#4a25d4] text-white px-6 py-3 rounded-lg font-medium transition">
              View All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
//  css
.typed-cursor {
  font-size: 40px;
  color: #7c3aed;
  margin-left: 4px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.swiper-slide {
  transform: scale(0.9);
  opacity: 0.6;
  transition: 0.3s;
}

.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}

@keyframes floatPulse {
    0%,
    100% {
        transform: translateY(0px) scale(1);
    }
    50% {
        transform: translateY(-10px) scale(1.12);
    }
}


/* ✅ Animation utility */

.avatar-animate {
    animation: floatPulse ease-in-out infinite;
    will-change: transform;
}//
