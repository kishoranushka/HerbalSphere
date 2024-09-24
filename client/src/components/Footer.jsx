import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
	return (
	  <footer className="bg-[#004d00] text-[#ffffff] py-6">
		<div className="container mx-auto text-center">
		  <p className="text-sm mb-4">
			© 2024 HerbalSphere. All rights reserved.
		  </p>
		  <div>
			<a href="/about" className="text-[#ffffff] hover:underline">About Us</a>
			<span className="mx-2">|</span>
			<a href="/contact" className="text-[#ffffff] hover:underline">Contact</a>
		  </div>
		</div>
	  </footer>
	);
  };


export default Footer;
