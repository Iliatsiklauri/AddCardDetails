// App.jsx
import React, { useState } from 'react';
import InputCard from './components/InputCard';
import './App.css';
import Thankyou from './components/Thankyou';

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardholderName: 'JANE APPLESEED',
    cardNumber: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
    submit: false,
  });

  const handleInputChange = (fieldName, value) => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      [fieldName]: value,
    }));
  };

  const handleFormSubmit = () => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      submit: true,
    }));
  };

  return (
    <>
      {cardInfo.submit ? (
        <div className="wrapper">
          <img src="public\Group 10.png" alt="" className="bigleft" />
          <div className="images">
            <div className="backside">
              <img src="public\Group 6.png" alt="" className="whiteback ss" />
              <img src="public\Rectangle (1).png" alt="" className="blackline ss" />
              <img src="public\Group 12 (1).png" alt="" className="greyline ss" />
              <p className="backcvc">{cardInfo.cvc}</p>
            </div>
            <div className="frontside">
              <img src="public\Group 8.png" alt="" className="twoball ss" />
              <img src="public\Oval Copy 3.png" alt="" className="maincard ss" />
              <p className="cardnumber ss">{cardInfo.cardNumber}</p>
              <div className="bottomdetails">
                <p className="cardName">{cardInfo.cardholderName}</p>
                <p className="cardDate">{`${cardInfo.month}/${cardInfo.year}`}</p>
              </div>
            </div>
          </div>
          <img src="public\Mask.png" alt="" className="img" />
          <Thankyou />
        </div>
      ) : (
        <div className="wrapper">
          <img src="public\Group 10.png" alt="" className="bigleft" />
          <div className="images">
            <div className="backside">
              <img src="public\Group 6.png" alt="" className="whiteback ss" />
              <img src="public\Rectangle (1).png" alt="" className="blackline ss" />
              <img src="public\Group 12 (1).png" alt="" className="greyline ss" />
              <p className="backcvc">{cardInfo.cvc}</p>
            </div>
            <div className="frontside">
              <img src="public\Group 8.png" alt="" className="twoball ss" />
              <img src="public\Oval Copy 3.png" alt="" className="maincard ss" />
              <p className="cardnumber ss">{cardInfo.cardNumber}</p>
              <div className="bottomdetails">
                <p className="cardName">{cardInfo.cardholderName}</p>
                <p className="cardDate">{`${cardInfo.month}/${cardInfo.year}`}</p>
              </div>
            </div>
          </div>
          <InputCard onInputChange={handleInputChange} onFormSubmit={handleFormSubmit} />
          <img src="public\Mask.png" alt="" className="img" />
        </div>
      )}
    </>
  );
}

export default App;
