import React from 'react';

function CharacterResult ({ character }){
    
    function format (key, value) {
        if (typeof value === 'string') {
            return value.includes('http') ? <a href={value} target='_blank'>visit {key}</a> : value;
        } else if (typeof value === 'object') {
            return (<ul>
            {value.map (item => {
                return item.includes('http') ? <li key={item}>visit: <a href={item} target='_blank'>{item}</a><br /></li> : <li>{item}</li>;
            })}
            </ul>)
        }
    }

    return(
        <div>
            <ul>
            {Object.keys(character).map(item => {
                const characterValue = character[item];
                return (<li key={item}>
                    <strong>{item}</strong> => {format (item, characterValue)}
                </li>)
            })}
            </ul>
        </div>
    )
}

export default CharacterResult;