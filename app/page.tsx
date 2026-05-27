"use client";

import { useState } from "react";

export default function Home() {

  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [analysis, setAnalysis] = useState<string[]>([]);
  const [roadmap, setRoadmap] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generatePrep = async () => {

    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
          skills,
        }),
      });

      const data = await response.json();

      if (data.questions) {
        setQuestions(data.questions);
        setAnalysis(data.analysis);
        setRoadmap(data.roadmap);
        setLoading(false);
      }

    } catch (error) {

      console.log(error);
      setLoading(false);

      setQuestions([
        "Something went wrong while generating AI response."
      ]);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold text-center">
        AI Interview Prep Assistant
      </h1>

      <p className="text-gray-400 text-center mt-6 text-2xl">
        Generate AI-powered interview preparation instantly.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-20">

        <div className="bg-[#020b24] border border-blue-900 rounded-3xl p-10 hover:scale-[1.02] transition duration-300">

          <h2 className="text-5xl font-bold mb-10">
            Interview Setup
          </h2>

          <input
            type="text"
            placeholder="Frontend Developer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-black border border-gray-700 rounded-2xl p-5 w-full text-2xl"
          />

          <input
            type="text"
            placeholder="React, Next.js, TypeScript"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="bg-black border border-gray-700 rounded-2xl p-5 w-full text-2xl mt-8 hover:scale-[1.02] transition duration-300"
          />

          <button
            onClick={generatePrep}
            className="bg-white text-black font-bold rounded-2xl p-5 w-full mt-10 text-2xl hover:scale-[1.02] transition duration-300"
          >
            {loading ? "Generating..." : "Generate Interview Prep"}
          </button>

        </div>

        <div className="bg-[#020b24] border border-blue-900 rounded-3xl p-10">

          <h2 className="text-5xl font-bold mb-10 hover:scale-[1.02] transition duration-300">
            AI Output
          </h2>

          <div className="bg-[#020b24] border border-blue-900 rounded-3xl p-8 hover:scale-[1.02] transition duration-300">

            <h3 className="text-4xl font-bold mb-6">
              Interview Questions
            </h3>

            <ul className="space-y-4 text-gray-300 text-2xl hover:scale-[1.02] transition duration-300">

              {questions.map((q, index) => (
                <li key={index}>
                  • {q}
                </li>
              ))}

            </ul>

          </div>

          <div className="bg-[#020b24] border border-blue-900 rounded-3xl p-8 mt-8">

            <h3 className="text-4xl font-bold mb-6">
              Skill Gap Analysis
            </h3>

            <ul className="space-y-4 text-gray-300 text-2xl">

              {analysis.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}

            </ul>

          </div>
          <div className="bg-[#020b24] border border-blue-900 rounded-3xl p-8 mt-8">

            <h3 className="text-4xl font-bold mb-6">
              Learning Roadmap
            </h3>

            <ul className="space-y-4 text-gray-300 text-2xl">

              {roadmap.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}

            </ul>

          </div>
        </div>

      </div>

    </main>
  );
}