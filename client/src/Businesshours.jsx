import React from 'react';

const businessHours = (props) => {
  return (
    <div>
      <b>Hours</b>
      <br></br>
      <b>Mon</b> {props.businessHours.mon}
      <br />
      <b>Tue</b> {props.businessHours.tue}
      <br />
      <b>Wed</b> {props.businessHours.wed}
      <br />
      <b>Thu</b> {props.businessHours.thu}
      <br />
      <b>Fri</b> {props.businessHours.fri}
      <br />
      <b>Sat</b> {props.businessHours.sat}
      <br />
      <b>Sun</b> {props.businessHours.sun}
      <br />
    </div>
  );
};

export default businessHours