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
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              주요 기능
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              바이브라이팅이 제공하는 핵심 기능들
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 md:p-12 border-l-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderLeftColor: feature.gradient.includes('blue') ? '#3b82f6' :
                                  feature.gradient.includes('yellow') ? '#eab308' :
                                  feature.gradient.includes('pink') ? '#ec4899' :
                                  feature.gradient.includes('purple') ? '#a855f7' :
                                  feature.gradient.includes('cyan') ? '#06b6d4' : '#10b981'
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} text-white text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-loose text-xl">
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
