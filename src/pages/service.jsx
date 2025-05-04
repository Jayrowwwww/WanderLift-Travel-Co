import Header from "../components/header";
import services from "../data_components/services";

export default function Services() {
  return (
    <div>
        <Header/>
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">  
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
                Our Travel Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
                        >
                            <div className="mb-4">{service.image}</div>
                            <h3 className="text-xl font-bold mb-2 text-blue-500">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

