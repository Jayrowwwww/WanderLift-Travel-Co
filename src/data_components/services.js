import booking from '../assets/_imgs/service_page/booking.jpeg'
import hotel from '../assets/_imgs/service_page/reserve.jpg'
import tour from '../assets/_imgs/service_page/package.avif'
import insurance from '../assets/_imgs/service_page/insurance.jpg'
import visa from '../assets/_imgs/service_page/visa.jpg'
import rental from '../assets/_imgs/service_page/rental.avif'
import cruise from '../assets/_imgs/service_page/cruise.jpg'
import support from '../assets/_imgs/service_page/support.avif'

const services = [
    {
        id: 1,
        title: "Flight Booking",
        description: "Book domestic and international flights at the best prices.",
        image: booking
    },
    {
        id: 2,
        title: "Hotel Reservations",
        description: "Find and reserve hotels that match your budget and preferences.",
        image: hotel
    },
    {
        id: 3,
        title: "Tour Packages",
        description: "Choose from curated tour packages for destinations worldwide.",
        image: tour
    },
    {
        id: 4,
        title: "Travel Insurance",
        description: "Secure your trip with comprehensive travel insurance coverage.",
        image: insurance
    },
    {
        id: 5,
        title: "Visa Assistance",
        description: "Get help with visa applications and documentation.",
        image: visa
    },
    {
        id: 6,
        title: "Car Rentals",
        description: "Rent vehicles for self-drive or chauffeur services at your destination.",
        image: rental
    },
    {
        id: 7,
        title: "Cruise Bookings",
        description: "Enjoy luxurious cruise vacations with great deals.",
        image: cruise
    },
    {
        id: 8,
        title: "24/7 Customer Support",
        description: "We're here to help you anytime, anywhere.",
        image: support
    },
];

export default services;