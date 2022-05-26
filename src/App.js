import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Rating from './components/Rating/Rating';
import Thankyou from './components/Thankyou/Thankyou';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [rating, setRating] = useState('5');

	const handleRating = (e) => {
		console.log(e.target.innerText);
		setRating(e.target.innerText);
	};

	const handleSubmit = () => {
		setIsSubmitted((prevRating) => !prevRating);
	};

	return (
		<main>
			<Rating isSubmitted={isSubmitted} handleRating={handleRating} handleSubmit={handleSubmit} />
			<Thankyou isSubmitted={isSubmitted} rating={rating} handleSubmit={handleSubmit} />
			<Footer />
		</main>
	);
}

export default App;
