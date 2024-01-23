import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />;
const starGrey = <FontAwesomeIcon icon={faStar} />;

const notes = ({ scaleValue }) => {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className='page_logement_header_hoster_ratings'>
            {range.map(rangeElem => (
                <span
                    key={rangeElem.toString()}
                    className={`page_logement_header_hoster_notes_star${scaleValue >= rangeElem ? '' : ' page_logement_header_hoster_notes_star_grey'}`}
                >
                    {scaleValue >= rangeElem ? star : starGrey}
                </span>
            ))}
        </div>
    );
};

export default notes;