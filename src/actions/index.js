export function setCharacterString(characterString) {
    return {
        type: 'SET_CHARACTER_STRING',
        characterString: characterString
    }
}

export function receiveCharacter(result){
    return {
        type: 'RECEIVE_CHARACTER',
        character: result.results[0]
    }
}

export function fetchCharacter(characterString){
    return function(dispatch, getState){
        fetch(`https://swapi.co/api/people/?search=${characterString}`)
        .then(response=> response.json())
        .then(result=> {
            dispatch(receiveCharacter(result));
            dispatch(setCharacterString(''));
        })
        .catch(error => console.log(`What's going on?!`))
    }
}