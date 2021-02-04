import React, { useState, useCallback } from 'react';
import "./CreditCard.css";
import visa from '../images/1.png'
import { InputNumber, InputCVV, InputDate } from './InputStyles.jsx';

export const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [CVV, setCVV] = useState('');
    const [date, setDate] = useState('');
    const [isCardNumber, setIsCardNumber] = useState(false);
    const [isCVV, setIsCVV] = useState(false)
    const [isDate, setIsDate] = useState(null)


    const isTrueCardNumber = useCallback((e) => {
        const {value} = e.target;

        value.length < 20 && setCardNumber(value
            .replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
            .trimRight())

        value.match(/\d{4}([\s]|)\d{4}([\s]|)\d{4}([\s]|)\d{4}/) !== null &&
            value.startsWith('4') ?
            setIsCardNumber(true) : setIsCardNumber(false)
    }, [cardNumber])

    const isTrueCVV = useCallback((e) =>{
        const {value} = e.target;

        value.length <= 3 && setCVV(value)

        value.match(/\d{3}/)!==null ? setIsCVV(true) : setIsCVV(false)
    }, [CVV])

    const isTrueDate = useCallback((e) =>{
        const {value} = e.target;

        value.length < 8 && setDate(value.length === 2 ? value + '/' : value)

        const monthAndYear = value.split('/');
        const [month, year] = monthAndYear;
        const currentDate = Date.parse(new Date().getFullYear()) 
            + Date.parse(new Date().getMonth());
        const inputDate = Date.parse(+month) + Date.parse(+year);

        currentDate < inputDate && +month <= 12 && 
            +year < new Date().getFullYear() + 6 ? 
            setIsDate(true) : setIsDate(false)
    }, [date])

    const pay = useCallback(() => {
        isCardNumber && isCVV && isDate ?
            alert("Successfully payed!") : alert("Input fields*")
    },[cardNumber,date,CVV])


    return(
        <div>
            <div className="background"></div>
            <div className="fon-block"></div>
            <div className="pay-block">
                <div className="pay-block__detail detail">
                    <p className="detail__headers">TOTAL</p>
                    <p className="detail__total-price">$898</p>
                    <p className="detail__headers">DETAIL</p>
                    <div className="detail__gadget-container">
                        <p className="detail__gadgets">iPad Pro</p>
                        <p className="detail__price">$799</p>
                    </div>
                    <div className="detail__gadget-container">
                        <p className="detail__gadgets">Apple Pencil</p>
                        <p className="detail__price">$99</p>
                    </div>
                    <button 
                        type="button" 
                        className="detail__button-pay"
                        onClick={pay}
                    >
                        PAY NOW
                    </button>
                </div>
                <div className="credit-card">
                    <h2 className="credit-card__owner">Carly Ling</h2>
                    <img className="credit-card__type" src={visa} alt="VISA"/>
                    <h4 className="credit-card__number">Credit Card Number</h4>
                    <InputNumber 
                        type="text" 
                        id="cardNumber"
                        value={cardNumber} 
                        emptyInput={cardNumber ===''} 
                        border = {isCardNumber} 
                        boxShadow={isCardNumber} 
                        onChange={isTrueCardNumber} 
                    />
                    <div>
                        <h4 className="credit-card__below-headers">Expiration</h4>
                        <h4 className="credit-card__below-headers">CVV</h4>
                    </div>
                    <div className="credit-card__below-inputs">  
                        <InputDate  
                            value={date} 
                            id="date"
                            emptyInput={date ===''} 
                            border = {isDate} 
                            boxShadow={isDate} 
                            onChange={isTrueDate}
                        />
                        <InputCVV 
                            type="password" 
                            id="cvv"
                            value={CVV} 
                            emptyInput={CVV ===''} 
                            border = {isCVV} 
                            boxShadow={isCVV} 
                            onChange={isTrueCVV}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
