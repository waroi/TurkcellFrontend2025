import "./style.scss"
import Link from 'next/link'
import ImageItem from '../ImageItem/ImageItem';

interface NavLinkItemProbs {
    href: string;
    text: string;
    src?: string;
    classProp?: string;
}

const NavLinkItem = ({ href, text, src, classProp }: NavLinkItemProbs) => {
    return (
        <Link className={`navlink ${classProp}`} href={href} >
            {text} {src ? <ImageItem src={src} width={10} height={10} alt={text} /> : <></>}
        </Link>
    )
}

export default NavLinkItem