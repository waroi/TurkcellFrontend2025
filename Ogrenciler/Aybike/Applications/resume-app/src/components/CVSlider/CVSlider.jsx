import SurveyRow from '../../components/CVSlider/SurveyRow';
import { useCVSlider } from '../../utils/hooks/useCVSlider';
import './CVSlider.css';

const CVSlider = () => {
    const { renderStars, getStatusClass, firstRowItems, secondRowItems } = useCVSlider()

    return (
        <div className="auto-scrolling-surveys">
            <h2 className="text-center mb-4">Canlı Sonuçlanan Değerlendirmeler</h2>

            <SurveyRow
                items={firstRowItems}
                direction="right-to-left"
                renderStars={renderStars}
                getStatusClass={getStatusClass}
            />

            <SurveyRow
                items={secondRowItems}
                direction="left-to-right"
                renderStars={renderStars}
                getStatusClass={getStatusClass}
            />
        </div>
    )
}

export default CVSlider