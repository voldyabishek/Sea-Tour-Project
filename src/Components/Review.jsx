import React from 'react';
import '../CssComponents/ReviewSection.css'; // Create a separate CSS file for styles
import { Link } from 'react-router-dom';
const reviews = [

    
  {
    name: 'Jane D.',
    text: '"An unforgettable experience! The fishing was incredible and the views were breathtaking!"',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    name: 'John S.',
    text: '"The best vacation ever! Can\'t wait to come back!"',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    name: 'Emily P.',
    text: '"Wonderful experience, the resort staff were so friendly and the snorkeling tour was amazing!"',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'John S.',
    text: '"The best vacation ever! Can\'t wait to come back!"',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    name: 'Emily P.',
    text: '"Wonderful experience, the resort staff were so friendly and the snorkeling tour was amazing!"',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    name: 'Mark T.',
    text: '"Great experience! The food at the resort was delicious, and the boat ride was unforgettable."',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  }
];

const Review = () => {
  return (
    <section className="card1">
      <h4>What Our Guests Say</h4>
      
      {/* Review Carousel or Static List */}
      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            <div className="review-content">
              <p className="review-text">{review.text}</p>
              <div className="reviewer-details">
                <h5 className="reviewer-name">{review.name}</h5>
                <div className="rating">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="star">&#9733;</span> // Star character for rating
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta">
      <button className="cta-button"> Feedback?</button><hr/>
      <a href="/">Leave a Review</a>
      </div>
    </section>
  )
}

export default Review;
