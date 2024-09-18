import React from 'react';
import backgroundImage from '../assets/HomeBackgroundimg.jpg'; // Add your background image here
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div
			className="min-h-screen bg-cover bg-center flex items-center justify-center"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="bg-[#2A4D14] bg-opacity-80 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5DC] mb-4 md:mb-6 lg:mb-8">
					Discover the Power of Herbal Plants
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl text-[#D9BF77] mb-4 md:mb-6 lg:mb-8">
					Explore nature’s gifts, learn about herbal remedies, and embrace a
					healthier lifestyle.
				</p>
				<Link to="/herbalplant">
					<button className="bg-[#849974] text-[#F5F5DC] px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-[#D9BF77] text-base md:text-lg lg:text-xl">
						Start Your Journey
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
