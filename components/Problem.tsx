export default function Problem() {
  const problems = [
    {
      title: "두 번 일하게 됨",
      description: "Otter, AudioPen, Descript 등으로 전사/요약까지는 되지만, 실제 보고서/논문/이메일/스크립트로 쓰기 위해 구조/톤/포맷을 전부 다시 잡아야 합니다.",
      quote: "차라리 처음부터 내가 쓰는 게 낫다.",
      icon: "🔄",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "도메인별 구조화 실패",
      description: "결과물은 대부분 '에세이형 문단 텍스트'입니다. 실제로 필요한 것은 전략 보고서(문제/원인/인사이트/제안), 논문(IMRaD 구조), 이메일(상황/요청/근거/톤) 등 도메인별 구조인데, 이를 사람이 다시 만들어야 합니다.",
      icon: "📄",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "개인/조직 톤 미반영",
      description: "결과물이 '툴의 톤'이지 '나/우리 팀의 톤'이 아닙니다. 퍼스널 브랜딩/채널/회사 문체와 어울리지 않아 결국 커스터마이징 작업이 필요합니다.",
      icon: "🎭",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "핵심 메시지 손상",
      description: "말할 때 분명히 있었던 핵심 주장, SO WHAT, 숫자/데이터 포인트가 결과물에서 희석되거나 묻힙니다.",
      icon: "💔",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-600 bg-red-50 rounded-full">
              문제점
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              기존 방식의 문제점
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              전사/요약 툴을 사용해도 결국 다시 구조를 잡아야 하는 이유
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${problem.color} text-white text-2xl shadow-lg`}>
                    {problem.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  
                  {problem.quote && (
                    <blockquote className="relative pl-6 border-l-4 border-red-400 italic text-gray-600 bg-red-50/50 rounded-r-lg py-3">
                      <span className="absolute left-2 top-2 text-red-400 text-2xl">"</span>
                      <span className="pl-4">{problem.quote}"</span>
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
