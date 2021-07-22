import React from 'react';
import Star from './Star';

export default function Rating(props) {
  function onRate(ev) {
    console.log({ ev: ev.target.parentNode });
  }

  return (
    <div className="rating">
      {[...Array(props.numberOfStars).keys()].map(n => (
        <span className="star" key={n + 1} data-value={n + 1} onClick={onRate}>
          <Star />
        </span>
      ))}
    </div>
  );
}
