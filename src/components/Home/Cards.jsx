import React from 'react';

const Cards = ({ id, title, cover }) => {
  return(
      <li key={id} className='Logements'>
          <a href={'/Logements/' + id}>
              <figure className='Logements_figure'>
                  <img src={cover} alt={title}  className='Logements_figure_cover'/>
                  <figcaption className='Logements_figure_figcaption'>
                  <h2 className='Logements_figure_figcaption_title'>{title}</h2>
                  </figcaption>
              </figure>
          </a>
      </li>
  )
}

export default Cards;