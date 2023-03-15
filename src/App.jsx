import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import List from './components/List'

function App() {

  const [selectedItem, setSelectedItem] = useState(undefined);

  const handlerSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <List handlerSelectItem={handlerSelectItem} selectedItem={selectedItem} />
      {selectedItem ? <Details item={selectedItem} /> : undefined}
    </div>
  )
}

export default App
