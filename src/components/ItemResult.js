import React from 'react';

function ItemResult ({ item }){
    
    function format (key, value) {
        if (typeof value === 'string') {
            return value.includes('http') ? <a href={value} target='_blank'>visit {key}</a> : value;
        } else if (typeof value === 'object') {
            return (<ul>
            {value.map (arrayItem => {
                return arrayItem.includes('http') ? <li key={arrayItem}>visit: <a href={arrayItem} target='_blank'>{arrayItem}</a><br /></li> : <li>{arrayItem}</li>;
            })}
            </ul>)
        }
    }

    return(
        <div>
            <ul>
            {Object.keys(item).map(arrayItem => {
                const itemValue = item[arrayItem];
                return (<li key={arrayItem}>
                    <strong>{arrayItem}</strong> => {format (arrayItem, itemValue)} 
                </li>)
            })}
            </ul>
        </div>
    )
}

export default ItemResult;