import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import dummyData from './dummy-data'

class App extends React.Component {
  constructor(){
    super()
    this.state = dummyData
  }
  
  render() {
    return (
      <div>
        <Searchbar />
        </div>
    )
  }
}

export default App
