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
    <section id="problem" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
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
              기존 방식의 문제점
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              전사/요약 툴을 사용해도 결국 다시 구조를 잡아야 하는 이유
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 md:p-12 border-l-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderLeftColor: problem.color.includes('red') ? '#ef4444' : 
                                  problem.color.includes('yellow') ? '#eab308' :
                                  problem.color.includes('blue') ? '#3b82f6' : '#ec4899'
                }}
              >
                {/* Icon Background */}
                <div className={`absolute top-6 right-6 w-20 h-20 bg-gradient-to-br ${problem.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${problem.color} text-white text-3xl shadow-lg`}>
                    {problem.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-loose text-xl">
                    {problem.description}
                  </p>
                  
                  {problem.quote && (
                    <blockquote className="pl-6 border-l-4 italic text-gray-600 text-lg bg-red-50/50 rounded-r-lg py-4" style={{
                      borderLeftColor: '#ef4444'
                    }}>
                      <span className="font-semibold">"{problem.quote}"</span>
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
