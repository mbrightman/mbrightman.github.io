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
                <CardItem src={require('./images/unc-pic.jpg')} text='Check out my experience at UNC! (Go Heels)' label='Education' path='/education' />
                <CardItem src={require('./images/work-placeholder.png')} text='Get a glimpse into the professional experience I&#8217;ve had so far.' label='Work' path='/work' />
                <CardItem src={require('./images/skills-placeholder.jpg')} text='Skills, certifications, and projects that I&#8217;m proud of!' label='Skills & Projects' path='/skills' />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
// the <ul></ul> tag = rows of cards, so can separate by using more <ul></ul> tags
