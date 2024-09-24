import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-[#003300] text-[#eaf0e4] p-4">
			<div className="container mx-auto flex flex-wrap justify-between items-center">
				<p className="text-center lg:text-left mb-4 lg:mb-0">
					&copy; 2024 HerbalSphere. All rights reserved.
				</p>
				<ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
					<li>
						<Link to="/" className="hover:text-[#a8d5ba]">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="hover:text-[#a8d5ba]">
							About
						</Link>
					</li>
					<li>
						<Link to="/herbalplant" className="hover:text-[#a8d5ba]">
							Herbal Plants
						</Link>
					</li>
					{/* <li>
						<Link to="/contact" className="hover:text-[#a8d5ba]">
							Contact
						</Link>
					</li> */}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
