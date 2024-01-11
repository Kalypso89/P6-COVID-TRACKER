import "./rowStatisticsAtom.css"

export function RowStatisticsAtom({title, today, total, color, backgroundColor}) {

  return (
    <li className="statistics_row" data-color={color} style={{ backgroundColor, borderColor: color }}>
        <h6 className="statistics_row_title">{title}</h6>
        {
          today !== null && <span className="statistics_row_today">+{today}</span>
        }
        <span className="statistics_row_total" style={{ color }}>{total}</span>
    </li>
  )
}