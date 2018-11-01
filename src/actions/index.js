export function setItemString(itemString) {
    return {
        type: 'SET_ITEM_STRING',
        itemString: itemString
    }
}

export function receiveItem(result){
    return {
        type: 'RECEIVE_ITEM',
        item: result.results[0]
    }
}

export function fetchItem(itemString){
    return function(dispatch, getState){
        fetch(`https://swapi.co/api/people/?search=${itemString}`)
        .then(response=> response.json())
        .then(result=> {
            dispatch(receiveItem(result));
            dispatch(setItemString(''));
        })
        .catch(error => console.log(`What's going on?!`))
    }
}