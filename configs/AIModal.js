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

export const generateNotesAiModel = model.start_chat(
  (history = [
    {
      role: "user",
      parts: [
        'Generate exam material detail for each chapter, Make sure to include all topics point in the content, make sure to give content in HTMLKL, format (Do not add HTMLK, Head, Body, title tag), The chapters:  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "Mathematics: Sets, Relations, and Functions",\n      "summary": "This chapter covers the fundamental concepts of sets, relations, and functions. It includes topics such as types of sets, set operations, different types of relations, and various functions and their properties. Emphasis is given to solving problems involving these concepts. ",\n      "topics": [\n        "Sets and their representation",\n        "Types of sets",\n        "Set operations",\n        "Relations and their types",\n        "Functions and their types",\n        "Domain and range of functions",\n        "Composite and inverse functions",\n        "Problem-solving with sets, relations, and functions"\n      ]\n    },',
      ],
    },
    {
      role: "model",
      parts: [
        "<h3>Chapter 1: Mathematics: Sets, Relations, and Functions</h3>\n\n<h4>Sets and their representation</h4>\n          <ul>\n            <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Identify the correct set notation for a given collection of elements.</li>\n                 <li>Determine if a given element belongs to a set.</li>\n                <li>Match different representations of a set (roster form, set-builder form).</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                <li>Write a given set in both roster and set-builder forms.</li>\n                <li>Provide examples of different sets using appropriate notations.</li>\n              </ul>\n            </li>\n            <li><strong>Problem Solving:</strong>\n              <ul>\n                 <li>Convert a descriptive set into set notations.</li>\n                </ul>\n            </li>\n          </ul>\n        \n        \n          <h4>Types of sets</h4>\n          <ul>\n            <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Identify the type of a given set (e.g., empty set, singleton set, finite set, infinite set).</li>\n                <li>Match sets with their appropriate types.</li>\n              </ul>\n            </li>\n             <li><strong>True/False Questions:</strong>\n              <ul>\n               <li>Determine if given statement about types of set are true of false.</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                <li>Give an example for each type of set mentioned in the topic.</li>\n                <li>Compare and contrast different types of sets.</li>\n              </ul>\n            </li>\n           \n          </ul>\n        \n          <h4>Set operations</h4>\n          <ul>\n            <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Identify the result of a union, intersection, difference, or complement of given sets.</li>\n                 <li>Choose the correct Venn diagram representing given set operation.</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                <li>Calculate the union, intersection, difference, and complement of given sets.</li>\n                <li>Describe how set operations relate to logical 'AND', 'OR', and 'NOT'.</li>\n              </ul>\n            </li>\n              <li><strong>Problem Solving:</strong>\n              <ul>\n                 <li>Use Venn diagrams to solve problems involving set operations.</li>\n                <li>Apply set operations in practical scenarios.</li>\n              </ul>\n            </li>\n           \n          </ul>\n        \n        \n          <h4>Relations and their types</h4>\n          <ul>\n             <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Identify the type of a given relation (e.g., reflexive, symmetric, transitive, equivalence).</li>\n                <li>Determine if a relation is reflexive, symmetric, transitive, or equivalence based on the given set of ordered pair.</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                 <li>Give example of relations that are reflexive, symmetric, and transitive.</li>\n                <li>Define and explain different types of relations with examples.</li>\n              </ul>\n            </li>\n               <li><strong>Problem Solving:</strong>\n              <ul>\n                 <li>Determine if a given relation is an equivalence relation.</li>\n                <li>Create a relation that satisfies specific conditions.</li>\n              </ul>\n            </li>\n          </ul>\n        \n          <h4>Functions and their types</h4>\n          <ul>\n            <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Identify if a given relation is a function or not.</li>\n                 <li>Determine the type of a given function (e.g., one-to-one, onto, bijective).</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                <li>Define different types of functions with examples.</li>\n                  <li>Explain the difference between a relation and a function.</li>\n              </ul>\n            </li>\n            <li><strong>Problem Solving:</strong>\n              <ul>\n               <li>Given a function, determine if it is one-to-one, onto, or bijective.</li>\n                 <li>Classify given functions according to different types.</li>\n              </ul>\n            </li>\n           \n          </ul>\n        \n        \n          <h4>Domain and range of functions</h4>\n           <ul>\n            <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Identify the domain and range of a given function.</li>\n                 <li>Choose the correct representation of domain and range from given options.</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                 <li>Find the domain and range of a function given its expression.</li>\n                <li>Explain how domain restriction can affect the function's range.</li>\n              </ul>\n            </li>\n             <li><strong>Problem Solving:</strong>\n              <ul>\n               <li>Determine the domain and range of functions given graphically.</li>\n                 <li>Find domain of real world function based on given scenario.</li>\n              </ul>\n            </li>\n          </ul>\n        \n         <h4>Composite and inverse functions</h4>\n          <ul>\n             <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Determine the composite function of given functions.</li>\n                <li>Identify if a function is invertible and find its inverse.</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                <li>Calculate composite functions for given functions.</li>\n                <li>Explain the steps to find inverse of a function.</li>\n                  <li>Discuss when a function is invertible.</li>\n              </ul>\n            </li>\n              <li><strong>Problem Solving:</strong>\n              <ul>\n               <li>Solve problems using properties of composite and inverse functions.</li>\n                <li>Find the inverse of a given function.</li>\n              </ul>\n            </li>\n          </ul>\n        \n        \n          <h4>Problem-solving with sets, relations, and functions</h4>\n           <ul>\n            <li><strong>Multiple Choice Questions:</strong>\n              <ul>\n                <li>Solve problems that combine concepts of sets, relations, and functions.</li>\n                 <li>Determine the correct statement base on a problem involving set and function.</li>\n              </ul>\n            </li>\n            <li><strong>Short Answer Questions:</strong>\n              <ul>\n                <li>Apply properties of sets and relations to solve practical problems.</li>\n                <li>Explain the use of set and function notations in problem solving.</li>\n              </ul>\n            </li>\n             <li><strong>Problem Solving:</strong>\n              <ul>\n               <li>Solve application based problem involving sets, relations, and functions.</li>\n                 <li>Solve complex problems by breaking down them into small steps.</li>\n              </ul>\n            </li>\n          </ul>\n",
      ],
    },
  ])
);
