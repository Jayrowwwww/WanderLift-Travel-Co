import { Link } from "react-router-dom";
import Header from "../components/header";
import destinations from "../data_components/destinations";
import Plane from  "../assets/_imgs/bg/first_page.jpg"
import woman from '../assets/_imgs/bg/first_page_lower.jpg'

export default function Home() {

    return (
        <div className="min-h-screen bg-white">
            <Header/>
        <section className="relative overflow-hidden rounded-3xl mx-4 mt-4">
            <div className="relative bg-blue-50 rounded-3xl overflow-hidden">
                <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 z-10">
                        <p className="text-blue-500 mb-2 uppercase tracking-wider">
                            ELEVATE YOUR TRAVEL JOURNEY
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Experience The
                            <br />
                            Magic Of Flight!
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Discover seamless travel experiences and unforgettable
                            adventures with our premium flight services.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/booking">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium cursor-pointer">
                                    Book A Trip Now
                                </button>
                            </Link>

                            <button className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                                <h2 className="">Know More</h2>
                                <i className="fa fa-arrow-right ml-2"></i>
                            </button>
                        </div>

                        <div className="mt-8 flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-full shadow-md bg-gray-200 cursor-pointer">
                                <i className="fa fa-plane text-blue-500 px-5"></i>
                            </div>

                            <div>
                                <p className="text-sm font-medium">Awesome Planes</p>

                                <p className="text-xs text-gray-500">
                                    Modern fleet selection
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 absolute right-0 top-0 h-full">
                        <img
                            src={Plane}
                            alt="Airplane in flight"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Partners */}
        <div className="container mx-auto px-4 py-8 border-b">
            <div className="flex flex-wrap items-center justify-between">
                <div className="text-sm text-gray-500 mr-4">Follow us on:</div>

                <div className="flex space-x-4 text-gray-400">
                    <a href="#">
                        <i className="fab fa-twitter cursor-pointer hover:text-sky-400"></i>
                    </a>
                    
                    <a href="#">
                        <i className="fab fa-facebook cursor-pointer hover:text-blue-600"></i>
                    </a>

                    <a href="#">
                        <i className="fab fa-instagram cursor-pointer hover:text-pink-500"></i>
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end space-x-8 mt-4 md:mt-0">
                    <div className="text-gray-500 flex items-center">
                        <i className="fab fa-airbnb text-xl mr-2"></i>
                        <span>Airbnb</span>
                    </div>

                    <div className="text-gray-500 flex items-center">
                        <i className="fa fa-bed text-xl mr-2"></i>
                        <span>Booking.com</span>
                    </div>

                    <div className="text-gray-500 flex items-center">
                        <i className="fa fa-suitcase text-xl mr-2"></i>
                        <span>Trivago</span>
                    </div>

                    <div className="text-gray-500 flex items-center">
                        <i className="fa fa-globe text-xl mr-2"></i>
                        <span>Expedia</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Popular Destinations */}
        <section className="container mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                    Popular Destinations
                    </h2>
                    <p className="text-gray-500">
                    Unleash Your Wanderlust With WanderLift Travel Co.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 cursor-pointer">
                {destinations.map((destination) => (
                    <div
                    key={destination.id}
                    className='bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-101 hover:ring-1 ring-sky-500'
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={destination.image}
                                alt={destination.title}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {destination.title}
                            </h3>

                            <div className="flex items-center mt-2">
                                <i className="fa fa-map-marker-alt text-gray-500 mr-2"></i>

                                <span className="text-sm text-gray-500">
                                    {destination.location}
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <i className="fa fa-user text-gray-500 mr-1"></i>

                                    <span className="text-xs text-gray-500">
                                        {destination.visits}
                                    </span>
                                </div>

                                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                                    <i className="fa fa-star mr-1"></i>
                                    {destination.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Journey Features */}
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Journey To The Skies Made Simple!
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Traveling is a wonderful way to explore new places, learn about
                    different cultures, and gain unique experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-map-marked-alt text-blue-500"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Find Your Destination
                    </h3>

                    <p className="text-gray-600">
                    Browse through our curated selection of amazing destinations
                    around the world.
                    </p>

                    <button className="mt-4 text-blue-500 font-medium flex items-center cursor-pointer">
                        LEARN MORE
                        <i className="fa fa-arrow-right ml-2"></i>
                    </button>
                </div>

                <div className="bg-blue-500 p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                        <img
                            src="https://readdy.ai/api/search-image?query=Abstract%20circular%20pattern%20with%20dots%20and%20lines%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20tech%20feel%2C%20suitable%20for%20background%20element%2C%20digital%20network%20concept%2C%20minimalist%20design%20with%20geometric%20shapes&width=100&height=100&seq=6&orientation=squarish"
                            alt="Pattern"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-ticket-alt text-sky-600"></i>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">Book A Ticket</h3>

                    <p className="text-blue-100">
                    Traveling is a wonderful way to explore new places, learn about
                    different cultures, and gain unique experiences.
                    </p>

                    <button className="mt-4 text-white font-medium flex items-center cursor-pointer">
                        LEARN MORE
                        <i className="fa fa-arrow-right ml-2"></i>
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-credit-card text-blue-500"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Pay & Start Journey
                    </h3>

                    <p className="text-gray-600">
                        Secure payment options and instant confirmation to start your
                        adventure right away.
                    </p>

                    <button className="mt-4 text-blue-500 font-medium flex items-center cursor-pointer">
                        LEARN MORE
                        <i className="fa fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        {/* Promotional Section */}
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="md:w-1/3 relative">
                    <img
                        src={woman}
                        alt="Travel lifestyle"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-6 left-6 bg-white py-2 px-4 rounded-lg shadow-md">
                        <p className="font-bold text-blue-500 text-xl">20% OFF</p>
                        <p className="text-xs text-gray-500">Till September 2025</p>
                    </div>
                </div>

                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <div className="mb-6">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            UNLEASH WANDERLUST WITH WANDERLIFT TRAVEL CO.
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Traveling is a wonderful way to explore new places, learn about
                            different cultures, and gain unique experiences. Our premium
                            services ensure you get the most out of every journey.
                        </p>

                        <button className="bg-blue-50 text-blue-500 px-6 py-3 rounded-full font-medium flex items-center justify-center w-full md:w-auto cursor-pointer">
                            Book A Flight Now
                            <i className="fa fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
