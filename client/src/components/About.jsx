import React from 'react';
import virtualgarden from '../assets/virtualherbalgarden.jpg';
import {
	FaLeaf,
	FaVideo,
	FaSearch,
	FaMapMarkedAlt,
	FaUserFriends,
} from 'react-icons/fa';

const AboutPage = () => {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-5xl font-bold text-center mb-8 text-green-700">
				About HerbalSphere
			</h1>

			<div className="bg-green-100 shadow-lg rounded-lg overflow-hidden p-6 mb-8">
				<h2 className="text-4xl font-semibold text-green-800 mb-4">
					Project Background
				</h2>
				<p className="text-gray-800 text-lg mb-4">
					The AYUSH sector relies heavily on medicinal plants and herbs, which
					form the backbone of traditional healing practices. However, physical
					gardens are not accessible to everyone. A Virtual Herbal Garden will
					bridge this gap by offering a digital platform where users can
					explore, learn, and understand the significance of various medicinal
					plants from the comfort of their homes.
				</p>
				<img
					src={virtualgarden}
					alt="Virtual Herbal Garden"
					className="w-full h-64 object-cover rounded-lg shadow-md"
				/>
			</div>

			<div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-8">
				<h2 className="text-4xl font-semibold text-green-800 mb-4">
					Project Description
				</h2>
				<p className="text-gray-800 text-lg mb-4">
					Participants are tasked with developing a Virtual Herbal Garden that
					is engaging, informative, and user-friendly. This virtual garden
					should include:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="flex items-start space-x-4">
						<FaLeaf className="text-3xl text-green-700" />
						<div>
							<h3 className="text-2xl font-semibold mb-2">
								Interactive 3D Models
							</h3>
							<p className="text-gray-600">
								Realistic 3D models of medicinal plants that users can rotate,
								zoom, and explore from different angles.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-4">
						<FaVideo className="text-3xl text-green-700" />
						<div>
							<h3 className="text-2xl font-semibold mb-2">
								Multimedia Integration
							</h3>
							<p className="text-gray-600">
								High-quality images, videos, and audio descriptions to enhance
								the learning experience.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-4">
						<FaSearch className="text-3xl text-green-700" />
						<div>
							<h3 className="text-2xl font-semibold mb-2">
								Search and Filter Options
							</h3>
							<p className="text-gray-600">
								Advanced search functionality to easily locate specific plants
								and filter them based on various criteria.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-4">
						<FaMapMarkedAlt className="text-3xl text-green-700" />
						<div>
							<h3 className="text-2xl font-semibold mb-2">Virtual Tours</h3>
							<p className="text-gray-600">
								Guided virtual tours highlighting specific themes, such as
								plants for digestive health, immunity, skin care, etc.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-4">
						<FaUserFriends className="text-3xl text-green-700" />
						<div>
							<h3 className="text-2xl font-semibold mb-2">User Interaction</h3>
							<p className="text-gray-600">
								Features that allow users to bookmark favorite plants, take
								notes, and share information on social media.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-green-100 shadow-lg rounded-lg overflow-hidden p-6">
				<h2 className="text-4xl font-semibold text-green-800 mb-4">
					Expected Outcome
				</h2>
				<p className="text-gray-800 text-lg">
					The expected outcome is a comprehensive Virtual Herbal Garden that
					serves as a valuable educational tool for students, practitioners, and
					enthusiasts of the AYUSH sector. This platform should make the
					knowledge of medicinal plants accessible to a wider audience,
					promoting awareness and understanding of traditional herbal practices.
					It should be visually appealing, informative, and interactive,
					providing users with an immersive experience that combines technology
					with traditional knowledge.
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
