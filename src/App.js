import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '10-12-2022'}, {weight: 176, date: '10-13-2022'}]);

  function addNewEntry(entry) {
    
    // Elipse is a 'spread' operator (Removes the nested array by adding each item into the new array)
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);

  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
