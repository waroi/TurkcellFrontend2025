import Link from 'next/link'
import Title from '../Title/Title'
import { Image } from 'react-bootstrap'

type LogoProps = {
    width?: number,
    height?: number,
    className?: string
}

const Logo = (props: LogoProps) => {
    return (
        <div className="d-flex gap-2 align-items-center mb-4">
            <Link href="/" className={`d-flex text-decoration-none gap-2 align-items-center`} style={{ color: "var(--text-color)" }}>
                <Image alt='Logo' width={props.width} height={props.height} src="/logo-without-text.png" />
                <Title as="h6" className={`company fw-bold fs-3 mt-2 ${props.className}`}>
                    Rockie
                </Title>
            </Link>
        </div>
    )
}

export default Logo