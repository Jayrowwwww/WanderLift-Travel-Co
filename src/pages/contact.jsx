import { Link } from "react-router-dom";

export default function Contact() {

    return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://readdy.ai/api/search-image?query=Modern%2520office%2520building%2520with%2520travel%2520agency%2520interior%2520visible%2520through%2520glass%2520windows%252C%2520professional%2520business%2520environment%2520with%2520blue%2520sky%2520and%2520cityscape%2520in%2520background%252C%2520gradient%2520fade%2520to%2520darker%2520blue%2520on%2520left%2520side%2520for%2520text%2520overlay%252C%2520clean%2520architectural%2520lines%252C%2520welcoming%2520entrance%2520with%2520subtle%2520travel%2520themed%2520elements&width=1440&height=500&seq=301&orientation=landscape"
                    alt="WanderLift Travel Co. Office"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-8 py-24 relative z-10">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in <span className="text-blue-300">Touch</span>
                    </h1>

                    <p className="text-lg text-blue-50 mb-8">
                        We're here to answer any questions you may have about our travel
                        services. Reach out to us and we'll respond as soon as we can.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact-form"
                            className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                        >
                            Contact Us Now
                        </a>

                        <a
                            href="#map"
                            className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                        >
                            <i className="fas fa-map-marker-alt mr-2"></i> Find Our Location
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center text-sm text-gray-500">
                    <Link
                        to="/"
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        Home
                    </Link>
                    
                    <i className="fas fa-chevron-right mx-2 text-xs text-gray-400"></i>
                    <span className="text-gray-700">Contact Us</span>
                </div>
            </div>
        </div>

        {/* Contact Information Section */}
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
                <div className="col-span-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Contact Information
                    </h2>

                    {/* Office Address */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-map-marker-alt text-blue-500 text-xl"></i>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Our Office
                        </h3>

                        <p className="text-gray-600 mb-2">
                            123 Iskina Japan, Philippines
                        </p>

                        <p className="text-gray-600">Earth, Universe 1001</p>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-phone-alt text-blue-500 text-xl"></i>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Contact Details
                        </h3>

                        <p className="text-gray-600 mb-2">
                            <span className="font-medium">Phone:</span> +63 123 456 7890
                        </p>

                        <p className="text-gray-600 mb-2">
                            <span className="font-medium">Email:</span> email@example.com
                        </p>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-clock text-blue-500 text-xl"></i>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Business Hours
                        </h3>

                        <ul className="text-gray-600 space-y-2">
                            <li className="flex justify-between">
                                <span>Monday - Friday:</span>
                                <span className="font-medium">9:00 AM - 6:00 PM</span>
                            </li>

                            <li className="flex justify-between">
                                <span>Saturday:</span>
                                <span className="font-medium">10:00 AM - 4:00 PM</span>
                            </li>
                            
                            <li className="flex justify-between">
                                <span>Sunday:</span>
                                <span className="font-medium">Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <i className="fas fa-share-alt text-blue-500 text-xl"></i>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Connect With Us
                        </h3>

                        <div className="flex space-x-4">
                            <a
                            href="#"
                            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a
                            href="#"
                            className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a
                            href="#"
                            className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a
                            href="#"
                            className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors cursor-pointer"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-span-1 lg:col-span-2" id="contact-form">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Send Us a Message
                        </h2>

                        <form action="/submitted" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-gray-700 font-medium mb-2 block">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className='w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-700'
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700 font-medium mb-2 block">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    
                                    <input
                                        type="email"
                                        name="email"
                                        className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-700`}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-700 font-medium mb-2 block">
                                    Subject
                                </label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none text-gray-700"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Booking Question">
                                        Booking Question
                                        </option>
                                        <option value="Tour Information">
                                        Tour Information
                                        </option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Partnership">Partnership</option>
                                    </select>

                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <i className="fas fa-chevron-down text-gray-400"></i>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-700 font-medium mb-2 block">
                                    Message <span className="text-red-500">*</span>
                                </label>

                                <textarea
                                    name="message"
                                    className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-700 h-32`}
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer disabled:bg-blue-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Find Us on the Map
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Visit our office in the heart of New York City. We're conveniently
                        located near major transportation hubs.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-96 relative">
                        {/* Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1085.0483917057243!2d123.96117366798107!3d10.262460809004635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5762be06f%3A0xd4bee3697d587b49!2sCordova%20Public%20College!5e1!3m2!1sen!2sph!4v1746097688354!5m2!1sen!2sph" 
                            width="1000" 
                            height="450"  
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0"
                            title="WanderLift Travel Co. Office Location"
                        ></iframe>
                    </div>

                    {/* Direction */}
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="p-6 flex items-start">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-subway text-blue-500"></i>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    Public Transportation
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Accessible via Motorcad lines at Cordova
                                    Station
                                </p>
                            </div>
                        </div>

                        <div className="p-6 flex items-start">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-parking text-blue-500"></i>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Parking</h3>

                                <p className="text-gray-600 text-sm">
                                    Public parking available at everywhere (2-minute
                                    walk)
                                </p>
                            </div>
                        </div>

                        <div className="p-6 flex items-start">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-utensils text-blue-500"></i>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    Nearby Amenities
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    Restaurants, cafes, and shops within walking distance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>  
  )
}
