import popularDestinations from '../data_components/booking'
import { Link } from 'react-router-dom';
import logo from '/favicon.png'

export default function Booking() {

    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="cursor-pointer">
                            <div className="text-2xl font-bold text-gray-800 flex items-center">
                                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                                    <img src={logo} alt="logo" />
                                </div>
                                WonderLift Travel Co.
                            </div>
                        </Link>
                    </div>

                    <Link to="/" className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
                        <i className="fa fa-arrow-left mr-2"></i>
                        Back to Home
                    </Link>
                </div>
            </header>

        <main className="container mx-auto px-4 py-8 min-h-[800px]">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Your Trip</h1>

                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Step 1 of 6: Destination</h3>
                        <div>
                            <h2 className="text-xl mb-4">Where would you like to go?</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {popularDestinations.map((destination) => (
                                <div
                                    key={destination.id}
                                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                                        />
                                    </div>

                                    <div className="flex justify-between p-4">
                                        <h4 className="font-medium text-gray-800">{destination.name}</h4>
                                        <button className='border-1 border-gray-400 text-gray-400 active:text-white active:bg-blue-500 active:border-white text-sm px-5 rounded-lg'>Select</button>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            className="px-6 py-3 rounded-lg font-medium flex items-center"
                        >
                            <i className="fa fa-arrow-left mr-2"></i> Previous
                        </button>

                        <div className="flex space-x-4">
                            <button
                                className="bg-blue-500 active:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center cursor-pointer"
                            >
                                Next 
                                <i className="fa fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}
