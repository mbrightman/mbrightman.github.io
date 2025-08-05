import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Required carousel CSS

import './CertsCarousel.css'
import awsLogo from './images/awscloudpraccert.png'
import comptiaLogo from './images/secpluscert.png'


export const CertsCarousel = () => {
    const certifications = [
        {
            title: 'CompTIA Security+',
            image: comptiaLogo,
            link: 'https://www.credly.com/badges/75d46fb9-de2c-4e67-8ff7-0ac3b9c7866a/public_url'
        },
        {
            title: 'AWS Certified Cloud Practitioner',
            image: awsLogo,
            link: 'https://www.credly.com/badges/b24410ea-743b-47fb-b2c3-90ae799719f8/public_url'
        }
    ];

    return (
        <>
            <div className='carousel-container'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={4000}
                    dynamicHeight
                >
                    {certifications.map((cert, index) => (
                        <div key={index}>
                            <img src={cert.image} alt={cert.title} />
                            <p className='legend'>
                                <a href={cert.link} target='_blank' rel='noopener noreferrer'>
                                    {cert.title}
                                </a>
                            </p>
                        </div>
                    ))}

                </Carousel>
            </div>
        
        </>
    )
}