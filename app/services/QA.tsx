'use client'
import React, { useState } from "react";

type QuestionAnswer = {
  question: string;
  answer: string;
};

const qnaList: QuestionAnswer[] = [
  {
    question: "What services do you provide?",
    answer: "We provide managed IT services, product design, and software development.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support by emailing us at support@example.com or calling 123-456-7890.",
  },
  {
    question: "Do you offer customized solutions?",
    answer: "Yes, we offer tailored solutions to meet specific business needs.",
  },
];

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {qnaList.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-700">{item.question}</span>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {/* Answer */}
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnA;
