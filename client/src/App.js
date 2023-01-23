import { Route, Routes } from "react-router-dom"
import Landing from "./component/Landing";

function App() {
  return (
  <div className="App">
   <h1>hola</h1>
   <Routes>
    <Route exact path="/" element={<Landing name = 'Javier' />} />
   </Routes>
    
  </div>
  )
}

export default App;
