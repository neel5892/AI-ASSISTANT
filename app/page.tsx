"use client";

import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [analysis, setAnalysis] = useState<string[]>([]);

  const generatePrep = async () => {
    setQuestions([
      `Explain your experience as a ${role}`,
      `What projects have you built using ${skills}?`,
      `Explain a challenging bug you solved.`,
      `How would you optimize frontend performance?`,
      `What are best practices while working with ${skills}?`,
    ]);

    setAnalysis([
      `Improve problem-solving skills.`,
      `Practice system design.`,
      `Build more real-world projects.`,
      `Improve communication in interviews.`,
    ]);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-7xl font-bold text-center">
        AI Interview Prep Assistant
      </h1>

      <p className="text-center text-2xl text-gray-400 mt-6">
        Generate AI-powered interview preparation instantly.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-blue-950 p-10 rounded-3xl border border-blue-800">
          <h2 className="text-6xl font-bold mb-10">
            Interview Setup
          </h2>

          <input
            type="text"
            placeholder="Enter Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-6 rounded-2xl bg-black border border-gray-700 text-2xl mb-8"
          />

          <input
            type="text"
            placeholder="Enter Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-6 rounded-2xl bg-black border border-gray-700 text-2xl mb-8"
          />

          <button
            onClick={generatePrep}
            className="w-full bg-white text-black py-6 rounded-2xl text-3xl font-bold"
          >
            Generate Interview Prep
          </button>
        </div>

        <div className="bg-blue-950 p-10 rounded-3xl border border-blue-800">
          <h2 className="text-6xl font-bold mb-10">
            AI Output
          </h2>

          <div className="bg-blue-950 border border-blue-800 rounded-3xl p-8 mb-8">
            <h3 className="text-5xl font-bold mb-6">
              Interview Questions
            </h3>

            <ul className="space-y-4 text-2xl text-gray-300">
              {questions.map((q, index) => (
                <li key={index}>• {q}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-950 border border-blue-800 rounded-3xl p-8">
            <h3 className="text-5xl font-bold mb-6">
              Skill Gap Analysis
            </h3>

            <ul className="space-y-4 text-2xl text-gray-300">
              {analysis.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}