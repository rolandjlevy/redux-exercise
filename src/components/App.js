import React from 'react';
import ItemSearchContainer from '../containers/ItemSearchContainer';
import ItemResultContainer from '../containers/ItemResultContainer';
import CategorySelectorContainer from "../containers/CategorySelectorContainer"


class App extends React.Component {
  render(){
    return (
      <div>
        <CategorySelectorContainer />
        <ItemSearchContainer />
        <ItemResultContainer />
      </div>
    )
  }
}

export default App;
