export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto container-padding py-20 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              말한 내용을 바로 써먹을 수 있는
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                문서로 바꾸는 AI 코파일럿
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-20 max-w-4xl mx-auto leading-loose font-light">
              전사/요약이 아닌, 도메인별 구조화된 초안을 자동 생성합니다.
              <br className="hidden md:block" />
              <span className="font-semibold text-gray-900">두 번 일하지 않게</span> 해드립니다.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 mb-20 max-w-4xl mx-auto">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-lg">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">70-80%</div>
                <div className="text-base md:text-lg text-gray-700 font-medium">완성도</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-lg">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">&lt; 1분</div>
                <div className="text-base md:text-lg text-gray-700 font-medium">처리 시간</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-lg">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">∞</div>
                <div className="text-base md:text-lg text-gray-700 font-medium">도메인 지원</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/silverJen/test2"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-bold text-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
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
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-300 rounded-xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
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
