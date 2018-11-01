function itemResult(state = {}, action){
  switch (action.type) {
    case "RECEIVE_ITEM": 
      return action.item
    default: 
      return state
  }
}

export default itemResult;
