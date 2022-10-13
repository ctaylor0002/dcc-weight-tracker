import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css'

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '10-12-2022'}, {weight: 176, date: '10-13-2022'}]);

  function addNewEntry(entry) {
    
    // Elipse is a 'spread' operator (Removes the nested array by adding each item into the new array)
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);

  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Weight 
        <small className='text-muted'>Tracker</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className='border-box'>
            <AddEntryForm addNewEntryProperty={addNewEntry}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
