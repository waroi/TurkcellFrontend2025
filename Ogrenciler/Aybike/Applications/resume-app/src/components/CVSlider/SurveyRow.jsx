import SurveyCard from "./SurveyCard"
import styles from "./SurveyRow.module.css"
const SurveyRow = ({ items, direction, renderStars, getStatusClass }) => {
    return (
        <div className={`${styles.scrollingRow} ${direction}`}>
            <div className={`${styles.scrollingContent} py-3`}>
                {items.map((survey) => (
                    <SurveyCard
                        key={survey.id}
                        survey={survey}
                        renderStars={renderStars}
                        getStatusClass={getStatusClass}
                    />
                ))}

                {items.map((survey) => (
                    <SurveyCard
                        key={`copy-${survey.id}`}
                        survey={survey}
                        renderStars={renderStars}
                        getStatusClass={getStatusClass}
                    />
                ))}
            </div>
        </div>
    )
}

export default SurveyRow