import Header from "../components/header"
import tourPackages from "../data_components/packages";
import tourCategories from "../data_components/categorie";
import bg from '../assets/_imgs/first_page_cards/bali.webp'

export default function Tour(){
    
    return (
        <div className="min-h-screen bg-white">
            <Header/>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={bg}
                    alt="Travel Destinations"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-8 py-24 relative z-10">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Explore Our <span className="text-blue-300">Tours</span>
                    </h1>
                    
                    <p className="text-lg text-blue-50 mb-8">
                        Discover handcrafted journeys to the world's most captivating
                        destinations. From cultural immersions to thrilling adventures,
                        WanderLift Travel Co. offers premium tour experiences tailored to your travel
                        aspirations.
                    </p>
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm mb-1 block">
                                    Destination
                                </label>

                                <div className="relative">
                                    <select
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                                    >
                                        <option>All</option>
                                        <option>Mediterranean</option>
                                        <option>Japan</option>
                                        <option>Kenya & Tanzania</option>
                                        <option>Iceland</option>
                                        <option>Indonesia</option>
                                        <option>Argentina & Chile</option>
                                    </select>

                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <i className="fa fa-chevron-down text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm mb-1 block">
                                    When
                                </label>
                                
                                <input
                                    type="date"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700"
                                />
                            </div>

                            <div className="md:self-end">
                                <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg font-medium cursor-pointer">
                                    <i className="fa fa-search mr-2"></i> Search Tours
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Tour Categories */}
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Explore By Category
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Browse our carefully curated tour categories designed to match every
                    travel style and interest.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tourCategories.map((category) => (
                    <div
                    key={category.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {category.name}
                            </h3>

                            <p className="text-gray-600 mb-4">{category.description}</p>

                            <button className="text-blue-500 font-medium flex items-center cursor-pointer">
                                Explore 
                                <i className="fa fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/* Featured Tour Packages */}
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Featured Tour Packages
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our most popular and highly-rated travel experiences
                    curated for unforgettable journeys.
                    </p>
                </div>
                {/* Filter Options */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="text-gray-600 text-sm mb-1 block">
                                Destination
                            </label>

                            <div className="relative">
                                <select
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                                >
                                    <option>All</option>
                                    <option>Mediterranean</option>
                                    <option>Japan</option>
                                    <option>Kenya & Tanzania</option>
                                    <option>Iceland</option>
                                    <option>Indonesia</option>
                                    <option>Argentina & Chile</option>
                                </select>

                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <i className="fa fa-chevron-down text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-1 block">
                                Price Range
                            </label>

                            <div className="relative">
                                <select
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                                >
                                    <option value="All">All Prices</option>
                                    <option value="Under $2000">Under $2,000</option>
                                    <option value="$2000-$3000">$2,000 - $3,000</option>
                                    <option value="Over $3000">Over $3,000</option>
                                </select>

                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <i className="fa fa-chevron-down text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-1 block">
                            Duration
                            </label>
                            <div className="relative">
                            <select
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                            >
                                <option value="All">Any Duration</option>
                                <option value="Under 7 days">Under 7 days</option>
                                <option value="7-10 days">7-10 days</option>
                                <option value="Over 10 days">Over 10 days</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <i className="fa fa-chevron-down text-gray-400"></i>
                            </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-1 block">
                                Tour Type
                            </label>

                            <div className="relative">
                                <select
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 appearance-none text-gray-700"
                                >
                                    <option>All</option>
                                    <option>cruise</option>
                                    <option>cultural</option>
                                    <option>adventure</option>
                                    <option>luxury</option>
                                    <option>family</option>
                                </select>

                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <i className="fa fa-chevron-down text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Tour Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tourPackages.map((tour) => (
                        <div
                        key={tour.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                src={tour.image}
                                alt={tour.name}
                                className="w-full h-full object-cover"
                                />

                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-500">
                                {tour.duration}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {tour.name}
                                    </h3>

                                    <span className="text-blue-500 font-bold">
                                        ${tour.price}
                                    </span>
                                </div>

                                <p className="text-gray-500 mb-4">{tour.destination}</p>

                                <div className="mb-4">
                                    <h4 className="text-gray-700 font-medium mb-2">
                                        Highlights:
                                    </h4>

                                    <ul className="space-y-1">
                                        {tour.highlights.map((highlight) => (
                                        <li
                                            className="text-gray-600 text-sm flex items-start"
                                        >
                                            <i className="fa fa-check text-green-500 mt-1 mr-2"></i>
                                            {highlight}
                                        </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium mt-2  cursor-pointer" onClick={() => alert(`Booking ${tour.name}!`)}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-12 text-center">
                    <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors cursor-pointer">
                        View All Tours
                    </button>
                </div>
            </div>
        </section>
        {/* Why Choose Us Section*/}
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Why Choose WanderLift Travel Co. Tours
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    We're committed to providing exceptional travel experiences with
                    attention to every detail.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa fa-user-tie text-blue-500 text-2xl"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Expert Guides
                    </h3>

                    <p className="text-gray-600">
                        Our professional guides bring destinations to life with their
                        in-depth knowledge and passion.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa fa-gem text-blue-500 text-2xl"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Curated Experiences
                    </h3>

                    <p className="text-gray-600">
                        Each itinerary is thoughtfully designed to include both iconic
                        highlights and hidden gems.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa fa-tag text-blue-500 text-2xl"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Best Price Guarantee
                    </h3>

                    <p className="text-gray-600">
                        We offer competitive pricing without compromising on the quality
                        of your travel experience.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa fa-headset text-blue-500 text-2xl"></i>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        24/7 Support
                    </h3>
                    
                    <p className="text-gray-600">
                        Our dedicated support team is available around the clock to assist
                        with any questions or concerns.
                    </p>
                </div>
            </div>
        </section>
    </div>
    )
}