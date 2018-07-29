import React from 'react';

const businessHoursEntries = (props) => {
  return (
    <tr>
      <td>
      <b>
      {props.hoursData.tag} &emsp;
      </b>
      </td>
      {props.hoursData.val}
      <br />
    </tr>
  );
};

export default businessHoursEntries;
