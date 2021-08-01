import React, {useContext, useState} from 'react'
import { cardData } from '../Data/CardData';
import './ListingCard.css'
import clickedContext from './ClickedContex';
const ListingCard = (porps) => {
    const countryClicked = useContext(clickedContext);

    const [data, setData] = useState(cardData);


    return(
        <div className='container'>
        {data.filter(items => countryClicked == items.country).map(items => {
          return(  <div className='card'>
            <img className="img" src={items.image} alt={items.country} />
            <div className="card__body">
                <div className = 'card__body__top__description'>
                <p className='card__body__description'>{items.company}</p>
                <p className='card__body__description'>{items.event} - {items.country}</p>
                </div>
                <p className='card__body__timing'>{items.date}</p>
                <p className='card__body__meeting'>{items.venue} | {items.time}</p>
                <button className='card__body__button'>Register now</button>
            </div>
        </div>
          )
        })}
        </div>
    )
}

export default ListingCard