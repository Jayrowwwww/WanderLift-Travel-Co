import { Link } from "react-router-dom"
import Header from "../components/header"
import teamMembers from "../data_components/staff"
import testimonials from "../data_components/review"
import timelineEvents from "../data_components/timeline"
import airport from "../assets/_imgs/bg/sec_page.jpg"
import plane_wing from "../assets/_imgs/bg/sec_page _lower.jpg"


export default function About() {

    return (
        <div className="min-h-screen bg-white">
            <Header/>
        {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={airport}
                        alt="WanderLift Travel Co. Office"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 py-24 relative z-10">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-blue-300">Story</span>
                        </h1>

                        <p className="text-lg text-blue-50 mb-8">
                            Since 2024, WanderLift Travel Co. has been dedicated to transforming the way
                            people experience air travel. What began as a small charter
                            service has grown into a global aviation company committed to
                            excellence, innovation, and unforgettable journeys.
                        </p>

                        <Link to="/services">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium cursor-pointer">
                                Our Services
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company History Timeline */}
            <section className="container mx-auto px-4 py-15">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Journey Through The Years
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From our humble beginnings to becoming a leader in the aviation
                        industry, our path has been defined by innovation, dedication, and a
                        passion for exceptional travel experiences.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute hidden sm:flex sm:left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`flex items-center ${index % 2 === 0  ? "flex-row" : "flex-row-reverse"}`}
                            >
                                <div className="w-1 sm:w-1/2"></div>
                                    <div className={`z-10 w-12 h-12 rounded-full bg-blue-500 flex ${index % 2 === 0 ? "rotate-180 bg-blue-900" : "rotate-0"}  items-center justify-center shadow-lg`}>
                                        <i className="fa fa-plane text-white"></i>
                                    </div>

                                <div className={`hidden 2xl:inline absolute bg-blue-200 w-10 h-1 ${index % 2 === 0 ? "right-175" : "left-175" }`}></div>

                                <div
                                    className={`w-1/2 p-6 z-1 ${index % 2 === 0 ? "pr-5" : "pl-5"}`}
                                    >
                                    <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                                        <span className="text-blue-500 text-2xl font-bold">{event.year}</span>
                                        <h3 className="text-xl font-semibold text-gray-800 mt-2">{event.title}</h3>
                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Mission & Values */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Mission & Values
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                        At WanderLift Travel Co., we're guided by a clear mission and core values that
                        shape every aspect of our service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fa fa-compass text-blue-500 text-2xl"></i>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Our Mission
                            </h3>

                            <p className="text-gray-600">
                                To connect people with extraordinary destinations through safe,
                                comfortable, and memorable flight experiences that exceed
                                expectations at every altitude.
                            </p>

                            </div>
                            {/* Vision */}
                            <div className="bg-blue-500 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                                    <i className="fa fa-eye text-sky-600 text-2xl"></i>
                                </div>
                                    
                                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>

                                <p className="text-blue-50">
                                    To be the world's most trusted aviation company, setting new
                                    standards for customer-centric travel experiences while leading
                                    the industry in innovation and sustainability.
                                </p>
                            </div>

                            {/* Values */}
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <i className="fa fa-heart text-blue-500 text-2xl"></i>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Our Values
                                </h3>

                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <i className="fa fa-check text-blue-500 mr-2"></i> Safety
                                        Above All
                                    </li>

                                    <li className="flex items-center">
                                        <i className="fa fa-check text-blue-500 mr-2"></i> Customer
                                        Excellence
                                    </li>

                                    <li className="flex items-center">
                                        <i className="fa fa-check text-blue-500 mr-2"></i> Innovation
                                        & Adaptability
                                    </li>

                                    <li className="flex items-center">
                                        <i className="fa fa-check text-blue-500 mr-2"></i>{" "}
                                        Environmental Responsibility
                                    </li>

                                    <li className="flex items-center">
                                        <i className="fa fa-check text-blue-500 mr-2"></i> Integrity
                                        & Transparency
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Achievement Showcase */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Achievements
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Numbers that reflect our commitment to excellence and customer
                        satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                        <div className="text-4xl font-bold text-blue-500 mb-2">1</div>
                        <p className="text-gray-600">Year in Business</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                        <div className="text-4xl font-bold text-blue-500 mb-2">250K+</div>
                        <p className="text-gray-600">Flights Completed</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                        <div className="text-4xl font-bold text-blue-500 mb-2">120+</div>
                        <p className="text-gray-600">Destinations Served</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
                        <div className="text-4xl font-bold text-blue-500 mb-2">1.5M+</div>
                        <p className="text-gray-600">Happy Customers</p>
                    </div>
                </div>
            </section>
            {/* Team Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Meet Our Leadership Team
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The passionate professionals behind WanderLift Travel Co. who work tirelessly
                            to ensure your journey is extraordinary.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {member.name}
                                </h3>

                                <p className="text-blue-500 mb-3">{member.position}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                                
                                <div className="mt-4 flex space-x-3">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-blue-500 cursor-pointer"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Customer Testimonials */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it – hear from travelers who have
                        experienced the WanderLift Travel Co. difference.
                    </p>
                </div>

                <div className="flex flex-col space-y-15">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className="shadow-xl px-5 py-10 rounded-xl ">
                            <div className="overflow-hidden ml-10">
                                <div className="rounded-full h-30 w-30 overflow-hidden shadow-lg">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="h-full  object-cover"/>
                                </div>

                                <div className="mt-3">
                                    <h1 className="text-2xl text-gray-800 font-semibold">{testimonial.name}</h1>
                                    <h3 className="text-lg text-blue-600">{testimonial.location}</h3>
                                    <p className="mt-2 text-gray-800 text-lg">{testimonial.quote}</p>
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold mt-5">Rating:</h2>

                                        <h2 className="mt-5 ml-2">          
                                            {[...Array(5)].map((_, star) => (
                                                <div
                                                    key={star}
                                                    className={`fa fa-star ${star < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                ></div>
                                            ))} 
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Awards & Recognition */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Awards & Recognition
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our commitment to excellence has been recognized by industry
                            leaders and organizations worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fa fa-award"></i>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Best Airline Service
                            </h3>

                            <p className="text-gray-500 text-sm">Global Travel Awards 2024</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fa fa-trophy"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Customer Satisfaction
                            </h3>
                            <p className="text-gray-500 text-sm">
                                International Service Excellence
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fa fa-leaf"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Green Initiative
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Sustainable Aviation Council
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="text-5xl text-blue-500 mb-4">
                                <i className="fa fa-star"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                5-Star Rating
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Skytrax World Airline Rating
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* semi-footer */}
            <section className="relative py-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src={plane_wing}
                        alt="Airplane flying through sunset"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gray-900/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-2xl mx-auto text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Experience the WanderLift Travel Co. Difference?
                        </h2>
                        
                        <p className="text-lg mb-8">
                            Join thousands of satisfied travelers who have discovered the
                            perfect blend of comfort, convenience, and exceptional service
                            that defines the WanderLift Travel Co. experience.
                        </p>

                        <a href='/booking'>
                            <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium  cursor-pointer">
                                Book Your Journey Today
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}