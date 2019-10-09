import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact 
      avatar= "https://randomuser.me/api/portraits/men/0.jpg" 
      name= "Jose Phillips"/>
      <Contact 
      avatar= "https://randomuser.me/api/portraits/women/96.jpg"
      name = "Irene Chavez" online/>
      <Contact 
      avatar= "https://randomuser.me/api/portraits/women/38.jpg"
      name = "Tanya Johnston" online/>
      
    </div>
  );
}

export default App;
