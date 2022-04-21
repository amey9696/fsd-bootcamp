import React from 'react'; 
import './App.css';
import Gallery from './Components/Gallery';
// import LoadImage from "./Photo/api";
function App() {
  // const data=LoadImage();
  return (
    <div className="App">
      <Gallery/>
      {/* {
        data.map((img)=>(
          
        ))
      } */}
    </div>
  );
}

export default App;