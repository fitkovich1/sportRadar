import { ActionTypes } from "../../actions/scoreBoard";
import { sortGamesByScoreAndDate } from "../../../helpers/helper";
import completedMatches from "../../../assets/additional_data/matches.json";
import allCountries from "../../../assets/additional_data/countries.json";

const initialState = {
  completedMatches: sortGamesByScoreAndDate(completedMatches),
  allCountries: allCountries,
  defaultDataForCurrentMatch: {
    "match_id": null,
    "home_team": {
      "country_id": null,
      "country": null,
      "flag": null,
      "goals": 0
    },
    "away_team": {
      "country_id": null,
      "country": null,
      "flag": null,
      "goals": 0
    }
  },
  currentMatch: {},
  isCurrentMatchStarted: false
};

const scoreBoardReducer = ( state = initialState, action ) => {
  const { type, currentMatchData, teamSide, isCurrentMatchStarted } = action;
  console.log(type)
  switch (type) {
    case ActionTypes.SET_CURRENT_MATCH_DATA:
      return {
        ...state,
        currentMatch: currentMatchData,
        isCurrentMatchStarted
      };
    case ActionTypes.SET_GOAL_FOR_TEAM:
      return {
        ...state,
        currentMatch: {
          ...state.currentMatch,
          [teamSide]: {
            ...state.currentMatch[teamSide],
            goals: state.currentMatch[teamSide].goals + 1
          }
        }
      };
    case ActionTypes.SAVE_GAME:
      return {
        ...state,
        completedMatches: sortGamesByScoreAndDate([...state.completedMatches, state.currentMatch])
      };
    default:
      return state;
  }
};

export default scoreBoardReducer;