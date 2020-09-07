import React from 'react';
import StatisticItems from './StatisticItems';
import Notification from '../notifications/Notifications';

let status = false;
export const getStart = flag => {
  return (status = flag);
};
const Statistics = ({ ...props }) => {
  return (
    <>
      <h2>Statistics</h2>
      {status ? (
        <StatisticItems {...props} />
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
export default Statistics;
