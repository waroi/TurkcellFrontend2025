import "./style.scss"
import ImageItem from '../../atoms/ImageItem/ImageItem';
import H3 from "../../atoms/H3/H3";
import Link from "next/link";

interface NavbarLogoProbs {
    src: string;
    text: string;
}


const NavbarLogo = ({ src, text }: NavbarLogoProbs) => {
    return (
        <Link href="/">
            <div className='logo'>
                <ImageItem src={src} alt={text} width={30} height={30} />
                <H3 text={text} ></H3>

            </div></Link>
    )
}

export default NavbarLogo