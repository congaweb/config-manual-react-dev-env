import React from 'react';

export const RandomCountUpApp = ({ count, isComplete }) => {
  const completeStyle = !isComplete ? null : { animationName: 'none' };
  return (
    <div className="randomCountUp">
      <output style={completeStyle}>{count}</output>
    </div>
  );
};
