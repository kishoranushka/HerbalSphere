import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-[#004d00] text-[#a8d5ba] px-16 py-6">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link to="/" className="text-2xl font-bold">
					HerbalSphere
				</Link>
				<button
					className="lg:hidden flex items-center px-3 py-2 border rounded text-[#a8d5ba] border-[#a8d5ba] hover:text-[#eaf0e4] hover:border-[#eaf0e4]"
					onClick={toggleMenu}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				<div
					className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
					<ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
						<li>
							<Link to="/" className="relative text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-500 rounded-md">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" className="relative text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-500 rounded-md">
								About
							</Link>
						</li>
						<li>
							<Link to="/herbalplant" className="relative text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-500 rounded-md">
								Herbal Plants
							</Link>
						</li>
						{/* <li>
							<Link to="/contact" className="hover:text-[#eaf0e4]">
								Contact
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
