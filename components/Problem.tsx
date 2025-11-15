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
    <section id="problem" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              기존 방식의 문제점
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              전사/요약 툴을 사용해도 결국 다시 구조를 잡아야 하는 이유
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 md:p-10 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {problem.description}
                </p>
                
                {problem.quote && (
                  <blockquote className="pl-6 border-l-4 border-gray-300 italic text-gray-500 text-lg">
                    "{problem.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
