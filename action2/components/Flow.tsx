export default function Flow() {
  const steps = [
    {
      number: "01",
      title: "말하기",
      description: "음성으로 내용을 말하면 실시간으로 텍스트화됩니다.",
    },
    {
      number: "02",
      title: "구조화",
      description: "도메인별 템플릿에 맞춰 자동으로 구조화된 초안이 생성됩니다.",
    },
    {
      number: "03",
      title: "편집",
      description: "섹션별로 개별 편집하거나 AI로 재작성할 수 있습니다.",
    },
    {
      number: "04",
      title: "사용",
      description: "Markdown 형태로 복사하거나 다운로드하여 바로 사용합니다.",
    },
  ];

  return (
    <section id="flow" className="section-padding bg-white relative overflow-hidden">
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
              동작 방식 4단계
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-300 mb-4 group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-300">
                    {step.number}
                  </div>
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-loose text-xl">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
