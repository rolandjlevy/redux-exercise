function characterResults(state = [], action){
  switch (action.type) {
    case "RECEIVE_CHARACTERS": 
      return action.characters
    default: 
      return state
  }
}

export default characterResults;
