import React from 'react';

const businessInfo = (props) => {
  return (
    <div>
      <b>More business info</b><br></br>
      <b>Take Reservations</b> {props.businessInfo.take_reservations}
      <br />
      <b>Delivery</b> {props.businessInfo.delivery}
      <br />
      <b>Take-out</b> {props.businessInfo.take_out}
      <br />
      <b>Accepts Credit Cards</b> {props.businessInfo.accepts_credit_cards}
      <br />
      <b>Accepts Google Pay</b> {props.businessInfo.accepts_google_pay}
      <br />
      <b>Bike Parking</b> {props.businessInfo.bike_parking}
      <br/>
      <b>Wheelchair Accessible</b> {props.businessInfo.wheelchair_accessible}
      <br />
      <b>Good for Kids</b> {props.businessInfo.good_for_kids}
      <br />
      <b>Good for Groups</b> {props.businessInfo.good_for_groups}
      <br />
      <b>Wi-Fi</b> {props.businessInfo.wi_fi}
      <br />
      <b>Has TV</b> {props.businessInfo.has_tv}
      <br />
      <b>Water Service</b> {props.businessInfo.waiter_service}
      <br />
      <b>Caters</b> {props.businessInfo.caters}
      <br />
      <b>Gender Neutral Restrooms</b> {props.businessInfo.gender_neutral_restrooms}
    </div>
  );
};

export default businessInfo