import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateNewMatch, stopGameAndSave, updateScore } from "../../store/actions/scoreBoard";
import CompletedMatchesItem from "../CompletedMatches/CompletedMatchesItem";
import { textForButtons } from "../../helpers/helper";
import cn from "classnames";
import "./styles.css";

const CurrentMatch = () => {
  
  const [intervalId, setIntervalId] = useState(0);
  const isCurrentMatchStarted = useSelector(state => state.scoreBoard.isCurrentMatchStarted);
  const currentMatch = useSelector(state => state.scoreBoard.currentMatch);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isCurrentMatchStarted && !intervalId) {
      let intervalId = setInterval(() => dispatch(updateScore()), 5000);
      setIntervalId(intervalId);
    }
  }, [dispatch, intervalId, isCurrentMatchStarted]);
  
  const onHandleStartGame = () => dispatch(generateNewMatch());
  const onHandleStopGame = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    dispatch(stopGameAndSave());
  };
  
  return (
    <section className={cn("CurrentMatch", isCurrentMatchStarted && 'in_progress')}>
      {
        isCurrentMatchStarted && currentMatch && Object.keys(currentMatch).length > 0 ?
          <>
            <CompletedMatchesItem homeTeamData={currentMatch["home_team"]}
                                  awayTeamData={currentMatch["away_team"]}
                                  className={"current_match"}
            />
            <button onClick={onHandleStopGame}>{textForButtons.stopGame}</button>
          </>
          : <button onClick={onHandleStartGame}>{textForButtons.startGame}</button>
      }
    </section>
  );
}

export default CurrentMatch;
