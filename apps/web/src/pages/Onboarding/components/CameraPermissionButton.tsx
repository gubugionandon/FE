import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';

const CameraPermissionButton = () => {
  const navigate = useNavigate();

  const requestCameraPermission = async () => {
    try {
      // 카메라 권한 요청
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      // 권한이 허용되면 스트림을 중지하고 다음 페이지로 이동
      stream.getTracks().forEach((track) => track.stop());
      navigate('/onboarding/calibration');
    } catch (error) {
      console.error('카메라 권한 요청 실패:', error);
    }
  };

  return (
    <Button
      variant="primary"
      size="xl"
      className="w-[440px]"
      text="카메라 권한 허용"
      onClick={requestCameraPermission}
    />
  );
};

export default CameraPermissionButton;
