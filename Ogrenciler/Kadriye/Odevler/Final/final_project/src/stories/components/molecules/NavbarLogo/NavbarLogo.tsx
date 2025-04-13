import "./style.scss"
import ImageItem from '../../atoms/ImageItem/ImageItem';

interface NavbarLogoProbs {
    src: string;
    text: string;
}


const NavbarLogo = ({ src, text }: NavbarLogoProbs) => {
    return (
        <div className='logo'>
            <ImageItem src={src} alt={text} width={30} height={30} />
            <h2 >{text}</h2>
        </div>
    )
}

export default NavbarLogo