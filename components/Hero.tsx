export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto container-padding py-20 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              말한 내용을 바로 써먹을 수 있는
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                문서로 바꾸는 AI 코파일럿
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              전사/요약이 아닌, 도메인별 구조화된 초안을 자동 생성합니다.
              <br className="hidden md:block" />
              <span className="font-medium text-gray-800">두 번 일하지 않게</span> 해드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/silverJen/test2"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  GitHub에서 보기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                기능 알아보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
