import "./selectCountryTracker1Atom.css"

export const SelectCountryTracker1Atom = () => {
    return (
        <div className="row title_select">
            <div className="content_select_country col-lg-3 col-md-12 px-0">
                <select className="form-select form-select-lg mb-3">
                    <option selected>Afghanistan</option>
                    <option value="1">Albania</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="col-lg-9 text-lg-end text-center content_date pe-0">
                <p>Updated: January 31, 2022</p>
            </div>
        </div>
    )
}
