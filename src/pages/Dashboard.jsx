import { useState } from 'react';
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import EventList from '../components/EventList';
import SignupForm from './signup';

function Dashboard() {
  const [events] = useState([
    {
      id: 1,
      title: 'Tech Conference 2024',
      description: 'Annual virtual tech conference featuring industry leaders',
      date: '2024-04-15',
      platform: 'Zoom',
      attendees: 500,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Digital Marketing Workshop',
      description: 'Learn the latest digital marketing strategies',
      date: '2024-03-28',
      platform: 'Google Meet',
      attendees: 200,
      status: 'ongoing'
    },
    {
      id: 3,
      title: 'Virtual Networking Event',
      description: 'Connect with professionals in your industry',
      date: '2024-04-01',
      platform: 'Hopin',
      attendees: 300,
      status: 'upcoming'
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Events</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Event
        </button>
      </div>
      <EventList events={events} />
    </div>
  );
}
function Login() { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const { login } = useAuth(); 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      const response = await fetch(`/api/login?email=${email}&password=${password}`);
       if (response.ok) { 
        const data = await response.json(); 
        localStorage.setItem('token', data.token);
         navigate('/dashboard'); 
        } else {
           const errorData = await response.json();
            setError(errorData.message);
           } 
          } catch (err) { 
            setError('Login failed');
           } 
          }; return (
             <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
               <div className="max-w-md w-full space-y-8">
                 <div> 
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> 
                    Sign in to your account 
                    </h2> 
                    </div>
                     <form className="mt-8 space-y-6" onSubmit={handleSubmit}> 
                      {error && (
                         <div className="rounded-md bg-red-50 p-4"> 
                         <div className="text-sm text-red-700">{error}</div>
                      </div>
                       )} 
                       <div className="rounded-md shadow-sm -space-y-px"> 
                        <div> 
                          <label htmlFor="email-address" className="sr-only">
                             Email address 
                            </label>
                             <input
                              id="email-address" 
                              name="email"
                               type="email"
                                required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Email address" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                /> 
                                </div> 
                                <div> <label htmlFor="password" className="sr-only"> Password </label>
                                 <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                 placeholder="Password" 
                                 
                                 value={password} 
                                 onChange={(e) => setPassword(e.target.value)} /> 
                                 </div> 
                                 </div>

                                  <div> 
                                  <button 
                                 type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                                   Sign in
                                    </button> 
                                 </div>
                                  </form> 
                                  </div> 
                                  </div> ); }
export default Dashboard;