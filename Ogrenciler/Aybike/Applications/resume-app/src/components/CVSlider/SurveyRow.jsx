import SurveyCard from "./SurveyCard"
const SurveyRow = ({ items, direction, renderStars, getStatusClass }) => {
    return (
        <div className={`scrolling-row ${direction}`}>
            <div className="scrolling-content py-3">
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