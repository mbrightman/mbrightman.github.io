import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Click a card below to see more details about me!</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem src='images/unc-pic.jpg' text='Explore my educational experience!' label='Education' path='/education' />
                <CardItem src='images/work-placeholder.png' text='Get a glimpse into the professional experience I have had so far.' label='Work' path='/work' />
                <CardItem src='images/skills-placeholder.jpg' text='Check out my skills, certifications, and projects!' label='Skills & Projects' path='/skills' />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
// the <ul></ul> tag = rows of cards, so can separate by using more <ul></ul> tags
