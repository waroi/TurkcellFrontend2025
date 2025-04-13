import React from 'react'
import ImageItem from '../../atoms/ImageItem/ImageItem';

interface NavbarLogoProbs {
    src: string;
    text: string;
}


const NavbarLogo = ({ src, text }: NavbarLogoProbs) => {
    return (
        <div>
            <ImageItem src={src} alt={text} width={10} height={10} />
            <h2>{text}</h2>
        </div>
    )
}

export default NavbarLogo