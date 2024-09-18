import React from 'react';
import Tulsi from '../assets/Tulsi.jpg';
import Mint from '../assets/Mint.jpg';
import Ginger from '../assets/Ginger.jpg';
import Lavender from '../assets/Lavender.jpg';
import Rosemary from '../assets/Rosemary.jpg';
import Chamomile from '../assets/chamomile.jpg';

const plants = [
	{
		id: 1,
		image: Tulsi,
		commonName: 'Tulsi',
		scientificName: 'Ocimum sanctum',
		features: 'Aromatic, green leaves',
		benefits: 'Boosts immunity, reduces stress',
		bestTime: 'Monsoon',
		nursery: 'Local nurseries',
		diseases: 'Common cold, cough',
	},
	{
		id: 2,
		image: Mint,
		commonName: 'Mint',
		scientificName: 'Mentha',
		features: 'Fragrant, serrated leaves',
		benefits: 'Aids digestion, relieves headaches',
		bestTime: 'Spring',
		nursery: 'Botanical gardens',
		diseases: 'Digestive issues, nausea',
	},
	{
		id: 3,
		image: Lavender,
		commonName: 'Lavender',
		scientificName: 'Lavandula angustifolia',
		features: 'Purple flowers, aromatic',
		benefits: 'Reduces anxiety, aids sleep',
		bestTime: 'Summer',
		nursery: 'Specialty plant shops',
		diseases: 'Insomnia, anxiety',
	},
	{
		id: 4,
		image: Chamomile,
		commonName: 'Chamomile',
		scientificName: 'Matricaria chamomilla',
		features: 'Small daisy-like flowers',
		benefits: 'Calms nerves, aids digestion',
		bestTime: 'Spring to summer',
		nursery: 'Herb nurseries',
		diseases: 'Insomnia, digestive issues',
	},
	{
		id: 5,
		image: Rosemary,
		commonName: 'Rosemary',
		scientificName: 'Rosmarinus officinalis',
		features: 'Needle-like leaves, fragrant',
		benefits: 'Improves memory, boosts mood',
		bestTime: 'Spring',
		nursery: 'Garden centers',
		diseases: 'Memory issues, depression',
	},
	{
		id: 6,
		image: Ginger,
		commonName: 'Ginger',
		scientificName: 'Zingiber officinale',
		features: 'Tubular root, spicy aroma',
		benefits: 'Relieves nausea, anti-inflammatory',
		bestTime: 'Tropical climates',
		nursery: 'Specialty herb stores',
		diseases: 'Nausea, inflammation',
	},
	// Add more plant objects as needed
];

const HerbalPlants = () => {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-4xl font-bold text-center mb-8">Herbal Plants</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{plants.map((plant) => (
					<div
						key={plant.id}
						className="bg-white shadow-lg rounded-lg overflow-hidden">
						<img
							src={plant.image}
							alt={plant.commonName}
							className="w-full h-96 object-cover"
						/>
						<div className="p-6">
							<h2 className="text-2xl font-semibold mb-2">
								{plant.commonName}
							</h2>
							<p className="text-gray-600 mb-2">
								<strong>Scientific Name:</strong> {plant.scientificName}
							</p>
							<p className="text-gray-600 mb-2">
								<strong>Features:</strong> {plant.features}
							</p>
							<p className="text-gray-600 mb-2">
								<strong>Medical Benefits:</strong> {plant.benefits}
							</p>
							<p className="text-gray-600 mb-2">
								<strong>Best Time for Plantation:</strong> {plant.bestTime}
							</p>
							<p className="text-gray-600 mb-2">
								<strong>Nearest Nursery:</strong> {plant.nursery}
							</p>
							<p className="text-gray-600 mb-2">
								<strong>Curable Diseases:</strong> {plant.diseases}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HerbalPlants;
