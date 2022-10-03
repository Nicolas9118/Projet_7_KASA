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
            <div className="carrousel">
                <button
                    onClick={prevPictures}
                    className="button prev"> 
                        <svg width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.0399 15.7831L62.9199 8.70312L23.3599 48.3031L62.9599 87.9031L70.0399 80.8231L37.5199 48.3031L70.0399 15.7831Z" fill="white"/>
                        </svg>
                </button>
                <button
                    onClick={nextPictures}
                    className="button next">
                        <svg width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white"/>
                        </svg>
                </button>

                {/* Pour chaque ligne du tableau afficher l'image correspondante et changer les classes et garder la clé au numéro de l'index du map */}
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === currentPictures ? 'slide active' : 'slide'}
                            key={index}> 
                        {index === currentPictures && (
                            <img src={slide.image} alt="Descirtion du logement" className="picture" />
                        )}
                        </div>
                    );
                })}
            </div>
        // </div>
    )
}

export default Carrousel;