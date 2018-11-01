import React from 'react';
import ItemSearchContainer from '../containers/ItemSearchContainer';
import ItemResultContainer from '../containers/ItemResultContainer';


class App extends React.Component {
  render(){
    return (
      <div>
        <ItemSearchContainer />
        <ItemResultContainer />
      </div>
    )
  }
}

export default App;
