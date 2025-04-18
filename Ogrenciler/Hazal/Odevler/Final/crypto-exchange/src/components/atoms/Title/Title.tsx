

interface TitleProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
}

const Title = ({ as = 'h1', children, className = '' }: TitleProps) => {
    const Tag = as

    return (
        <Tag className={`${className}`}>{children}</Tag>
    )
}

export default Title
