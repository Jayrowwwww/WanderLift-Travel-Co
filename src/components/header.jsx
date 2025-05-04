import { Link } from 'react-router-dom'
import logo from '/favicon.png'

export default function Header(){

    function handleMenuClick() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('hidden');
    }


    return(
        <header className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
                <Link to="/" className="cursor-pointer">
                    <div className="text-2xl font-bold text-gray-800 flex items-center">
                        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                            <img src={logo} alt="logo" />
                        </div>
                        WonderLift Travel Co.
                    </div>
                </Link>
            </div>

            <button className='md:hidden flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={handleMenuClick}>
                <i className='fa fa-bars'></i>
            </button>

            <nav className="hidden md:flex items-center space-x-8 font-semibold">
                <Link
                    to="/"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                HOME
                </Link>
                
                <Link
                    to="/about"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    ABOUT
                </Link>

                <Link
                    to="/tour"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    TOUR
                </Link>

                <Link
                    to="/contact"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    CONTACT
                </Link>

                <Link to="/booking" className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                    Book Trip
                </Link>
            </nav>

            <nav className="menu hidden md:hidden absolute top-15 right-4 bg-white shadow-lg rounded-lg p-4 space-y-5 z-99">
                <Link
                    to="/"
                    className="block text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    HOME
                </Link>

                <Link
                    to="/about"
                    className="block text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    ABOUT
                </Link>

                <Link
                    to="/tour"
                    className="block text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    TOUR
                </Link>

                <Link
                    to="/contact"
                    className="block text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    CONTACT
                </Link>

                <Link to="/booking" className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                    Book Trip
                </Link>
            </nav>
        </header>
    )
}