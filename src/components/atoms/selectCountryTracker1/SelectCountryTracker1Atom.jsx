import "./selectCountryTracker1Atom.css"

export const SelectCountryTracker1Atom = () => {
    return (
        <div className="content_select_country">
            <select className="form-select form-select-lg mb-3">
                <option selected>Afghanistan</option>
                <option value="1">Albania</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    )
}
