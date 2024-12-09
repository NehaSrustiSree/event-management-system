import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">VirtualEvents</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/events" className="text-gray-700 hover:text-indigo-600">Events</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
            <Link to="/profile" className="text-gray-700 hover:text-indigo-600">Profile</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;