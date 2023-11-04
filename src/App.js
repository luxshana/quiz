
import './App.css';
import Login from "./Components/Login"
import Quiz from "./Components/Quiz"
import Quiz1 from "./Components/Quiz1"
import Quiz2 from "./Components/Quiz2"
import Quiz3 from "./Components/Quiz3"
import Quiz4 from "./Components/Quiz4"
import Quiz5 from "./Components/Quiz5"
import Dashboard from "./Components/Dashboard"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>
      {/* <Route path="" element={<Login />} /> */}
      <Route path="" element={<Dashboard />} />
   
      <Route path="/Quiz" element={ <Quiz />} />
      <Route path="/Quiz1" element={ <Quiz1 />} />
      <Route path="/Quiz2" element={ <Quiz2 />} />
      <Route path="/Quiz3" element={ <Quiz3 />} />
      <Route path="/Quiz4" element={ <Quiz4 />} />
      <Route path="/Quiz5" element={ <Quiz5 />} />

     
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
