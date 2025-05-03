import Header from "../components/header"

export default function Tour(){
    const tourPackages = [
        {
        id: 1,
        name: "Mediterranean Cruise Adventure",
        destination: "Mediterranean",
        duration: "10 days",
        price: 2499,
        rating: 4.8,
        reviews: 124,
        type: "Cruise",
        highlights: [
            "Visit 5 countries",
            "Luxury ship accommodation",
            "All-inclusive meals",
            "Daily excursions",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Luxury%2520cruise%2520ship%2520sailing%2520through%2520the%2520Mediterranean%2520Sea%2520with%2520beautiful%2520blue%2520water%2520and%2520scenic%2520coastline%2520views%252C%2520white%2520ship%2520against%2520deep%2520blue%2520ocean%252C%2520sunny%2520day%2520with%2520clear%2520skies%252C%2520professional%2520travel%2520photography%2520with%2520vibrant%2520colors%2520and%2520perfect%2520lighting&width=600&height=400&seq=201&orientation=landscape",
        },
        {
        id: 2,
        name: "Japanese Cherry Blossom Tour",
        destination: "Japan",
        duration: "8 days",
        price: 1899,
        rating: 4.9,
        reviews: 87,
        type: "Cultural",
        highlights: [
            "Tokyo and Kyoto",
            "Cherry blossom viewing",
            "Traditional tea ceremony",
            "Temple visits",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Beautiful%2520Japanese%2520cherry%2520blossom%2520trees%2520in%2520full%2520bloom%2520with%2520pink%2520flowers%2520against%2520blue%2520sky%252C%2520traditional%2520Japanese%2520pagoda%2520in%2520background%252C%2520spring%2520season%2520in%2520Japan%252C%2520professional%2520travel%2520photography%2520with%2520perfect%2520lighting%2520and%2520composition&width=600&height=400&seq=202&orientation=landscape",
        },
        {
        id: 3,
        name: "African Safari Experience",
        destination: "Kenya & Tanzania",
        duration: "12 days",
        price: 3299,
        rating: 4.7,
        reviews: 156,
        type: "Adventure",
        highlights: [
            "Big Five wildlife viewing",
            "Luxury safari lodges",
            "Maasai village visit",
            "Hot air balloon ride",
        ],
        image:
            "https://readdy.ai/api/search-image?query=African%2520safari%2520landscape%2520with%2520elephants%2520and%2520giraffes%2520against%2520golden%2520sunset%252C%2520acacia%2520trees%2520silhouetted%2520on%2520horizon%252C%2520savanna%2520grasslands%2520stretching%2520into%2520distance%252C%2520professional%2520wildlife%2520photography%2520with%2520warm%2520lighting%2520and%2520perfect%2520composition&width=600&height=400&seq=203&orientation=landscape",
        },
        {
        id: 4,
        name: "Northern Lights Iceland Tour",
        destination: "Iceland",
        duration: "7 days",
        price: 2199,
        rating: 4.8,
        reviews: 92,
        type: "Adventure",
        highlights: [
            "Aurora viewing spots",
            "Glacier hiking",
            "Geothermal hot springs",
            "Reykjavik city tour",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Spectacular%2520northern%2520lights%2520aurora%2520borealis%2520dancing%2520across%2520night%2520sky%2520in%2520Iceland%252C%2520vibrant%2520green%2520and%2520purple%2520colors%2520reflected%2520in%2520still%2520lake%2520below%252C%2520silhouettes%2520of%2520mountains%2520in%2520background%252C%2520professional%2520night%2520photography%2520with%2520long%2520exposure&width=600&height=400&seq=204&orientation=landscape",
        },
        {
        id: 5,
        name: "Tropical Bali Retreat",
        destination: "Indonesia",
        duration: "9 days",
        price: 1699,
        rating: 4.6,
        reviews: 118,
        type: "Luxury",
        highlights: [
            "Private villa accommodation",
            "Ubud cultural tour",
            "Beachfront relaxation",
            "Spa treatments",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Luxurious%2520tropical%2520Bali%2520villa%2520with%2520private%2520infinity%2520pool%2520overlooking%2520lush%2520green%2520jungle%2520and%2520rice%2520terraces%252C%2520traditional%2520Balinese%2520architecture%2520with%2520open%2520air%2520design%252C%2520beautiful%2520sunny%2520day%2520with%2520perfect%2520blue%2520sky%252C%2520professional%2520resort%2520photography&width=600&height=400&seq=205&orientation=landscape",
        },
        {
        id: 6,
        name: "Patagonian Hiking Adventure",
        destination: "Argentina & Chile",
        duration: "14 days",
        price: 2899,
        rating: 4.9,
        reviews: 76,
        type: "Adventure",
        highlights: [
            "Torres del Paine",
            "Glacier trekking",
            "Wildlife spotting",
            "Mountain lodges",
        ],
        image:
            "https://readdy.ai/api/search-image?query=Dramatic%2520Patagonian%2520landscape%2520with%2520towering%2520granite%2520peaks%2520of%2520Torres%2520del%2520Paine%252C%2520turquoise%2520glacial%2520lake%2520in%2520foreground%252C%2520hikers%2520on%2520trail%2520enjoying%2520spectacular%2520mountain%2520views%252C%2520dramatic%2520clouds%2520and%2520perfect%2520lighting%252C%2520professional%2520landscape%2520photography&width=600&height=400&seq=206&orientation=landscape",
        },
    ];
    // Tour categories data
    const tourCategories = [
        {
        id: 1,
        name: "Adventure Tours",
        description: "Thrilling experiences for the bold traveler",
        image:
            "https://readdy.ai/api/search-image?query=Adventure%2520travelers%2520hiking%2520on%2520mountain%2520trail%2520with%2520backpacks%252C%2520dramatic%2520mountain%2520landscape%2520with%2520snow-capped%2520peaks%2520in%2520background%252C%2520clear%2520blue%2520sky%252C%2520sense%2520of%2520exploration%2520and%2520discovery%252C%2520professional%2520adventure%2520photography%2520with%2520vibrant%2520colors&width=400&height=300&seq=207&orientation=landscape",
        },
        {
        id: 2,
        name: "Cultural Experiences",
        description: "Immerse yourself in local traditions and history",
        image:
            "https://readdy.ai/api/search-image?query=Travelers%2520participating%2520in%2520traditional%2520cultural%2520ceremony%2520with%2520local%2520people%2520in%2520colorful%2520traditional%2520clothing%252C%2520ancient%2520temple%2520or%2520historical%2520site%2520in%2520background%252C%2520warm%2520lighting%2520and%2520rich%2520cultural%2520details%252C%2520professional%2520cultural%2520photography&width=400&height=300&seq=208&orientation=landscape",
        },
        {
        id: 3,
        name: "Luxury Getaways",
        description: "Premium travel experiences with exclusive amenities",
        image:
            "https://readdy.ai/api/search-image?query=Luxury%2520overwater%2520bungalows%2520in%2520tropical%2520paradise%2520with%2520crystal%2520clear%2520turquoise%2520water%252C%2520private%2520infinity%2520pools%252C%2520palm%2520trees%2520and%2520perfect%2520white%2520sand%2520beach%252C%2520sunset%2520lighting%2520with%2520golden%2520hues%252C%2520professional%2520luxury%2520travel%2520photography&width=400&height=300&seq=209&orientation=landscape",
        },
        {
        id: 4,
        name: "Family Vacations",
        description: "Memorable journeys for travelers of all ages",
        image:
            "https://readdy.ai/api/search-image?query=Happy%2520family%2520enjoying%2520vacation%2520on%2520beautiful%2520beach%252C%2520parents%2520and%2520children%2520playing%2520in%2520sand%2520and%2520shallow%2520water%252C%2520tropical%2520setting%2520with%2520palm%2520trees%2520and%2520clear%2520blue%2520sky%252C%2520joyful%2520expressions%252C%2520professional%2520family%2520travel%2520photography&width=400&height=300&seq=210&orientation=landscape",
        },
    ]; 
    
    return (
        <div className="min-h-screen bg-white">
            <Header/>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://readdy.ai/api/search-image?query=Stunning%2520panoramic%2520travel%2520destination%2520collage%2520with%2520beautiful%2520beaches%252C%2520mountains%252C%2520ancient%2520temples%2520and%2520city%2520skylines%252C%2520vibrant%2520colors%2520with%2520blue%2520sky%2520and%2520turquoise%2520waters%2520dominating%2520the%2520right%2520side%252C%2520gradient%2520fade%2520to%2520darker%2520blue%2520on%2520left%2520side%2520for%2520text%2520overlay%252C%2520professional%2520travel%2520photography&width=1440&height=600&seq=214&orientation=landscape"
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