import React from 'react';
import Businesshoursentries from './Businesshoursentries.jsx'

const businessHours = (props) => {
  const { businessHours } = props;
  return (
    <div>
      <span className="HoursHeading">
      Hours
      </span>
      <div className="Hours">
      {businessHours.map(value => {
        return <Businesshoursentries hoursData={value} />
      })}
      </div>
    </div>
  );
};

export default businessHours;

