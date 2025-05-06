import { Link } from "react-router-dom"

export default function Error(){

    return(
        <div className="flex justify-center items-center h-screen bg-gray-100 px-10">
            <div className="container mx-auto flex flex-col items-center px-5 md:px-20 bg-white rounded-xl shadow-lg text-gray-800 h-100 text-center">
                <h1 className="text-[130px] font-semibold">404</h1>
                <h3 className="text-3xl font-semibold">Page Not Found</h3>
                <p className="text-lg mt-2">The resources requested is not found in the server</p>

                <Link to="/" className="mt-5">
                    <button className="flex items-center bg-gray-600 hover:bg-blue-500 text-gray-300 hover:text-gray-100 px-5 py-2 rounded-3xl cursor-pointer transition-colors duration-100">
                        <i className="fa fa-arrow-left mr-1"></i>
                        <h2>Back Home</h2>
                    </button>
                </Link>
            </div>
        </div>
    )
}