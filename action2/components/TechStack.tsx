export default function TechStack() {
  const techs = [
    {
      name: "Next.js 14",
      description: "App Router, Server Components, API Routes",
      category: "Frontend & Backend",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "OpenAI",
      description: "GPT-4o-mini for document structuring",
      category: "AI Integration",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      category: "Styling",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "TypeScript",
      description: "Type-safe development",
      category: "Language",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
              기술 스택
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              현대적이고 검증된 기술로 구축했습니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 md:p-12 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-block px-3 py-1 mb-4 text-xs font-bold text-white rounded-lg bg-gradient-to-r ${tech.gradient} shadow-md`}>
                    {tech.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                    {tech.name}
                  </h3>
                  <p className="text-gray-700 leading-loose text-xl">
                    {tech.description}
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
