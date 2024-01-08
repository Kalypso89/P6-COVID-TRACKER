import { TotalStatistics } from "../../molecules/totalStatistics/TotalStatistics";
import { Top10Country } from "../../molecules/top10Country/Top10Country";
import "./tracker0Organism.css";

export function Tracker0Organism() {
    return (
      <aside className="tracker0_organism">
        <TotalStatistics></TotalStatistics>
        <Top10Country></Top10Country> 
      </aside>
    );
  }