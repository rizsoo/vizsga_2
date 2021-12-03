import logo from './logo.svg';
import './App.css';
import Card from './Card';
import JSONDATA from './data.json';
import { useState } from 'react';
import data from './data.js';
import Error from './Error';

function App() {
   const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <div className={"navbar"}>
        <h1>Webshop</h1>
        <input type="text" placeholder={"Search for products"} onChange={event => {setSearchTerm(event.target.value)}}/>
      </div>
      <div className={"cardholder"}>
        {data.filter(function(val, array) {
          if (searchTerm == "" || val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
          } else {
            console.log("error");
          }
        }).map(card => 
      <Card card={card}/>
        )}
        
        
      </div>
    </div>
  );
}

export default App;
