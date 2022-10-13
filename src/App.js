import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '10-12-2022'}, {weight: 176, date: '10-13-2022'}]);

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
