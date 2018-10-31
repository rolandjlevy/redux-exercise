function characterInput(state = '', action){
  switch (action.type) {
    case "SET_CHARACTER_STRING": 
      return action.characterString
    default: 
      return state
  }
}

export default characterInput;
