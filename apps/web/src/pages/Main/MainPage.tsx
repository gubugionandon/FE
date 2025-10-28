const MainPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-title-4xl-bold text-grey-900 mb-4">
          거부기린 메인 페이지
        </h1>
        <p className="text-headline-2xl-regular text-grey-500 mb-8">
          자세 분석을 위한 AI 기반 웹 애플리케이션
        </p>
        <div className="space-y-4">
          <div className="bg-grey-100 rounded-lg p-4">
            <h2 className="text-headline-xl-bold text-grey-800 mb-2">
              주요 기능
            </h2>
            <ul className="text-body-lg-regular text-grey-600 space-y-1">
              <li>• 실시간 자세 분석</li>
              <li>• 카메라 기반 모니터링</li>
              <li>• 개인화된 피드백</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
