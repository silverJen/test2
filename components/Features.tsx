export default function Features() {
  const features = [
    {
      title: "도메인별 템플릿",
      description: "전략 메모, 콘텐츠 아이디어, 일반 메모, 비즈니스 이메일 등 다양한 도메인에 맞는 템플릿을 제공합니다.",
      icon: "📚",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "실시간 구조화",
      description: "말하는 순간부터 도메인에 맞는 구조를 잡아, 말이 끝났을 때 이미 구조화된 초안이 준비되어 있습니다.",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "개인화된 톤 반영",
      description: "사용자의 예시 문서를 학습하여 개인/조직의 톤과 문체를 반영한 초안을 생성합니다.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "섹션별 편집 및 재생성",
      description: "각 섹션을 개별적으로 편집하거나 AI로 재작성할 수 있습니다. 톤 변경, 요약, 확장 등 다양한 옵션을 제공합니다.",
      icon: "✏️",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "핵심 메시지 보존",
      description: "말할 때 강조했던 핵심 주장, SO WHAT, 숫자/데이터 포인트를 초안에서도 명확히 유지합니다.",
      icon: "💎",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Markdown 지원",
      description: "결과물을 Markdown 형태로 복사/다운로드하여 바로 사용할 수 있습니다.",
      icon: "📄",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
              기능
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              바이브라이팅이 제공하는 핵심 기능들
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.gradient} text-white text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
