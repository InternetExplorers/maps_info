import React from 'react';

const businessHoursEntries = (props) => {
  return (
    <span>
      <b>
      {props.hoursData.tag} &emsp;
      </b>
      {props.hoursData.val}
      <br />
    </span>
  );
};

export default businessHoursEntries;
