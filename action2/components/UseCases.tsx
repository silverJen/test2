export default function UseCases() {
  const useCases = [
    {
      persona: "전략기획자 박지훈",
      scenario: "주간 보고 초안을 위해 노트북을 열기 싫어서, 퇴근길 지하철에서 10분 정도 이번 주 이슈와 인사이트를 말로 쏟아냅니다.",
      result: "집에 도착했을 때 이미 '문제/현황/원인/시사점/다음 액션'으로 구조화된 글 초안이 준비되어 있습니다. 숫자와 표현만 조금 다듬고 곧바로 상사에게 공유합니다.",
      icon: "👔",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      persona: "크리에이터 김나래",
      scenario: "산책하며 오늘 클라이언트 세션에서 나온 인사이트, 내 생각, 이후 글감 아이디어를 15분 정도 떠듭니다.",
      result: "'콘텐츠 아이디어 → 포스트/뉴스레터 카드' 템플릿을 선택하면, 말이 끝난 후 '훅/스토리/인사이트/CTA' 섹션으로 나뉜 여러 카드 초안이 생성됩니다. 그중 2~3개를 골라 바로 인스타/블로그 초안으로 붙여넣습니다.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      persona: "글로벌 직장인 린",
      scenario: "중요한 클라이언트에게 보낼 이메일이 부담스러워, 출근길 택시에서 중국어와 영어를 섞어가며 상황과 요구사항을 말로 정리합니다.",
      result: "'비즈니스 이메일' 템플릿과 '정중하지만 단호한 톤'을 선택하면, 앱은 이를 자연스러운 비즈니스 영어 이메일 초안으로 만들어줍니다. 몇 개 표현만 수정하고 바로 Outlook에 붙여 넣습니다.",
      icon: "🌍",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section id="use-cases" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              실제 사용 사례
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              실제 사용자들이 바이브라이팅을 어떻게 활용하는지
            </p>
          </div>
          
          <div className="space-y-10">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${useCase.bgGradient} rounded-3xl p-10 md:p-12 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background Blur Effect */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${useCase.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Persona Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-5xl shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {useCase.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                      {useCase.persona}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/80 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Before
                        </p>
                      </div>
                      <p className="text-gray-800 leading-loose text-lg">
                        {useCase.scenario}
                      </p>
                    </div>
                    
                    {/* After */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-white/80 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          After
                        </p>
                      </div>
                      <p className="text-gray-800 leading-loose text-lg">
                        {useCase.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
