import './App.css';
import { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
const myAPI = "getGreeting"
const path = '/greeting'; 
function App() {
  const [greeting, setGreeting] = useState('test')

  useEffect(() => {
    async function fetchData() {
      let result = await API.get(myAPI, path);
      setGreeting(result);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <p>{greeting}</p>
    </div>
  );
}

export default App;
