import React from 'react';

const StatisticItems = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback:{positivePercentage}</p>
  </>
);
export default StatisticItems;
