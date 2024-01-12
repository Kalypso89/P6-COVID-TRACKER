import { useTotalStatistics } from "../../../hooks/useTotalStatistics";
import { RowStatisticsAtom } from "../../atoms/rowStatisticsAtom/RowStatisticsAtom";
import "./totalStatisticsMolecule.css";

export function TotalStatisticsMolecule() {
    const totalStatistics = useTotalStatistics();
    return (
      <section>
        <h2 className="statistics_title">COVID-19 Tracker</h2>
        <ul className="statistics_container">
          {
              totalStatistics.map((row) => (
                  <RowStatisticsAtom 
                      key={row.title}
                      {...row}
                  />
              ))
          }
        </ul>
      </section>
    );
  }