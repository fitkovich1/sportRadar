const loadImages = ( req ) => {
  let images = {};
  req.keys().map(item => images[item.replace('./', '').replace('logo/', '').replace('flags/', '')] = req(item));
  return images;
}

export const loadCurrentImage = ( pathOfImage ) => {
  return loadImages(require.context("../assets/images", true))[`${pathOfImage}`];
}

export const getTwoRandomNumbers = ( allCountries ) => {
  let randNumbersArray = Array(2).fill("0").map(item => item = getRandomNumber(allCountries.length + 1));
  if (randNumbersArray[0] === randNumbersArray[1]) {
    return getTwoRandomNumbers(allCountries);
  }
  return randNumbersArray
}

export const getRandomTeamObj = ( allCountries, id ) => {
  return allCountries.filter(country => country.country_id === id)[0];
}

export const getRandomNumber = ( maxNum ) => {
  return Math.floor(Math.random() * maxNum);
}

export const sortGamesByScoreAndDate = ( completedMatches ) => {
  return completedMatches.sort(( a, b ) => {
    if (+a["home_team"].goals + +a["away_team"].goals > +b["home_team"].goals + +b["away_team"].goals) {
      return -1;
    }
    return 0
  }).sort(( a, b ) => {
    if (+a["home_team"].goals + +a["away_team"].goals === +b["home_team"].goals + +b["away_team"].goals && a.match_id > b.match_id) {
      return -1;
    }
    return 0
  });
}

export const getTeamSides = () => {
  return ["home_team", "away_team"];
}

export const textForButtons = {
  stopGame: "Stop game and save result",
  startGame: "Start random game",
}