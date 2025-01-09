"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import "./App.css";
import Hero from "@/components/Hero";
import Feedback from "@/components/Feedback";
import FAQ from "@/components/FAQ";
import SnowEffect from "@/components/SnowEffect";
import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Navbar";


const features = [
  {
    category: "Input Type",
    items: [
      { name: "Long Text", description: "Generate questions from text materials", tag: "Pro/Business" },
      { name: "Topic", description: "Transform any subject into structured questions", tag: "Pro/Business" },
      { name: "Link", description: "Extract questions from web links", tag: "Pro/Business" },
      { name: "Media", description: "Create questions from images, audio, or video", tag: "Business" },
      { name: "PDF", description: "Turn PDFs into customized quizzes", tag: "Business" },
      { name: "YouTube URL", description: "Generate questions from YouTube videos", tag: "Pro/Business" },
    ],
  },
  {
    category: "Question Type",
    items: [
      { name: "Multiple Choice", description: "Create questions with clear options" },
      { name: "True or False", description: "Test quick judgment with simple statements" },
      { name: "Short Answer", description: "Encourage concise responses" },
      { name: "Fill in the Blank", description: "Assess understanding with blanks", tag: "Pro/Business" },
      { name: "Multiple Select", description: "Evaluate knowledge with multiple correct answers", tag: "Pro" },
      { name: "Ordering", description: "Challenge logic by arranging items", tag: "Business" },
      { name: "Matching", description: "Pair concepts to test connections" },
      { name: "Open Ended", description: "Encourage critical thinking with detailed responses" },
    ],
  },
  {
     category: "Features",
     items: [
       { name: "Multi Languages", description: "Support over 90 languages" },
       { name: "Collections", description: "Organize and save questions" },
       { name: "History", description: "Revisit past question generations" },
       { name: "Export to Word", description: "Save questions in Word format", tag: "Pro/Business" },
       { name: "Export to Excel", description: "Download questions in Excel format", tag: "Pro/Business" },
       { name: "Print", description: "Print questions for assessments", tag: "Pro/Business" },
     ],
   },
];

// FeaturesList Component
const FeaturesList = () => (
  <div className="features">
    {features.map((section) => (
      <div key={section.category} className="feature-section">
        <h2>{section.category}</h2>
        <div className="feature-items">
          {section.items.map((item) => (
            <div key={item.name} className="feature-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.tag && <span className="tag">{item.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function Home() {
  return (
    <div>
      <div className="min-h-screen relative bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ">
        <Navbar />
        <main className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <UserButton />
          <SnowEffect />
          <Hero/>
          <Feedback />
          <FAQ />
        </main>
        <Footer2 />
      </div>
    </div>
  );
}


    
 







