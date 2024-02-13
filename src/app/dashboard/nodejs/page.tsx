"use client";
import { useState } from "react";
import { Questions } from "../../utils/nodejs";
import Timer from "@/app/Timer/timer";
import Link from "next/link";

export default function Frontend() {
  const [questions, setQuestions] = useState(Questions);
  const random = Math.floor(Math.random() * questions.length);
  const currentQuestion = questions[random];
  const handleChange = () => {
    const newQuestions = questions.filter((x, i) => i !== random);
    setQuestions(newQuestions);
  };
  return (
    <div className="w-10/12 p-2 flex flex-col items-center border-2 rounded">
      {questions.length > 0 ? (
        <>
          <div className="flex flex-col items-center">
            <Timer number={random} handlenext={handleChange} />
            <div className="p-2 m-2 font-bold">{currentQuestion}</div>
          </div>
          <button
            className="w-1/2 m-2 p-2  bg-white text-black rounded hover:bg-slate-200"
            onClick={handleChange}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <h1 className="p-2 m-2font-black">🎉 Congrats on complete all questions 🎉</h1>
          <Link
            href="/dashboard"
            className="m-2 p-2  bg-white text-black rounded hover:bg-slate-200"
          >
            Go Back
          </Link>
        </>
      )}
    </div>
  );
}
