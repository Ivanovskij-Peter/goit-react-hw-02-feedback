import React from 'react';
import { getStart } from '../statistic/Statistics';

const Feedback = ({ options, onLeaveFeedback }) => {
  const checkBtn = event => {
    getStart(true);
    onLeaveFeedback(event.target.name);
  };
  return (
    <>
      <div>
        {Object.keys(options).map(element => (
          <button onClick={checkBtn} key={element} name={element}></button>
        ))}
      </div>
    </>
  );
};
export default Feedback;
