import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{event.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
          event.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {event.status}
        </span>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon className="h-5 w-5 mr-2" />
          {format(new Date(event.date), 'PPP')}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPinIcon className="h-5 w-5 mr-2" />
          {event.platform}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <UsersIcon className="h-5 w-5 mr-2" />
          {event.attendees} attendees
        </div>
      </div>
      
      <div className="mt-6">
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default EventCard;