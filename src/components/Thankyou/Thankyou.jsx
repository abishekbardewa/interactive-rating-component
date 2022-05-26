import './Thankyou.css';
import thankYou from '../../assets/images/illustration-thank-you.svg';

const Thankyou = ({ isSubmitted, rating, handleSubmit }) => {
	return (
		<>
			{isSubmitted && (
				<div className="thankyou__card__container">
					<img src={thankYou} className="thankyou__card__thankyou" height="80px" alt="star" />
					<div className="thankyou__card__rate-info">
						<p>You selected {rating} out of 5</p>
					</div>
					<div className="thankyou__card__info">
						<h1>Thank you</h1>
						<p> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
					</div>
					<div className="thankyou__card__submit-btn">
						<button onClick={handleSubmit}>Rate Again</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Thankyou;
