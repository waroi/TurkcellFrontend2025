import React from 'react';

interface CategoryTabsProps {
    categories: any
    activeCategory?: string
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
    categories,
    activeCategory = "All"
}) => {
    return (
        <ul className='subHero-list d-flex gap-3 align-items-center'>
            <li className='subHero-item'>
                <a
                    href='#'
                    className={`subHero-link fw-bold px-4 ${activeCategory === 'All' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    All
                </a>
            </li>
            {categories.map((category: string) => (
                <li key={category} className='subHero-item'>
                    <a
                        href='#'
                        className={`subHero-link fw-bold px-4 ${activeCategory === category ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {category}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default CategoryTabs