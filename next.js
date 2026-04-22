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
}//
