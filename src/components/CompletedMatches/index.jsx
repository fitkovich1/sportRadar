import React from "react";
import { useSelector } from "react-redux";
import CompletedMatchesItem from "./CompletedMatchesItem";
import "./styles.css";

const CompletedMatches = () => {
  
  const completedMatches = useSelector(state => state.scoreBoard.completedMatches);
  
  return (
    <section className="CompletedMatches">
      {
        completedMatches?.length > 0 ? completedMatches.map(match => {
          return <CompletedMatchesItem key={match["match_id"]}
                                       homeTeamData={match["home_team"]}
                                       awayTeamData={match["away_team"]}
          />
        }) : null
      }
    </section>
  );
}

export default CompletedMatches;
