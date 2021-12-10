import './RandomCountUp.css';
import React from 'react';

export const RandomCountUp = ({ count, isComplete }) => {
  const completeStyle = !isComplete ? null : { animationName: 'none' };
  return (
    <div className="randomCountUp" data-testid="container">
      <output style={completeStyle}>{count}</output>
    </div>
  );
};
