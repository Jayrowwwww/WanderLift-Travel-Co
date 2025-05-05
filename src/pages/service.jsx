import Header from "../components/header";
import services from "../data_components/services";

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen ">
        <Header/>
        <div className="py-12 px-4 sm:px-6 lg:px-8">  
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center text-blue-500 mb-10">
                    Our Travel Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-200"
                        >
                            <div className="h-64 overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="mb-4 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"/>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 text-blue-500">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>

                                <Link to="/404error">
                                    <button className="mt-4 text-blue-500 font-medium flex items-center cursor-pointer hover:underline">
                                        LEARN MORE
                                        <i className="fa fa-arrow-right ml-2"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

