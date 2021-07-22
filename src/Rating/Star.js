import React from 'react';

export default function Star(props) {
  return (
    <svg height="25" width="23" className="star rating">
      <polygon
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        style="fill-rule:nonzero;"
        fill="red"
      />
    </svg>
  );
}
