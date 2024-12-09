import { useAuth } from '../context/AuthContext';

function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user?.name}!
          </h1>
          <div className="mt-6">
            <p className="text-gray-600">
              This is your event management dashboard. Start creating and managing your events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;