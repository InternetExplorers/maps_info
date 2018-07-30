import React from 'react';
import Businesshoursentries from './Businesshoursentries.jsx';
import style from './style/Businesshours.css'

const businessHours = (props) => {
  const { businessHours } = props;
  return (
    <div>
      <span className={style.HoursHeading}>
      Hours
      </span>
      <div className={style.Hours}>
      {businessHours.map(value => {
        return <Businesshoursentries hoursData={value} />
      })}
      </div>
    </div>
  );
};

export default businessHours;

