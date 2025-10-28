import { useEffect, useRef } from 'react';

interface WebcamViewProps {
  isWebcamOn: boolean;
  onUserMediaError: (error: string | DOMException) => void;
}

const WebcamView = ({ isWebcamOn, onUserMediaError }: WebcamViewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isWebcamOn) {
      const getWebcamStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          onUserMediaError(err as string | DOMException);
        }
      };
      getWebcamStream();
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [isWebcamOn, onUserMediaError]);

  return (
    <div>
      {isWebcamOn ? (
        <div>
          <video
            ref={videoRef}
            width={760}
            autoPlay
            playsInline
            className="scale-x-[-1] rounded-[24px]"
          />
        </div>
      ) : (
        <div className="bg-grey-900 flex h-full w-full items-center justify-center">
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
