
import Link from 'next/link'
import React from 'react'
import ImageItem from '../ImageItem/ImageItem';

interface NavLinkItemProbs {
    href: string;
    text: string;
    src: string;
}

const NavLinkItem = ({ href, text, src = "" }: NavLinkItemProbs) => {
    return (
        <Link href={href} >
            {text} {src != "" ? <ImageItem src={src} width={10} height={10} alt={text} /> : <></>}
        </Link>
    )
}

export default NavLinkItem