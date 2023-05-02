import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"
import * as SupabaseSupabaseJs from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0";
const supabaseUrl = 'https://eggtdvvjoksncmdbxgsz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZ3RkdnZqb2tzbmNtZGJ4Z3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNjE4MDgsImV4cCI6MTk5MzczNzgwOH0.1PNSCvjCrAqMEUPXpPX6qwZCqTRexjWZuhIzSZeorK0'
const supabase = createClient(supabaseUrl, supabaseKey)


function Testbutton() {
  const handleClick = () => {
    console.log('嘻嘻');
  };

  let text = "balabala";

  return(
    <button onClick={handleClick}>{text}</button>
  );
}
function Test2(){
  let a = "还没按"
  if(true){
    a="答案不对"
  }
  return(
    <div>{a}</div>
  );
}

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: testList, error } = await supabase.from('testList').select('*');

      if (error) {
        console.error(error);
      } else {
        setData(testList);
      }
    }

    fetchData();
  }, []);
  return(
    <div class="back">
      <table class="selectList">
      <thead class="thead">  
        <tr class="item">
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody class="selectListBody List">
        {data.map((row)=>(
          <tr class="item">
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.author}</td>
            <td>{row.isbn}</td>
            <td>{row.description}</td>
          </tr>
        )
        )}
      </tbody>
    </table>
    <script type="module" src="supsbasetable.js"></script>
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Testbutton/>
        <Table/>
        <Test2/>
      </header>
    </div>
  );
}

export default App;
