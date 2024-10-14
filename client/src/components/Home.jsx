import React from 'react';
import backgroundImage from '../assets/green.jpg'; // Add your background image here
import herbsPic from '../assets/Mint.jpg';
import shrubsPic from '../assets/Lavender.jpg';
import treesPic from '../assets/Neem.jpeg';
import climbersPic from '../assets/Climber.jpeg';
import mint from '../assets/Mint.jpg';
import aloe from '../assets/AloeVera.jpeg';

import { Link } from 'react-router-dom';

import { Canvas } from '@react-three/fiber';

import {
	Stage,
	PresentationControls,
	useGLTF,
	OrbitControls,
} from '@react-three/drei';

function Model(props) {
	const { scene } = useGLTF('/src/assets/3dModels/MoneyPlant/scene.gltf');
	// eslint-disable-next-line react/no-unknown-property
	return <primitive object={scene} scale={0.01} {...props} />;
}

const Home = () => {
	return (
		<div>
			{/* First Section: Describe Section */}
			<div
				className="min-h-screen bg-cover bg-center flex items-center justify-center"
				style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.97 }}>
				<div className="bg-[#3a651f] opacity-85 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg text-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5c5] mb-4 md:mb-6 lg:mb-8">
						Discover the Power of Herbal Plants
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl text-[#fad56f] mb-4 md:mb-6 lg:mb-8">
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

			{/* Second Section: Featured Plants */}
			<div className="p-20 bg-[#f0f0e9] text-center">
				<h2 className="text-3xl md:text-4xl font-semibold text-primary mb-20">
					Featured Medicinal Plants
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Aloe Vera Card */}
					<div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent transition-transform duration-300 transform hover:scale-105 hover:border-[#849974]">
						<img
							src={aloe}
							alt="Aloe Vera"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold text-primary mb-4">Aloe Vera</h3>
						<p className="text-lg text-primary">
							Known for its soothing properties, Aloe Vera is great for skin
							health.
						</p>
					</div>

					{/* Peppermint Card */}
					<div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent transition-transform duration-300 transform hover:scale-105 hover:border-[#849974]">
						<img
							src={mint}
							alt="Peppermint"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold text-primary mb-4">Peppermint</h3>
						<p className="text-lg text-primary">
							Helps with digestion and is used in a variety of remedies for
							digestive health.
						</p>
					</div>

					{/* Lavender Card */}
					<div className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent transition-transform duration-300 transform hover:scale-105 hover:border-[#849974]">
						<img
							src={shrubsPic}
							alt="Lavender"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold text-primary mb-4">Lavender</h3>
						<p className="text-lg text-primary">
							Lavender is known for its calming effects and helps with
							relaxation.
						</p>
					</div>
				</div>
			</div>

			{/* Third Section: 3d Models */}
			<div className="p-20 bg-[#a8d5bab3] text-center">
				<h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10">
					Explore 3D Models of Medicinal Plants
				</h2>
				<p className="text-lg text-primary mb-6">
					Our website features interactive 3D models that allow you to explore
					the intricate details of each plant.
				</p>

				{/* Container for 3D Model with Hover Effect and Border Color Change */}
				<div className="relative w-full h-96 transition-transform duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#5b9b695e] rounded-lg">
				<Canvas
						id="plantModel"
						className="w-full h-full rounded-lg shadow-lg"
						// style={{ backgroundColor: '#51a573b3' }}
						dpr={[1, 2]}
						shadows
						camera={{ fov: 45 }}
						style={{ backgroundColor: '#51a573b3', position: 'absolute' }}>
						<color />

						<OrbitControls
							enableZoom={true} // Enables zoom functionality
							zoomSpeed={0.4} // Controls the speed of zooming
						// 	maxDistance={5} // Maximum zoom-out distance
						// 	minDistance={1} // Minimum zoom-in distance
						/>

						<PresentationControls
							speed={0.5}
							global
							zoom={0.9}
							polar={[-1, Math.PI / 4]}>
							<Stage environment={null} intensity={0.04}>
								<Model scale={0.01} />
							</Stage>
						</PresentationControls>
					</Canvas>
				</div>

				<p className="text-lg text-primary mt-6">
					Click and drag to rotate the models and discover their unique
					features.
				</p>
			</div>

			{/* Fourth Section: Types of Plants */}
			<div className="p-20 bg-[#f0f0e9] text-center ">
				<h2 className="text-3xl md:text-4xl font-semibold text-primary text-[#30302ef5] mb-10">
					The journey continues
				</h2>

				<div className="grid grid-cols-1 h-48 w-full md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Herb Box */}
					<Link
						to="/herbs"
						className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
						<img
							src={herbsPic}
							alt="Herbs"
							className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
						/>
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<h3 className="text-3xl text-gray-800  bg-slate-300 p-1 rounded-lg font-bold text-center drop-shadow-lg">
								Herbs
							</h3>
						</div>
					</Link>

					{/* Shrub Box */}
					<Link
						to="/shrubs"
						className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
						<img
							src={shrubsPic}
							alt="Shrubs"
							className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
						/>
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<h3 className="text-3xl text-gray-800   bg-slate-300 p-1 rounded-lg font-bold text-center drop-shadow-lg">
								Shrubs
							</h3>
						</div>
					</Link>

					{/* Tree Box */}
					<Link
						to="/trees"
						className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
						<img
							src={treesPic}
							alt="Trees"
							className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
						/>
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<h3 className="text-3xl text-gray-800  bg-slate-300 p-1 rounded-lg font-bold text-center drop-shadow-lg">
								Trees
							</h3>
						</div>
					</Link>

					{/* Climber Box */}
					<Link
						to="/climbers"
						className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
						<img
							src={climbersPic}
							alt="Climbers"
							className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
						/>
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<h3 className="text-3xl text-gray-800  bg-slate-300 p-1 rounded-lg font-bold text-center drop-shadow-lg">
								Climbers
							</h3>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
