import React, { useState } from 'react';
import './InputCard.css';
import Button from './Button';

function hasNumbers(input) {
  return /\d/.test(input);
}

const InputCard = ({ onInputChange, onFormSubmit }) => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasError1, setHasError1] = useState(false);
  const [hasError2, setHasError2] = useState(false);
  const [hasError3, setHasError3] = useState(false);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const formatCardNumber = (value) => {
    let formattedNumber = value.replace(/\D/g, '');
    formattedNumber = formattedNumber.replace(/(\d{4})/g, '$1 ');
    formattedNumber = formattedNumber.trim();
    return formattedNumber;
  };

  const handleCardholderNameChange = (e) => {
    const input = e.target.value;
    setCardholderName(input);

    const containsNumbers = hasNumbers(input);
    setHasNameError(containsNumbers);

    onInputChange('cardholderName', input);
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const formattedNumber = formatCardNumber(input);
    setCardNumber(formattedNumber);

    setHasError(!/^\d+(\s\d+)*$/.test(input) && /[a-zA-Z]/.test(input));

    onInputChange('cardNumber', formattedNumber);
  };

  const error = (e) => {
    if (e.target.value.trim() === '') {
      setHasError1(true);
    } else {
      setMonth(e.target.value);
      setHasError1(false);
    }

    onInputChange('month', e.target.value);
  };

  const error1 = (e) => {
    if (e.target.value.trim() === '') {
      setHasError2(true);
    } else {
      setYear(e.target.value);
      setHasError2(false);
    }

    onInputChange('year', e.target.value);
  };

  const error2 = (e) => {
    if (e.target.value.trim() === '') {
      setHasError3(true);
    } else {
      setCvc(e.target.value);
      setHasError3(false);
    }

    onInputChange('cvc', e.target.value);
  };

  const sbmt = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <form className="details" onSubmit={sbmt}>
      <div className="name">
        <p className="paragrap">Cardholder Name</p>
        <input
          type="text"
          value={cardholderName}
          onChange={handleCardholderNameChange}
          placeholder="e.g. Jane Appleseed"
          className={`inp1 ${hasNameError ? 'hasNumbers' : ''}`}
          id="cardHolderName"
          maxLength={30}
        />
        {hasNameError && <p className="error5">Name cannot contain numbers</p>}
      </div>
      <div className="cardNumber">
        <p className="paragrap">Card Number</p>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="e.g. 1234 5678 9123 0000"
          className="inp1"
          maxLength={19}
        />
        {hasError && <p className="error">Wrong format, numbers only</p>}
      </div>
      <div className="date-cvc">
        <div className="date">
          <p className="paragrap">Exp. Date (MM/YY)</p>
          <div className="inputs">
            <div>
              <input type="text" onChange={error} placeholder="MM" maxLength={2} />
              {hasError1 && <p className="errorr1">Can’t be blank</p>}
            </div>
            <div>
              <input type="text" placeholder="YY" onChange={error1} maxLength={2} />
              {hasError2 && <p className="errorr1">Can’t be blank</p>}
            </div>
          </div>
        </div>
        <div className="cvc">
          <p className="cvcparag">CVC</p>
          <input
            type="text"
            placeholder="e.g. 123"
            onChange={error2}
            className="lastinput"
            maxLength={3}
          />
          {hasError3 && <p className="errorr2">Can’t be blank</p>}
        </div>
      </div>
      <Button text={'Confirm'} />
    </form>
  );
};

export default InputCard;
