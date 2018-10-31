import React from 'react';
import CharacterSearchContainer from '../containers/CharacterSearchContainer';
import CharacterResultContainer from '../containers/CharacterResultContainer';


class App extends React.Component {
  render(){
    return (
      <div>
        <CharacterSearchContainer />
        <CharacterResultContainer />
      </div>
    )
  }
}

export default App;
