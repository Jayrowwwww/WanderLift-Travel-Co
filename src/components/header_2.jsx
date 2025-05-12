import logo from '/favicon.png'
import { Link } from 'react-router-dom'

export default function Header_2(){

    return(
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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

                <Link to="/" className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
                    <i className="fa fa-arrow-left mr-2"></i>
                    Back to Home
                </Link>
            </div>
        </header>
    )
}