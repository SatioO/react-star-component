import React from 'react';
import Star from './Star';
import './star.css';

export default function Rating(props) {
  const [currentRating, setCurrentRating] = React.useState(props.defaultRating);
  const star = React.useRef(null);

  React.useEffect(() => {
    setRating();
  }, []);

  function setRating() {
    const stars = star.current.getElementsByClassName('star');
    Array.from(stars).forEach(star => {
      star.style.color = currentRating >= star.dataset.value ? 'red' : 'gray';
    });
  }

  function onMouseHover(ev) {
    
    const stars = ev.target.parentElement.getElementsByClassName('star');
    const hoverValue = ev.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? 'red' : 'gray';
    });
  }

  function onRate(ev) {
    const rating = parseInt(ev.currentTarget.dataset.value);

    setCurrentRating(rating);
  }

  return (
    <div className="rating" ref={star}>
      {[...Array(props.numberOfStars).keys()].map(n => (
        <span
          className="star"
          key={n + 1}
          data-value={n + 1}
          onClick={onRate}
          onMouseOver={onMouseHover}
        >
          <Star />
        </span>
      ))}
    </div>
  );
}
