import { useTotalStatistics } from "../../../hooks/useTotalStatistics";
import { RowStatistics } from "../../atoms/RowStatistics";

export function TotalStatistics() {
    const totalStatistics = useTotalStatistics();
    return (
      <section>
        <h1>COVID-19 Tracker</h1>
        <div className="statistics_container">
          {
              totalStatistics.map(({ title, today, total }) => (
                  <RowStatistics 
                      key={title}
                      title={title}
                      today={today}
                      total={total}
                  />
              ))
          }
        </div>
      </section>
    );
  }