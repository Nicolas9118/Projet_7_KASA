import React from "react";
import { useState } from "react";
import "./style.css";

const Carrousel = ({slides}) => {
    const [currentPictures, setCurrentPictures] = useState(0);
    const length = slides.length; // savoir cb il y a d'images dans le carrousel
    
    // Image suivante si on est a l'avant dernière image du tableau alors retour à la première sinon image suivante
    const nextPictures = () => {
        setCurrentPictures(currentPictures === length - 1 ? 0 : currentPictures + 1);
    }

    // Image précédente si on est à la première image alors aller à la dernière sinon image précédente
    const prevPictures = () => {
        setCurrentPictures(currentPictures === 0 ? length -1 : currentPictures - 1)
    }

    return (
        // <div>
            <div className="carrouselMobile">
                <button
                    onClick={prevPictures}
                    className="buttonMobile prevMobile"> 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.51 3.87003L15.74 2.10003L5.84001 12L15.74 21.9L17.51 20.13L9.38001 12L17.51 3.87003Z" fill="white"/>
                        </svg>
                </button>
                <button
                    onClick={nextPictures}
                    className="buttonMobile nextMobile">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.09998L6.48999 3.86998L14.62 12L6.48999 20.13Z" fill="white"/>
                        </svg>
                </button>
                {/* Pour chaque ligne du tableau afficher l'image correspondante et changer les classes et garder la clé au numéro de l'index du map */}
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === currentPictures ? 'slideMobile active' : 'slideMobile'}
                            key={index}> 
                        {index === currentPictures && (
                            <img src={slide.image} alt="Descirtion du logement" className="pictureMobile" />
                        )}
                        </div>
                    );
                })}
            </div>
        // </div>
    )
}

export default Carrousel;