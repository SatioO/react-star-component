import React from 'react';
import Rating from './Rating';
import './style.css';

export default function App() {
  const [defaultRating, setDefaultRating] = React.useState(3);

  return (
    <div>
      <Rating numberOfStars={5} defaultRating={defaultRating} />
    </div>
  );
}
