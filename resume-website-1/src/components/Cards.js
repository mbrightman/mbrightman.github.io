import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Click a card below to see more details about me!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
