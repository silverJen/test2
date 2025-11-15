'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "어떤 도메인을 지원하나요?",
      answer: "전략 메모, 콘텐츠 아이디어, 일반 메모, 비즈니스 이메일 등 다양한 도메인을 지원하며, 계속해서 새로운 템플릿을 추가하고 있습니다.",
    },
    {
      question: "처리 시간이 얼마나 걸리나요?",
      answer: "음성 입력 길이에 따라 다르지만, 평균적으로 1분 이내에 구조화된 초안이 생성됩니다.",
    },
    {
      question: "개인/조직의 톤을 어떻게 학습하나요?",
      answer: "사용자가 제공한 예시 문서를 분석하여 개인 또는 조직의 문체와 톤을 학습하고, 이를 초안 생성에 반영합니다.",
    },
    {
      question: "결과물을 어떤 형식으로 받을 수 있나요?",
      answer: "Markdown 형태로 복사하거나 다운로드할 수 있으며, 향후 다양한 형식(Word, PDF 등) 지원을 계획하고 있습니다.",
    },
    {
      question: "무료로 사용할 수 있나요?",
      answer: "현재 베타 버전으로 무료로 사용할 수 있으며, 정식 출시 후에는 무료 플랜과 유료 플랜을 제공할 예정입니다.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              자주 받는 질문
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-loose text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
