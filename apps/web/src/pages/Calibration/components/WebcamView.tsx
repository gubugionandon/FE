import Webcam from 'react-webcam';

interface WebcamViewProps {
  isWebcamOn: boolean;
  onUserMediaError: (error: string | DOMException) => void;
}

const WebcamView = ({ isWebcamOn, onUserMediaError }: WebcamViewProps) => {
  const videoConstraints = {
    width: 760,
    height: 428,
    facingMode: 'user',
  };

  return (
    <div>
      {isWebcamOn ? (
        <div>
          <Webcam
            width={760}
            height={428}
            autoPlay
            playsInline
            videoConstraints={videoConstraints}
            onUserMediaError={onUserMediaError}
            className="scale-x-[-1] rounded-[24px]"
          />
        </div>
      ) : (
        <div className="bg-grey-900 flex h-full w-full items-center justify-center rounded-[24px]">
          <div className="text-center text-white">
            <div className="mb-4 text-6xl">📹</div>
            <div className="text-headline-lg-regular">웹캠이 꺼져있습니다</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamView;
