import { useMemo } from 'react';
import { CV_DATA, STATUS_CLASSES, ITEMS_PER_ROW } from '../constans/sliderData';

export const useCVSlider = () => {
    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="star filled">★</span>)
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="star half-filled">★</span>)
            } else {
                stars.push(<span key={i} className="star">☆</span>)
            }
        }
        return stars
    }

    const getStatusClass = (status) => {
        return STATUS_CLASSES[status] || STATUS_CLASSES.default
    }

    const sliderRows = useMemo(() => {
        const firstRowItems = CV_DATA.slice(0, ITEMS_PER_ROW)
        const secondRowItems = CV_DATA.slice(ITEMS_PER_ROW, ITEMS_PER_ROW * 2)

        return {
            firstRowItems,
            secondRowItems
        }
    }, [])

    return {
        renderStars,
        getStatusClass,
        ...sliderRows
    }
}