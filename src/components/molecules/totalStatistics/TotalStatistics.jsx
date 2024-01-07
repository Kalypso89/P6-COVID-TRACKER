import { useTotalStatistics } from "../../../hooks/useTotalStatistics";
import { RowStatistics } from "../../atoms/rowStatistics/RowStatistics";
import "./totalStatistics.css";

export function TotalStatistics() {
    const totalStatistics = useTotalStatistics();
    return (
      <section>
        <h1>COVID-19 Tracker</h1>
        <div className="statistics_container">
          {
              totalStatistics.map((row) => (
                  <RowStatistics 
                      key={row.title}
                      {...row}
                  />
              ))
          }
        </div>
      </section>
    );
  }