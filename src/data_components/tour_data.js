import africa from '../assets/_imgs/tour_cards_2/African Safari Experience.jpg'
import med from '../assets/_imgs/tour_cards_2/Mediterranean Cruise Adventure.jpg'
import japan from '../assets/_imgs/tour_cards_2/Japanese Cherry Blossom Tour.jpg'
import iceland from '../assets/_imgs/tour_cards_2/Northern Lights Iceland Tour.jpg'
import hike from '../assets/_imgs/tour_cards_2/Patagonian Hiking Adventure.webp'
import bali from '../assets/_imgs/tour_cards_2/Tropical Bali Retreat.jpg'
import pic1 from '../assets/_imgs/tour_cards_1/cultural-experience.jpg'
import pic2 from '../assets/_imgs/tour_cards_1/family_vacation.jpg'
import pic3 from '../assets/_imgs/tour_cards_1/hike.avif'
import pic4 from '../assets/_imgs/tour_cards_1/Luxury Getaway.jpg'


export default function TourData() {
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

        const tourCategories = [
        {
        id: 1,
        name: "Adventure Tours",
        description: "Thrilling experiences for the bold traveler",
        image: pic3
        },
        {
        id: 2,
        name: "Cultural Experiences",
        description: "Immerse yourself in local traditions and history",
        image: pic1
        },
        {
        id: 3,
        name: "Luxury Getaways",
        description: "Premium travel experiences with exclusive amenities",
        image: pic4
        },
        {
        id: 4,
        name: "Family Vacations",
        description: "Memorable journeys for travelers of all ages",
        image: pic2
        },
    ]; 


  // State for filter options
  const [destinationFilter, setDestinationFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  // Filter destinations for dropdown
  const destinations = [
    "All",
    ...new Set(tourPackages.map((tour) => tour.destination)),
  ];
  const tourTypes = ["All", ...new Set(tourPackages.map((tour) => tour.type))];
  // Filter tours based on selected filters
  const filteredTours = tourPackages.filter((tour) => {
    return (
      (destinationFilter === "All" || tour.destination === destinationFilter) &&
      (priceFilter === "All" ||
        (priceFilter === "Under $2000" && tour.price < 2000) ||
        (priceFilter === "$2000-$3000" &&
          tour.price >= 2000 &&
          tour.price <= 3000) ||
        (priceFilter === "Over $3000" && tour.price > 3000)) &&
      (durationFilter === "All" ||
        (durationFilter === "Under 7 days" && parseInt(tour.duration) < 7) ||
        (durationFilter === "7-10 days" &&
          parseInt(tour.duration) >= 7 &&
          parseInt(tour.duration) <= 10) ||
        (durationFilter === "Over 10 days" && parseInt(tour.duration) > 10)) &&
      (typeFilter === "All" || tour.type === typeFilter)
    );
  });
  };
