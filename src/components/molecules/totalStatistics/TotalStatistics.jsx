import { useTotalStatistics } from "../../../configuration/hooks/useTotalStatistics";
import { RowStatistics } from "../../atoms/RowStatistics";

export function TotalStatistics() {
    const totalStatistics = useTotalStatistics();
    return (
      <section>
        <h1>COVID-19 Tracker</h1>
        <div className="statistics_container">
          {
              totalStatistics.map(({ titleAPI, variationAPI, totalAPI }) => (
                  <RowStatistics 
                      key={titleAPI}
                      title={titleAPI}
                      variation={variationAPI}
                      total={totalAPI}
                  />
              ))
          }
        </div>
      </section>
    );
  }