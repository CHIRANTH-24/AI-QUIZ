const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const courseOutline = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Generate a study material for \n\nPython for Exam and  level of difficulty \n\nwill be easy with the summary of the course\n\nList of chapters along with sumary for each chapter in JSON format",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "courseTitle": "Python Fundamentals for Exams (Easy Level)",\n  "courseSummary": "This course provides a beginner-friendly introduction to Python programming, focusing on the core concepts necessary for success in introductory exams. It covers fundamental syntax, data types, control flow, basic data structures, and function definitions. The material emphasizes clear explanations and practical examples to ensure a strong foundational understanding of Python programming. The difficulty level is designed to be \'easy\', suitable for those with little to no prior programming experience.",\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "Introduction to Python and Setting Up",\n      "summary": "This chapter introduces the concept of programming and why Python is a popular choice. It covers the steps for setting up a Python development environment, including installing Python and choosing a suitable code editor or IDE.  Basic concepts of running your first Python script are also covered. The focus is on getting started without requiring any prior coding knowledge.",\n      "topics": [\n        "What is programming?",\n        "Why Python?",\n        "Installing Python",\n        "Choosing a code editor or IDE",\n        "Your first Python program (\'Hello, World!\')",\n        "Running Python code"\n      ]\n    },\n    {\n      "chapterNumber": 2,\n      "chapterTitle": "Basic Data Types and Variables",\n      "summary": "This chapter explores the fundamental data types in Python, such as integers, floats, strings, and booleans. It introduces the concept of variables and how to store and manipulate data using them. Type conversion between different data types is also explained.  The focus is on understanding different types of data and storing them effectively in variables.",\n      "topics": [\n        "Integers (int)",\n        "Floating-point numbers (float)",\n        "Strings (str)",\n        "Boolean values (True/False)",\n        "Variables and naming conventions",\n        "Assigning values to variables",\n        "Type conversion (casting)"\n      ]\n    },\n    {\n      "chapterNumber": 3,\n      "chapterTitle": "Operators and Expressions",\n      "summary": "This chapter delves into various operators in Python including arithmetic, comparison, and logical operators. It explains how to combine operators and operands to form expressions and evaluate them. Operator precedence is discussed to understand the order of operations. The focus is on being able to write and understand basic Python expressions.",\n        "topics": [\n         "Arithmetic operators (+, -, *, /, %, //, **)",\n         "Comparison operators (==, !=, >, <, >=, <=)",\n         "Logical operators (and, or, not)",\n         "Assignment operators (=, +=, -=, etc.)",\n         "Operator precedence",\n         "Evaluating expressions"\n        ]\n    },\n    {\n      "chapterNumber": 4,\n      "chapterTitle": "Input and Output",\n      "summary": "This chapter focuses on how to get input from the user using the `input()` function and how to display information using the `print()` function. Formatting output using f-strings or .format() methods is also covered. The focus is on the basics of program interaction with a user.",\n        "topics":[\n          "The `print()` function",\n          "The `input()` function",\n           "String formatting (f-strings and .format())",\n          "Displaying variables and messages",\n          "Getting user input and processing it"\n        ]\n    },\n    {\n      "chapterNumber": 5,\n      "chapterTitle": "Control Flow: Conditional Statements",\n      "summary": "This chapter introduces conditional statements (if, elif, else) to control the flow of execution based on certain conditions. It explains how to use conditional statements to make decisions in a program. Nested if statements are also introduced. The focus is on understanding the logic of conditional execution.",\n       "topics":[\n         "The `if` statement",\n         "The `if-else` statement",\n         "The `if-elif-else` statement",\n         "Nested `if` statements",\n         "Writing conditions with comparison and logical operators"\n        ]\n    },\n    {\n      "chapterNumber": 6,\n      "chapterTitle": "Control Flow: Loops",\n      "summary": "This chapter introduces loop structures (for and while loops) to repeat a block of code multiple times. It covers iterating over sequences using `for` loops and conditional repetition using `while` loops. The focus is on being able to write simple loops for different repetitive tasks.",\n      "topics": [\n        "The `for` loop",\n        "Iterating over sequences (strings, lists)",\n        "The `while` loop",\n         "Loop control statements (`break` and `continue`)",\n         "Common looping patterns"\n      ]\n    },\n    {\n      "chapterNumber": 7,\n      "chapterTitle": "Introduction to Lists",\n      "summary": "This chapter introduces the `list` data structure, one of the most used data structures in Python. It covers basic operations such as creating, accessing, modifying, and slicing lists. The focus is on understanding how lists store ordered collections of data.",\n       "topics": [\n        "Creating lists",\n        "Accessing elements by index",\n        "Modifying list elements",\n         "List slicing",\n        "List operations (append, insert, remove, etc.)",\n        "Basic list traversal"\n\n       ]\n    },\n        {\n      "chapterNumber": 8,\n      "chapterTitle": "Defining and Calling Functions",\n      "summary": "This chapter introduces the concept of functions to structure code into reusable blocks. It explains how to define functions with parameters and return values and how to call defined functions. The focus is on organizing code into logical modules and promoting code reusability.",\n        "topics": [\n          "Defining functions using `def`",\n           "Function parameters",\n           "Returning values from functions",\n          "Calling functions",\n          "Understanding function scope",\n           "Basic function examples"\n        ]\n    }\n  ]\n}\n```\n',
          },
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());
export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail content for each chapter, Make sure to include al topic points in the content , make sure to give content in HTML format (Do not include HTML, Head, Body, title tag), The Chapters:  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "Introduction to ReactJS and Setting Up",\n      "summary": "This chapter introduces the concept of ReactJS as a JavaScript library for building user interfaces. It covers the steps for setting up a React development environment, including using create-react-app. The focus is on getting a basic React application running without requiring deep knowledge of JavaScript build tools.",\n      "topics": [\n        "What is ReactJS?",\n        "Why use ReactJS?",\n        "Setting up a development environment with create-react-app",\n        "Understanding the basic project structure",\n        "Running your first React app"\n      ]\n    },',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "<div>\n        <h2>Chapter 1: Introduction to ReactJS and Setting Up</h2>\n        <p><strong>Summary:</strong> This chapter introduces the concept of ReactJS as a JavaScript library for building user interfaces. It covers the steps for setting up a React development environment, including using create-react-app. The focus is on getting a basic React application running without requiring deep knowledge of JavaScript build tools.</p>\n        \n        <h3>Topics:</h3>\n        <ul>\n            <li>\n                <h4>What is ReactJS?</h4>\n                <p>\n                    <ul>\n                        <li>Definition of ReactJS as a JavaScript library.</li>\n                        <li>Focus on building user interfaces.</li>\n                        <li>React's component-based architecture.</li>\n                         <li>Overview of React's virtual DOM concept.</li>\n                        <li>Introduction to declarative programming paradigm.</li>\n                    </ul>\n                </p>\n            </li>\n            <li>\n                <h4>Why use ReactJS?</h4>\n                 <p>\n                    <ul>\n                        <li>Advantages of using ReactJS.</li>\n                         <li>Emphasis on creating reusable UI components.</li>\n                        <li>Efficiency of the virtual DOM updates.</li>\n                        <li>React's large community and ecosystem.</li>\n                        <li>Benefits for building complex UIs.</li>\n                    </ul>\n                </p>\n            </li>\n            <li>\n                <h4>Setting up a development environment with create-react-app</h4>\n                <p>\n                    <ul>\n                        <li>Introduction to create-react-app.</li>\n                       <li>Steps for installing Node.js and npm/yarn.</li>\n                        <li>Command for creating a new React application.</li>\n                        <li>Understanding the project creation process.</li>\n                    </ul>\n                </p>\n            </li>\n            <li>\n                <h4>Understanding the basic project structure</h4>\n                <p>\n                    <ul>\n                        <li>Overview of key files and folders in the project.</li>\n                        <li>Explanation of the `public` directory (e.g., `index.html`).</li>\n                        <li>Explanation of the `src` directory (e.g., `index.js`, `App.js`).</li>\n                        <li>Understanding `package.json` for project dependencies and scripts.</li>\n                        <li>Role of `node_modules` directory.</li>\n                    </ul>\n                </p>\n            </li>\n            <li>\n                <h4>Running your first React app</h4>\n                <p>\n                   <ul>\n                        <li>Command to start the development server.</li>\n                        <li>Viewing the app in the web browser.</li>\n                        <li>Overview of the default React app content.</li>\n                         <li>Making simple changes to the app (e.g., editing `App.js`).</li>\n                        <li>Observing changes with hot reloading.</li>\n                    </ul>\n                </p>\n            </li>\n        </ul>\n    </div>\n\n",
        },
      ],
    },
  ],
});