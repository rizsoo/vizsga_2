import React from 'react';
import { useState } from 'react';
import App from './App';

function Card({card}) {
    const [show, setShow] = useState(true);
    const hasDiscount = card.discount;
    const isRecommended = card.recommended;
    
    return(     
        <div id="card" key={card}>
            <h2>{card.title}</h2>
                {
                show?<div className={"options"}>
                    <p>{card.description}</p>
                    <p>{card.price} <b><u>USD</u></b></p>
                </div>
                :
                <div className={"review"}>
                    <p>{card.review}</p>
                    <p><i>({card.reviewer})</i></p>
                </div>
                }
            <div className={"buttons"}>
                <button onClick={() => setShow(!show)}>{show?"Show opinions":"Show description"}</button>
                <button disabled>Add to cart</button>
            </div>
                {
                    (hasDiscount === true)
                    ? <div className={"discount"}>Discount!</div> : null
                }
                {
                    (isRecommended === true)
                    ? <div className={"recommended"}>For you!</div> : null
                }
        </div>
    )
}

export default Card;