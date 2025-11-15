export default function Solution() {
  const solutions = [
    {
      title: "도메인별 구조화된 초안",
      description: "전략 메모, 콘텐츠 아이디어, 이메일 등 도메인에 맞는 템플릿으로 자동 구조화합니다.",
      icon: "📋",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "70-80% 완성도",
      description: "말이 끝났을 때 이미 '쓸 만한 초안'이 준비되어 있습니다. 다 갈아엎는 것이 아니라, 20~30%만 다듬으면 됩니다.",
      icon: "✨",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "두 번 일하지 않게",
      description: "한 번 말하면, 한 번의 클릭/짧은 편집으로 실사용 가능합니다. 전사 후 다시 구조 잡는 작업이 필요 없습니다.",
      icon: "🚀",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              바이브라이팅의 해결 방식
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              "전사/요약 툴"이 아니라, "말하는 순간부터 구조화된 초안을 함께 만드는 코파일럿"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 md:p-12 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white text-4xl shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-loose text-xl">
                    {solution.description}
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
