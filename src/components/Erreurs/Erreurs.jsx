import React from 'react';
import { NavLink } from 'react-router-dom';

const Erreurcontents = () => {
    return(
            <div className="erreur_contents_content">
                <h1 className="erreur_contents_content_title">404</h1>
                <h2 className="erreur_contents_content_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to="/" className="erreur_contents_content_button">
                    Retour sur la page d'accueil
                </NavLink>
            </div>
    )
}

export default Erreurcontents;