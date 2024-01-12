import "./cardCountryStatisticsTracker1Atom.css"

export const CardCountryStatisticsTracker1Atom = (props) => {
    return (
        <div className="col-md-4 col-lg-6 col-6 container_covid_info">
            <div className="covid_info_widget">
                <div className="covid_icon">
                    <img src={`./src/assets/icons/${props.image}.svg`} alt="Covid Icon" />
                </div>
                <div className="stats_info">
                    <h4>{props.title}</h4>
                    <h3 style={props.style}>{props.value}</h3>
                </div>
            </div>
        </div>
    )
}

