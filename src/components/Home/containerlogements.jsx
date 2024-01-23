import React from 'react';
import Logements from '../../Logements/logements.json'
import Card from './Cards'

const containerlogements = () => {
    return(
        <section className='Logements_container'>
            <ul className='Logements_list'>
                {Logements.map(({ id, title, cover }) => (
                    <Card key={id}
                        id={id}
                        title={title}
                        cover={cover} />
                ))}
            </ul>
        </section>
    )
}

export default containerlogements