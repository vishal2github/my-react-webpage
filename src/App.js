import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React Webpage</h1>
      </header>

      <main>
        <p>This is a simple webpage created using React.</p>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
        <h1>VISHAL BHARDWAJ</h1>
        <p>Hello world! Have a good day!</p>
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2025 My Simple React Webpage</p>
      </footer>
    </div>
  );
}

export default App;
