import { Link } from "react-router-dom"
import logo from '/favicon.png'

export default function Footer(){

    return(
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                  <img src={logo} alt="logo"/>
                </div>
                WanderLift Travel Co.
              </div>
              <p className="text-gray-400 mb-4">
                Elevating your travel experience since 2024.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="https://www.facebook.com/"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="https://www.x.com/"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/tour"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2 text-blue-400"></i>
                  <span className="text-gray-400">
                    123 Iskina Japan, Philippines, Earth, Universe 1001
                  </span>
                </li>

                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-400"></i>
                  <span className="text-gray-400">+63 123 456 7890</span>
                </li>

                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-400"></i>
                  <span className="text-gray-400">email@example.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

              <p className="text-gray-400 mb-4">
                Subscribe to receive updates on special offers and news.
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full w-full border-none text-sm outline-none"
                />
                <button className="bg-blue-500 px-4 py-2 rounded-r-full cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>

              <div className="mt-4 flex space-x-3">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 WanderLift Travel Co. . All rights reserved.</p>
            <span>Created by: Jerreh Romer Salera</span>
          </div>
        </div>
      </footer>
    )
}