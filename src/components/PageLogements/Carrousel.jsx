import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = (props) => {
    const [slideIdx, setSlideIdx] = useState(0);

    const onNext = () => setSlideIdx((slideIdx + 1) % props.img.length);
    const onPrev = () => setSlideIdx((slideIdx - 1 + props.img.length) % props.img.length);

    return (
        <div className='slideshow'>
            <div className='slideshow_container' style={{ transform: `translateX(-${slideIdx * 100}%)` }}>
                {props.img.map((picture, i) => 
                    <img className='slideshow_container_img' alt='Logement' src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && (
                <>
                    <div className='slideshow_controls'>
                        <i className='slideshow_controls_chevron' onClick={onPrev}><FontAwesomeIcon icon={faAngleLeft} /></i>
                        <i className='slideshow_controls_chevron' onClick={onNext}><FontAwesomeIcon icon={faAngleRight} /></i>
                    </div>
                    <div className='slideshow_idx'>{slideIdx + 1} / {props.img.length}</div>
                </>
            )}
        </div>
    )
}

export default Gallery;
