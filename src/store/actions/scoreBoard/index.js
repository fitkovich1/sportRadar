import { getRandomNumber, getRandomTeamObj, getTeamSides, getTwoRandomNumbers } from "../../../helpers/helper";
import allCountries from "../../../assets/additional_data/countries.json";

export const ActionTypes = {
  SET_CURRENT_MATCH_DATA: 'SET_CURRENT_MATCH_DATA',
  SET_GOAL_FOR_TEAM: 'SET_GOAL_FOR_TEAM',
  SAVE_GAME: 'SAVE_GAME',
};

export const generateNewMatch = () => async ( dispatch, getState ) => {
  let currentMatchData = Object.assign({}, getState().scoreBoard.defaultDataForCurrentMatch);
  let completedMatches = getState().scoreBoard.completedMatches;
  const validArr = await getTwoRandomNumbers(allCountries);
  currentMatchData["match_id"] = completedMatches.length;
  currentMatchData["home_team"] = getRandomTeamObj(allCountries, validArr[0]);
  currentMatchData["away_team"] = getRandomTeamObj(allCountries, validArr[1]);
  dispatch(setCurrentMatchData(currentMatchData, true));
};

const setCurrentMatchData = ( matchData, isCurrentMatchStarted ) => {
  return {
    type: ActionTypes.SET_CURRENT_MATCH_DATA,
    currentMatchData: matchData,
    isCurrentMatchStarted
  };
};

export const setGoalForTeam = ( teamSide ) => {
  return {
    type: ActionTypes.SET_GOAL_FOR_TEAM,
    teamSide
  };
};

export const stopGameAndSave = () => async ( dispatch ) => {
  dispatch(saveGame());
  dispatch(setCurrentMatchData({}, false));
};

export const updateScore = () => async ( dispatch ) => {
  let teamSide = getTeamSides()[getRandomNumber(2)];
  dispatch(setGoalForTeam(teamSide));
};

const saveGame = () => ({ type: ActionTypes.SAVE_GAME });
