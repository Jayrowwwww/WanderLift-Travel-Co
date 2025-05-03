import africa from '../assets/_imgs/tour_cards_2/African Safari Experience.jpg'
import med from '../assets/_imgs/tour_cards_2/Mediterranean Cruise Adventure.jpg'
import japan from '../assets/_imgs/tour_cards_2/Japanese Cherry Blossom Tour.jpg'
import iceland from '../assets/_imgs/tour_cards_2/Northern Lights Iceland Tour.jpg'
import hike from '../assets/_imgs/tour_cards_2/Patagonian Hiking Adventure.webp'
import bali from '../assets/_imgs/tour_cards_2/Tropical Bali Retreat.jpg'

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
            image: med
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
            image: japan
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
            image: africa
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
            image: iceland
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
            image: bali
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
            image: hike
        }
    ];
export default tourPackages;