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
    <section id="solution" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              바이브라이팅의 해결 방식
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              "전사/요약 툴"이 아니라, "말하는 순간부터 구조화된 초안을 함께 만드는 코파일럿"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 md:p-10 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
