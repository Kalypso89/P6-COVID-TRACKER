export function RowStatistics({title, today, total}) {
  return (
    <div className="statistics_row">
        <div className="statistics_row_title">
          <p>{title}</p>
        </div>
        <div className="statistics_row_today">
          <p>{today}</p>
        </div>
        <div className="statistics_row_total">
          <p>{total}</p>
        </div>
    </div>
  )
}