import {Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Home";
import MeetPage from './pages/Meet';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route path="/meet/:meetId" element={<MeetPage/>} />
       

      </Routes>
    </div>
  );
}

export default App;
