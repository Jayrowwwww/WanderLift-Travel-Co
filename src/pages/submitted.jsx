import { Link } from "react-router-dom";

export default function Submitted() {

    return (
        <div className="container mx-auto px-4 py-20 flex items-center justify-center">
            <div className="px-20 py-10 flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-lg">
                <i className="fa fa-check-circle text-green-500 text-[100px] mb-4"></i>
                <h1 className="text-6xl font-bold text-gray-800 mb-4">Thank You!</h1>
                <p className="text-lg text-gray-600 mb-8">Your message has been submitted successfully. <br /> we will get in touch to you as soon as possible</p>

                <p className="text-lg text-gray-600 mb-8">We appreciate your interest in our services.</p>
                <Link to="/" className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium cursor-pointer">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}