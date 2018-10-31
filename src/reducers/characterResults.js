function characterResult(state = {}, action){
  switch (action.type) {
    case "RECEIVE_CHARACTER": 
      return action.character
    default: 
      return state
  }
}

export default characterResult;
