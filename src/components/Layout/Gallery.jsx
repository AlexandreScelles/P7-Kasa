import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

const Gallery = (props) => {
    const [current, setCurrent] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow_container img');
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }

    const onNext = () => {
        if(current === props.img.length - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    const onPrev = () => {
        if(current === 0){
            setCurrent(props.img.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    return (
        <div className='slideshow'>
            <div className='slideshow_container' style={{transform: `translateX(-${current * imgSize()}px)`}}>
                {props.img.map((picture, i) =>
                    <img className='slideshow_container_img' alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>

            {props.img.length > 1 && <>
            <div className='slideshow_controls'>
                <i className='slideshow_controls_chevron' onClick={onPrev}>{angleLeft}</i>
                <i className='slideshow_controls_chevron' onClick={onNext}>{angleRight}</i>
            </div>
            <div className='slideshow_idx'>{current + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}

export default Gallery;