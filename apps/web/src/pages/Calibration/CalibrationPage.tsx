import { useState } from 'react';
import { Button } from 'ui';
import WebcamView from './components/WebcamView';

const CalibrationPage = () => {
  const [isWebcamOn, setIsWebcamOn] = useState(true); // 기본적으로 웹캠 켜짐
  const [error, setError] = useState<string | null>(null);

  const handleUserMediaError = (error: string | DOMException) => {
    console.error('웹캠 오류:', error);
    setError('웹캠에 접근할 수 없습니다. 카메라 권한을 확인해주세요.');
    setIsWebcamOn(false);
  };

  return (
    <main className="bg-grey-50 flex min-h-screen flex-col items-center">
      <section className="hbp:px-[105px] flex h-screen w-full items-center justify-center">
        {/* 메인 콘텐츠 영역 */}
        <div className="flex w-full gap-12">
          {/* 왼쪽 웹캠 영역 */}
          <WebcamView
            isWebcamOn={isWebcamOn}
            onUserMediaError={handleUserMediaError}
          />

          {/* 오른쪽 안내 영역 */}
          <div className="flex w-[442px] flex-col justify-center">
            <div className="mb-12">
              <h1 className="text-title-4xl-bold text-grey-900 mb-[20px]">
                바른 자세 기준점 등록
              </h1>
              <p className="text-body-xl-medium text-grey-500 leading-relaxed">
                거부기온앤온님의 바른 자세를 등록할 준비가 되셨다면
                <br />
                측정하기 버튼을 눌러주세요.
              </p>
            </div>

            {/* 에러 메시지 */}
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="text-headline-lg-regular text-red-600">
                  {error}
                </div>
              </div>
            )}

            <Button
              text="측정하기"
              className="text-body-xl-medium w-[149px]"
              size="xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CalibrationPage;
