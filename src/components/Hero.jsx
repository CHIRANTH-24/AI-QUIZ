"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Define assets with public paths
const assets = {
  feature: '/assets/feature.png',
  logo: '/assets/logo512.png',
  image: '/assets/image.png',
  testimonial: '/assets/testimonial.png',
  science: '/assets/science.png',
  math: '/assets/math.png',
  english: '/assets/english.png',
  economics: '/assets/economics.png',
  social: '/assets/social.png',
  computer: '/assets/computer.png',
  heroimagedark: '/assets/heroimagedark.png',
  heroimage: '/assets/heroimage.png'
};

export default function Hero() {
  const heroRef = useRef(null);

  const SubjectBadge = ({ src, label, borderColor, bgColor, reversed = false }) => {
    const content = (
      <>
        <Image
          src={src}
          alt={label}
          width={64}
          height={64}
          className={`rounded-full object-cover object-left-bottom border-[5px]`}
          style={{ borderColor }}
        />
        <div className={`w-min px-3 py-1 relative ${reversed ? 'left-2' : 'right-2'} text-black rounded-full text-sm font-bold`}
          style={{ backgroundColor: bgColor }}>
          {label}
        </div>
      </>
    );

    return (
      <div className='flex items-center'>
        {reversed ? content : content}
      </div>
    );
  };

  return (
    <div ref={heroRef} className="relative pt-12 pb-72 px-4 max-w-7xl mx-auto text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:bg-none transition-colors duration-300">
      <div className='absolute z-20 pt-20 top-12 left-0 h-full w-full flex justify-between px-4'>
        <div className='flex flex-col items-center gap-8 max-md:hidden'>
          <SubjectBadge src={assets.science} label="Science" borderColor="#22c55e" bgColor="#4ade80" />
          <div className='relative left-8'>
            <SubjectBadge src={assets.math} label="Mathematics" borderColor="#eab308" bgColor="#fde047" reversed />
          </div>
          <SubjectBadge src={assets.economics} label="Economics" borderColor="#3b82f6" bgColor="#60a5fa" />
        </div>

        <div className='flex flex-col-reverse self-start gap-8 items-center max-md:hidden'>
          <SubjectBadge src={assets.computer} label="Computer" borderColor="#22c55e" bgColor="#4ade80" reversed />
          <div className='relative right-8'>
            <SubjectBadge src={assets.english} label="English" borderColor="#ef4444" bgColor="#fecaca" />
          </div>
          <SubjectBadge src={assets.social} label="Social" borderColor="#3b82f6" bgColor="#60a5fa" reversed />
        </div>
      </div>

      <div className="mt-16">
        {/* <p className="hero-content text-xl mt-4 text-gray-700 dark:text-gray-300">
          Instant & Precise Assessment
        </p> */}

        <div className='md:hidden w-full flex gap-4 justify-center my-4 overflow-x-auto px-4'>
          {[assets.science, assets.math, assets.economics, assets.computer, assets.english, assets.social].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Subject ${index + 1}`}
              width={64}
              height={64}
              className="rounded-full object-cover object-left-bottom border-[5px] flex-shrink-0"
              style={{ borderColor: index % 2 === 0 ? "#22c55e" : "#3b82f6" }}
            />
          ))}
        </div>

        <div className="relative h-[300px] w-full">
          <Image
            src={assets.feature}
            alt="Feature"
            fill
            className="mx-auto rounded-xl shadow-xl dark:shadow-blue-500/10 transition-all duration-300 block dark:hidden border-2  object-contain"
           
          />
          <Image
            src={assets.image}
            alt="Feature Dark"
            fill
            className="mx-auto relative z-10 rounded-xl shadow-xl dark:shadow-blue-500/10 transition-all duration-300 hidden dark:block border-2  object-contain"
            
          />
         
        </div>
      </div>

      <h1 className="hero-content mt-8 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        Your Smart Study Partner
      </h1>
      <p className="hero-content text-lg mb-8 text-gray-600 dark:text-gray-300">
        AI-driven revision with limitless practice and real-time grading
      </p>
      <div className="hero-content flex flex-col sm:flex-row items-center justify-center gap-4">
       <Link href="/dashboard">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
          Get Started
          <ArrowRight className="h-5 w-5" />
        </button>
        </Link>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 text-white rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
          Start Learning
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className='mt-12 flex items-center justify-center absolute left-[50%] translate-x-[-50%]'>
        <div className="relative h-[500px] min-w-[800px]">
          <Image
            src={assets.heroimagedark}
            alt="Hero Dark"
            fill
            className='rounded-xl border-blue-500 border-[5px] hidden dark:block object-cover'
            priority
          />
          <Image
            src={assets.heroimage}
            alt="Hero Light"
            fill
            className='rounded-xl border-blue-500 border-[5px] block dark:hidden object-cover'
            priority
          />
        </div>
      </div>
    </div>
  );
}