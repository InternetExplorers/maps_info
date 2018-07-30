import React from 'react';
import style from './style/Businessinfo.css';

const businessInfo = (props) => {
  return (
    <div>
      <span className={style.MoreBusinessInfoHeading}>
      More business info
      </span>
      <div className={style.MoreBusinessInfo}>
        Take Reservations <b>{props.businessInfo.take_reservations}</b>
        <br />
        Delivery <b>{props.businessInfo.delivery}</b>
        <br />
        Take-out <b>{props.businessInfo.take_out}</b>
        <br />
        Accepts Credit Cards <b>{props.businessInfo.accepts_credit_cards}</b>
        <br />
        Accepts Google Pay <b>{props.businessInfo.accepts_google_pay}</b>
        <br />
        Bike Parking <b>{props.businessInfo.bike_parking}</b>
        <br/>
        Wheelchair Accessible <b>{props.businessInfo.wheelchair_accessible}</b>
        <br />
        Good for Kids <b>{props.businessInfo.good_for_kids}</b>
        <br />
        Good for Groups <b>{props.businessInfo.good_for_groups}</b>
        <br />
        Wi-Fi <b>{props.businessInfo.wi_fi}</b>
        <br />
        Has TV <b>{props.businessInfo.has_tv}</b>
        <br />
        Water Service <b>{props.businessInfo.waiter_service}</b>
        <br />
        Caters <b>{props.businessInfo.caters}</b>
        <br />
        Gender Neutral Restrooms <b>{props.businessInfo.gender_neutral_restrooms}</b>
    </div>
    </div>
  );
};

export default businessInfo