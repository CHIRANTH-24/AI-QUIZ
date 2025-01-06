import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import "./App.css";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Link href="/sign-up">
          <Button> Sign-Up </Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-in">
          <Button> Sign-in </Button>
        </Link>
      </div>
      <UserButton />
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <div className="logo">🚀</div>
          <nav className="nav">
            <a href="#" className="navLink">
              Features
            </a>
            <a href="#" className="navLink">
              History
            </a>
          </nav>
          <div className="userIcon">R</div>
        </header>

        {/* Main Section */}
        <main className="main">
          <h1 className="title">Free AI Powered Questions Generator</h1>

          <p className="description">
            OpExams Question Generator lets you create questions from various
            inputs like long text, topics, links, YouTube videos, media, and
            PDFs. Generate multiple-choice, multi-select, true/false, matching,
            ordering, short text, open-ended, and fill-in-the-blank questions to
            use in your exams or save for later.
          </p>
          <h2 className="stat">+10,000,000</h2>
          <p className="statDescription">Generated questions last month</p>

          {/* New Section */}
          <section className="questionSection">
            {/* Top Menu */}
            <div className="topMenu">
              <button className="menuButton activeMenu">Context</button>
              <button className="menuButton">Topic</button>
              <button className="menuButton">Link</button>
              <button className="menuButton">YouTube</button>
              <button className="menuButton">Media</button>
              <button className="menuButton">PDF</button>
            </div>

            {/* Text Area */}
            <div className="textArea">
              <textarea
                className="textInput"
                placeholder="Type your content here..."
                maxLength="1000"
              />
              <div className="charCount">2 / 1000</div>
            </div>

            {/* Bottom Buttons */}
            <div className="bottomMenu">
              <button className="settingsButton">⚙ Settings</button>
              <button className="generateButton">Generate questions</button>
              <button className="quizButton">🤔 Quiz me</button>
            </div>
          </section>
        </main>

        {/* Collections and History */}
        <h1>Collections</h1>
        <div className="collections">
          <div className="collections-box"></div>
        </div>

        <h1>History</h1>
        <div className="history">
          <div className="history-box"></div>
        </div>

        {/* Render Features List */}
        <FeaturesList />
      </div>
    </div>
  );
}









