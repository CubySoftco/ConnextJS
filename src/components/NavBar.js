import React, { useState } from "react";
import { BiSearch, BiMenu } from "react-icons/bi";

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="m-5">
            <nav className="flex justify-between bg-blue-400 p-4 shadow-lg rounded-lg">
                <div className="container flex justify-between items-center mx-auto">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-10 h-10 hover:scale-110 transform transition-transform duration-300"
                            />
                            <span className="text-white text-2xl font-bold hover:text-blue-100 cursor-default transition-colors duration-300">
                                ConnextJS
                            </span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white text-sm bg-blue-800 px-2 py-1 cursor-default rounded-full hover:bg-blue-600 transition-colors duration-300">
                                v1.0.0
                            </span>
                        </div>
                    </div>

                    {/* Search bar for larger screens */}
                    <div className="hidden md:flex items-center bg-blue-800 p-2 rounded-full shadow-inner text-white hover:bg-blue-700 transition-colors duration-300">
                        <div className="px-2">
                            <BiSearch className="text-white text-2xl hover:text-blue-300 transition-colors duration-300" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="bg-transparent border-none focus:outline-none placeholder-blue-300 text-white px-2"
                        />
                        <span className="ml-2 text-blue-300 text-sm mx-5 cursor-default">
                            <kbd className="bg-blue-900 rounded p-1 hover:bg-blue-600 transition-colors duration-300">
                                Ctrl
                            </kbd>{" "}
                            +{" "}
                            <kbd className="bg-blue-900 rounded p-1 hover:bg-blue-600 transition-colors duration-300">
                                L
                            </kbd>
                        </span>
                    </div>

                    {/* Mobile menu icon */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white text-3xl focus:outline-none"
                        >
                            <BiMenu />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu content aligned to the right */}
            {isMobileMenuOpen && (
                <div className="absolute top-20  right-0 w-3/4 p-6 md:hidden rounded-b-lg z-20">
                    <div className="bg-blue-700 p-6 rounded-lg shadow-lg space-y-6">
                        {/* Search bar for mobile */}
                        <div className="flex items-center bg-white p-3 rounded-full shadow-md w-full transition-transform duration-300 focus-within:ring-2 ring-blue-300">
                            <div className="px-2">
                                <BiSearch className="text-blue-600 text-2xl" />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="bg-transparent border-none focus:outline-none placeholder-blue-400 text-blue-600 px-2 w-full"
                            />
                        </div>

                        {/* Divider */}
                        <div className="w-full border-t border-blue-600"></div>

                        {/* Version info for mobile */}
                        <div className="text-center">
                            <span className="text-white text-sm bg-blue-900 px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300">
                                v1.0.0
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default NavBar;
