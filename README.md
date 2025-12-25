Talent Lens 🎯
AI-Powered Applicant Tracking System (ATS) & Resume Analyzer
Talent Lens is a production-ready, serverless AI application designed to bridge the gap between job seekers and recruiters. It uses advanced Large Language Models (LLMs) to analyze resumes against specific job descriptions, providing a compatibility score and actionable feedback to improve landing chances.

✨ Features
AI Resume Scoring: Get a percentage match between your resume and a job description.

Actionable Insights: Detailed feedback on missing keywords, formatting, and experience gaps.

Serverless Architecture: Powered by Puter.js, eliminating the need for a traditional backend.

Real-time Analytics: Instant processing of PDF/Docx files using AI.

State Persistence: Save and manage multiple resumes and analysis results.

Responsive Design: Fully optimized for mobile and desktop using Tailwind CSS V4.

🚀 Tech Stack
Frontend
Framework: React.js

Routing: React Router V7

Styling: Tailwind CSS V4

Language: TypeScript

State Management: Zustand

Build Tool: Vite

Backend & AI (Serverless)
Infrastructure: Puter.js (Cloud OS)

Authentication: Puter Auth

Database/Storage: Puter Key-Value Store & File Systems

AI Engine: Puter AI (LLM integration for resume parsing)

📦 Installation & Setup
Clone the repository:

Bash

git clone https://github.com/UmangSayre12/talent_lens.git
cd talent_lens
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Build for production:

Bash

npm run build
🛠️ How it Works
Upload: Users upload their resume in PDF or Text format.

Input: Users paste the Job Description (JD) they are targeting.

Process: The application sends the data to the Puter AI engine via a serverless call.

Analyze: The AI parses the resume, compares it with the JD, and generates a structured JSON response.

Visualize: The frontend displays the score, strengths, and areas for improvement using a clean dashboard.

📂 Project Structure
Plaintext

src/
├── components/     # Reusable UI components (Card, Button, Navbar)
├── hooks/          # Custom React hooks
├── pages/          # Main application views (Home, Dashboard, Analysis)
├── store/          # Zustand state management
├── types/          # TypeScript interfaces/types
├── utils/          # Helper functions and Puter.js logic
└── App.tsx         # Main entry point
🛡️ License
Distributed under the MIT License. See LICENSE for more information.

🤝 Contact
Umang Sayre - GitHub

Project Link: https://github.com/UmangSayre12/talent_lens
