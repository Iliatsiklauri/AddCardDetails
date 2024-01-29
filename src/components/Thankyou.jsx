import React from 'react';
import './thankyou.css';
import Button from './Button';
const Thankyou = () => {
  return (
    <form className="thankyou">
      <img src="Group 9.png" alt="" />
      <div className="content">
        <h1 className="thanks">THANK YOU!</h1>
        <p className="wassup">We’ve added your card details</p>
      </div>
      <Button text={'Continue'} />
    </form>
  );
};

export default Thankyou;
