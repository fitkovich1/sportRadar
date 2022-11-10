import React from "react";
import Image from "../../Image";
import cn from "classnames";
import "./styles.css";

const CompletedMatchesItem = ( props ) => {
  
  const { homeTeamData, awayTeamData, className } = props;
  
  return (
    <div className={cn("CompletedMatchesItem", className && className)}>
      <div className="CompletedMatchesItem-home_team">
        <p>{homeTeamData?.country}</p>
        <Image src={homeTeamData?.flag}
               alt={homeTeamData?.flag}
               className="flag"
        />
      </div>
      <p className="CompletedMatchesItem-score">{homeTeamData?.goals} : {awayTeamData?.goals}</p>
      <div className="CompletedMatchesItem-away_team">
        <Image src={awayTeamData?.flag}
               alt={awayTeamData?.flag}
               className="flag"
        />
        <p>{awayTeamData?.country}</p>
      </div>
    </div>
  );
}

export default CompletedMatchesItem;
