import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import logements from '../../Logements/logements.json'
import Collapse from '../layout/collapse';
import Carrousel from '../PageLogements/Carrousel';
import Notes from './Notes';

const PageLogements = () => {

    const { id } = useParams()
    const logement = logements.find(housing => housing.id === id)
    if (logement === undefined) { 
        return <section className="Erreurs">
            <Navigate to="*" />
        </section>
    }

    return (
        <section key={logement.id} className='logement'>

            <Carrousel 
                img={logement.pictures}
            />

            <header className='page_logement_header'>
                <article className='page_logement_header_infos'>
                    <h1 className='page_logement_header_infos_title'>{logement.title}</h1>
                    <h2 className='page_logement_header_infos_location'>{logement.location}</h2>
                    <div className='page_logement_header_infos_tags'>
                        {logement.tags.map((tag, i) => (
                            <p key={i} className='page_logement_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='page_logement_header_hoster'>
                    <div className='page_logement_header_hoster_infos'>
                        <p className='page_logement_header_hoster_infos_prenom'>{logement.host.name}</p>
                        <img src={logement.host.picture} alt='host-cover' className='page_logement_header_hoster_infos_img'/>
                    </div>

                    <Notes 
                    scaleValue={logement.rating}
                    />

                </article>
            </header>

            <article className='page_logement_collapses second_page_collapses'>
            <div className='page_logement_collapses_contents'>

        <Collapse
            title='Description'
            content={logement.description}
        />

        </div>
        <div className='page_logement_collapses_contents second_page_collapses'>

        <Collapse
            title='Équipements'
            content={logement.equipments.map((equipment, i) => (
                   <ul key={i}>
                      <li>• {equipment}</li>
                  </ul>
              ))}
            />
            
        </div>
        </article>
        </section>
    )
}

export default PageLogements;