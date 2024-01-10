import { useTotalStatistics } from "../../../hooks/useTotalStatistics";
import { RowStatistics } from "../../atoms/rowStatistics/RowStatistics";
import "./totalStatistics.css";

export function TotalStatistics() {
    const totalStatistics = useTotalStatistics();
    return (
      <section>
        <h2 className="statistics_title">COVID-19 Tracker</h2>
        <ul className="statistics_container">
          {
              totalStatistics.map((row) => (
                  <RowStatistics 
                      key={row.title}
                      {...row}
                  />
              ))
          }
        </ul>
      </section>
    );
  }