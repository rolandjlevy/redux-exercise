function itemInput(state = '', action){
  switch (action.type) {
    case "SET_ITEM_STRING": 
      return action.itemString
    default: 
      return state
  }
}

export default itemInput;