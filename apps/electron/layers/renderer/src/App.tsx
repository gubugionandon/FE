import { useEnvironment, useHashMutation, useHealth, useVersion } from 'api';
import React, { useState } from 'react';
import { Alert, AnimatedBox, Button } from 'ui';

function App() {
  const { platform } = useEnvironment();
  const {
    data: health,
    isLoading: healthLoading,
    error: healthError,
  } = useHealth();
  const {
    data: version,
    isLoading: versionLoading,
    error: versionError,
  } = useVersion();
  const {
    mutate: generateHash,
    data: hashData,
    isPending: hashPending,
  } = useHashMutation();
  const [inputData, setInputData] = useState('test data');

  const handleHash = () => {
    generateHash(inputData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <h1 className="text-2xl font-bold">Electron App</h1>
        <p className="text-gray-500">Running on {platform} platform</p>
      </div>

      <div className="space-y-6 p-6">
        {/* Environment Info */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Environment Info</h2>
          <p>Platform: {platform}</p>
          <p>User Agent: {navigator.userAgent}</p>
        </div>

        {/* Health Status */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Health Status</h2>
          {healthLoading ? (
            <p>Loading health status...</p>
          ) : healthError ? (
            <Alert variant="error">
              Health check failed: {healthError.message}
            </Alert>
          ) : (
            <div>
              <p>Status: {health?.status}</p>
              <p>Version: {health?.version}</p>
              <p>Uptime: {health?.uptime}s</p>
              <p>Timestamp: {health?.timestamp}</p>
            </div>
          )}
        </div>

        {/* Version Info */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Version Info</h2>
          {versionLoading ? (
            <p>Loading version...</p>
          ) : versionError ? (
            <Alert variant="error">
              Version check failed: {versionError.message}
            </Alert>
          ) : (
            <div>
              <p>Version: {version?.version}</p>
              <p>Build: {version?.build}</p>
              <p>Environment: {version?.environment}</p>
            </div>
          )}
        </div>

        {/* Hash Generator */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Hash Generator</h2>
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={inputData}
              onChange={handleInputChange}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter data to hash"
            />
            <Button
              onClick={handleHash}
              disabled={hashPending}
              variant="primary"
            >
              {hashPending ? 'Generating...' : 'Generate Hash'}
            </Button>
          </div>

          {hashData && (
            <Alert variant="success">
              <div>
                <p>
                  <strong>Hash:</strong> {hashData.hash}
                </p>
                <p>
                  <strong>Algorithm:</strong> {hashData.algorithm}
                </p>
                <p>
                  <strong>Original:</strong> {hashData.original}
                </p>
              </div>
            </Alert>
          )}
        </div>

        {/* Animated Components */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Animated Components</h2>
          <div className="flex space-x-4">
            <AnimatedBox className="bg-blue-500">
              <div className="p-2 text-center text-white">Hover me!</div>
            </AnimatedBox>
            <AnimatedBox className="bg-green-500">
              <div className="p-2 text-center text-white">Tap me!</div>
            </AnimatedBox>
            <AnimatedBox className="bg-purple-500">
              <div className="p-2 text-center text-white">Animate!</div>
            </AnimatedBox>
          </div>
        </div>

        {/* API Status */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">API Status</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Health API</h3>
              <p>
                Status:{' '}
                {healthLoading
                  ? 'Loading...'
                  : healthError
                    ? 'Error'
                    : 'Connected'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Version API</h3>
              <p>
                Status:{' '}
                {versionLoading
                  ? 'Loading...'
                  : versionError
                    ? 'Error'
                    : 'Connected'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
