import React from 'react'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section  id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
      <div className="portfolio__item-image">

      </div>
      <h3>This is the Portfolio item tittle</h3>
      <a  className='btn'>github</a>
      <a href="" className='btn btn-primary' target='_blank'> Live demo</a>

      </article>

      </div>


    </section>
  )
}

export default Portfolio