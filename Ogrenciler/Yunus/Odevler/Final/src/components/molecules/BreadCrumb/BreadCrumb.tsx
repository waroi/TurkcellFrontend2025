import Title from '@/components/atoms/Title/Title'
import './BreadCrumb.scss'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'

type BreadcrumbProps = {
    title: string,
    path: string[]
}

const BreadCrumb = ({ title, path }: BreadcrumbProps) => {
    return (
        <div className="breadcrumb w-100">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Title className='fw-bold title' as='h3'>
                        {title}
                    </Title>

                    <Paragraph className='path d-flex gap-3'>
                        {path.map((path, index) => (
                            <span key={index}>
                                {path}
                            </span>
                        ))}
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb