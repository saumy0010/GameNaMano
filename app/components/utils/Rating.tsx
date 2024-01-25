import React from 'react';
import styles from './StarRating.module.css'; // Import your CSS module

interface RatingProps {
  rating: number;
  fillColor?: string;
  borderColor?: string;
}

const Rating: React.FC<RatingProps> = ({ rating, fillColor = '#FFD700', borderColor = '#000000' }) => {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = (rating % 1) * 100;

  const renderStars = (count: number, type: 'full' | 'partial' | 'empty') => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} className={`${styles.star} ${type}`}>&#9733;</span>
    ));
  };

  return (
    <div className={styles.starRating} aria-label={`Rating: ${rating}`}>
      {renderStars(fullStars, 'full')}
      {partialStarPercentage > 0 && renderStars(1, 'partial')}
      {renderStars(5 - fullStars - (partialStarPercentage > 0 ? 1 : 0), 'empty')}
    </div>
  );
};

export default Rating;
