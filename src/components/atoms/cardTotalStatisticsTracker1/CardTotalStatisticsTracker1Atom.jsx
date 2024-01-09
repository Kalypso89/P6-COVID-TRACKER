import "./cardTotalStatisticsTracker1Atom.css"

export const CardTotalStatisticsTracker1Atom = () => {
    return (
        <div className="col-md-6 col-lg">
            <div className="covid_total_info_widget">
                <div className="total_covid_icon">
                    <img src="./src/assets/icons/covid-defult.svg" alt="Covid Icon" />
                </div>
                <div className="total_stats_info">
                    <h4>Total Confirmed</h4>
                    <h3>54054</h3>
                </div>
            </div>
        </div>
    )
}
