import { useEnvironment, useHashMutation, useHealth, useVersion } from 'api';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  const [inputData, setInputData] = useState<string>('0.1');

  // React Query hooks
  const {
    data: health,
    isLoading: healthLoading,
    error: healthError,
  } = useHealth();
  const { data: version, isLoading: versionLoading } = useVersion();
  const hashMutation = useHashMutation();
  const { platform } = useEnvironment();

  const handleHashSubmit = () => {
    hashMutation.mutate(inputData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
