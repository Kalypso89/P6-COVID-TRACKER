import "./cardTotalStatisticsTracker1Atom.css"

export const CardTotalStatisticsTracker1Atom = (props) => {
    return (
        <div className="col-md-6 col-lg container_covid_total_info">
            <div className="covid_total_info_widget">
                <div className="total_covid_icon">
                    <img src={`./src/assets/icons/${props.image}.svg`} alt="Covid Icon" />
                </div>
                <div className="total_stats_info">
                    <h4>{props.title}</h4>
                    <h3>{props.value}</h3>
                </div>
            </div>
        </div>
    )
}
