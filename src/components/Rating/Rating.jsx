import './Rating.css';
import iconStar from '../../assets/images/icon-star.svg';

const Rating = ({ isSubmitted, handleRating, handleSubmit }) => {
	return (
		<>
			{!isSubmitted && (
				<div className="rating__card__container">
					<img src={iconStar} className="rating__card__star" alt="star" />
					<div className="rating__card__info">
						<h1>How did we do?</h1>
						<p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
					</div>
					`
					<div className="rating__card__rate-btn">
						<button onClick={handleRating}>1</button>
						<button onClick={handleRating}>2</button>
						<button onClick={handleRating}>3</button>
						<button onClick={handleRating}>4</button>
						<button onClick={handleRating}>5</button>
					</div>
					<div className="rating__card__submit-btn">
						<button onClick={handleSubmit}>Submit</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Rating;
