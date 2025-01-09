"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

// Define asset paths
const assets = {
  logo: '/assets/feature.png',
  userProfile: '/assets/logo512.png' // Replace with actual user profile image path
};

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Analytics', path: '/create' },
  
];

export default function Navbar() {
  // Check system preference for initial dark mode
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference and localStorage
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedPreference = localStorage.getItem('darkMode');
    const initialDarkMode = storedPreference !== null ? JSON.parse(storedPreference) : darkModePreference;

    setIsDark(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src={assets.logo}
                  alt="PrepePundit Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 40px) 100vw, 40px"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">PREP-PUNDIT AI</span>
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="relative h-8 w-8">
              <UserButton/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}