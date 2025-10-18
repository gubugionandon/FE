import { useEnvironment, useHashMutation, useHealth, useVersion } from 'api';
import { useState } from 'react';
import { Alert, Button } from 'ui';

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
    <div>
      <div className="flex h-screen w-screen flex-col bg-gray-800 p-4 text-gray-100">
        <h1 className="text-primary text-center text-4xl font-bold">
          Yerba: Web App ({platform})
        </h1>
        <div className="p-4">
          <Alert variant="success">
            <div className="font-bold">Success!</div>
            Tailwind CSS and shared components are working correctly.
          </Alert>
        </div>
        <div>
          <div className="text-2xl font-semibold">Using...</div>
          <ul>
            <li>Electron</li>
            <li>Vite</li>
            <li>TurboRepo</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="p-2" />
        <div>...yeah this kinda sucked to figure out</div>
        <div className="p-4" />
        <div className="text-2xl italic">Wanna see some typesafe data?</div>

        {/* Health Status */}
        <div className="mb-4 rounded-lg bg-gray-700 p-4">
          <h3 className="mb-2 text-xl font-bold">🏥 Health Status</h3>
          {healthLoading ? (
            <div>Loading health status...</div>
          ) : healthError ? (
            <div className="text-red-400">❌ Health check failed</div>
          ) : (
            <div className="text-green-400">
              ✅ {health?.status || 'Healthy'}
              {health?.uptime && ` (Uptime: ${health.uptime}s)`}
            </div>
          )}
        </div>

        {/* Version Info */}
        <div className="mb-4 rounded-lg bg-gray-700 p-4">
          <h3 className="mb-2 text-xl font-bold">📦 Version Info</h3>
          {versionLoading ? (
            <div>Loading version...</div>
          ) : (
            <div>
              <div>Version: {version?.version || 'Unknown'}</div>
              <div>Environment: {version?.environment || 'Unknown'}</div>
            </div>
          )}
        </div>

        {/* Hash Generator */}
        <div className="mb-4 rounded-lg bg-gray-700 p-4">
          <h3 className="mb-2 text-xl font-bold">🔐 Hash Generator</h3>
          <div className="mb-2 flex gap-2">
            <input
              type="text"
              value={inputData}
              onChange={handleInputChange}
              className="flex-1 rounded-sm bg-gray-600 px-3 py-2 text-white"
              placeholder="Enter data to hash"
            />
            <Button onClick={handleHashSubmit}>
              {hashMutation.isPending ? 'Hashing...' : 'Generate Hash'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
